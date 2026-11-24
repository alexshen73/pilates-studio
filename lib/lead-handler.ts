import { isValidEmail, isValidPhone, normalizeContact } from "./lead-validation";

const validFormats = ["online", "group", "individual"] as const;

type LeadFormat = (typeof validFormats)[number];

const formatLabels: Record<LeadFormat, string> = {
  online: "Онлайн",
  group: "Групове",
  individual: "Індивідуальне",
};

function getText(value: unknown) {
  return typeof value === "string" ? value.replace(/\s+/g, " ").trim() : "";
}

function isLeadFormat(value: string): value is LeadFormat {
  return validFormats.includes(value as LeadFormat);
}

function getKyivTime() {
  return new Intl.DateTimeFormat("uk-UA", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Europe/Kyiv",
  }).format(new Date());
}

export type LeadEnv = {
  TELEGRAM_BOT_TOKEN?: string;
  TELEGRAM_CHAT_ID?: string;
};

export async function handleLead(request: Request, env: LeadEnv): Promise<Response> {
  const botToken = env.TELEGRAM_BOT_TOKEN;
  const chatId = env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    return Response.json({ error: "Telegram is not configured" }, { status: 500 });
  }

  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!payload || typeof payload !== "object") {
    return Response.json({ error: "Invalid payload" }, { status: 400 });
  }

  const data = payload as Record<string, unknown>;
  const name = getText(data.name);
  const phone = normalizeContact(getText(data.phone));
  const email = normalizeContact(getText(data.email)).toLowerCase();
  const format = getText(data.format);
  const locale = getText(data.locale) || "uk";
  const page = getText(data.page);
  const website = getText(data.website);

  if (website) {
    return Response.json({ ok: true });
  }

  const hasPhone = phone.length > 0;
  const hasEmail = email.length > 0;

  if (name.length < 2 || (!hasPhone && !hasEmail) || !isLeadFormat(format)) {
    return Response.json({ error: "MISSING_CONTACT" }, { status: 400 });
  }

  if ((hasPhone && !isValidPhone(phone)) || (hasEmail && !isValidEmail(email))) {
    return Response.json({ error: "INVALID_CONTACT" }, { status: 400 });
  }

  const message = [
    "Нова заявка з сайту Pilates Studio",
    "",
    `Ім'я: ${name}`,
    hasPhone ? `Телефон: ${phone}` : "",
    hasEmail ? `Email: ${email}` : "",
    `Формат: ${formatLabels[format]}`,
    `Мова сторінки: ${locale === "en" ? "English" : "Українська"}`,
    `Час: ${getKyivTime()}`,
    page ? `Сторінка: ${page}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
      disable_web_page_preview: true,
    }),
  });

  if (!telegramResponse.ok) {
    const errorText = await telegramResponse.text();
    console.error("Telegram lead send failed:", errorText);
    return Response.json({ error: "Telegram request failed" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
