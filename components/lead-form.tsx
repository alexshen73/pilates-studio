"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

import type { Locale } from "@/lib/i18n";
import { isValidEmail, isValidPhone, normalizeContact } from "@/lib/lead-validation";

type LeadFormProps = {
  locale: Locale;
  ctaLabel: string;
};

type SubmitStatus = "idle" | "sending" | "success" | "error";

const formatOptions = {
  uk: [
    { value: "online", label: "Онлайн" },
    { value: "group", label: "Групове" },
    { value: "individual", label: "Індивідуальне" },
  ],
  en: [
    { value: "online", label: "Online" },
    { value: "group", label: "Group" },
    { value: "individual", label: "Individual" },
  ],
} as const;

const formCopy = {
  uk: {
    title: "Запис на пробне заняття",
    description: "Залиште контакти, і ми узгодимо зручний формат та час.",
    nameLabel: "Ім'я",
    namePlaceholder: "Ваше ім'я",
    phoneLabel: "Телефон",
    phonePlaceholder: "+380...",
    emailLabel: "Email",
    emailPlaceholder: "your@email.com",
    formatLabel: "Формат занять",
    submit: "Надіслати заявку",
    sending: "Надсилаємо...",
    close: "Закрити",
    successTitle: "Заявку надіслано",
    successMessage: "Дякуємо! Ми зв'яжемося з вами найближчим часом.",
    errorMessage: "Не вдалося надіслати заявку. Спробуйте ще раз або напишіть у Telegram.",
    privacy: "Дані підуть тільки тренеру для зв'язку щодо заняття.",
    required: "Заповніть ім'я, телефон або email, і формат занять.",
    invalidPhone: "Вкажіть коректний номер телефону.",
    invalidEmail: "Вкажіть коректний email.",
  },
  en: {
    title: "Book a Trial Session",
    description: "Leave your contact details, and we will arrange a comfortable format and time.",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    phoneLabel: "Phone",
    phonePlaceholder: "+380...",
    emailLabel: "Email",
    emailPlaceholder: "your@email.com",
    formatLabel: "Training format",
    submit: "Send request",
    sending: "Sending...",
    close: "Close",
    successTitle: "Request sent",
    successMessage: "Thank you! We will contact you shortly.",
    errorMessage: "The request could not be sent. Please try again or message us on Telegram.",
    privacy: "Your details go only to the coach for class-related contact.",
    required: "Please fill in your name, phone or email, and training format.",
    invalidPhone: "Enter a valid phone number.",
    invalidEmail: "Enter a valid email address.",
  },
} as const;

export function LeadForm({ locale, ctaLabel }: LeadFormProps) {
  const copy = formCopy[locale];
  const options = formatOptions[locale];
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [message, setMessage] = useState("");
  const [selectedFormat, setSelectedFormat] = useState<(typeof options)[number]["value"]>("online");

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstFieldRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && status !== "sending") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, status]);

  const openModal = () => {
    setStatus("idle");
    setMessage("");
    setIsOpen(true);
  };

  const closeModal = () => {
    if (status === "sending") {
      return;
    }

    setIsOpen(false);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const phone = normalizeContact(String(formData.get("phone") ?? ""));
    const email = normalizeContact(String(formData.get("email") ?? "")).toLowerCase();
    const website = String(formData.get("website") ?? "").trim();

    if (!name || (!phone && !email) || !selectedFormat) {
      setStatus("error");
      setMessage(copy.required);
      return;
    }

    if (phone && !isValidPhone(phone)) {
      setStatus("error");
      setMessage(copy.invalidPhone);
      return;
    }

    if (email && !isValidEmail(email)) {
      setStatus("error");
      setMessage(copy.invalidEmail);
      return;
    }

    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          format: selectedFormat,
          locale,
          website,
          page: window.location.href,
        }),
      });

      if (!response.ok) {
        const responseData = (await response.json().catch(() => null)) as { error?: string } | null;

        if (response.status === 400 && responseData?.error === "MISSING_CONTACT") {
          setStatus("error");
          setMessage(copy.required);
          return;
        }

        if (response.status === 400 && responseData?.error === "INVALID_CONTACT") {
          setStatus("error");
          setMessage(phone ? copy.invalidPhone : copy.invalidEmail);
          return;
        }

        throw new Error("Lead request failed");
      }

      form.reset();
      setSelectedFormat("online");
      setStatus("success");
      setMessage(copy.successMessage);
    } catch {
      setStatus("error");
      setMessage(copy.errorMessage);
    }
  };

  return (
    <>
      <button type="button" className="btn btnPrimary" onClick={openModal}>
        {ctaLabel}
      </button>

      {isOpen ? (
        <div className="leadOverlay" onMouseDown={closeModal}>
          <div
            className="leadModal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="lead-form-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="leadModalHeader">
              <div>
                <h2 id="lead-form-title">{status === "success" ? copy.successTitle : copy.title}</h2>
                <p>{status === "success" ? copy.successMessage : copy.description}</p>
              </div>
              <button type="button" className="leadClose" onClick={closeModal} aria-label={copy.close}>
                x
              </button>
            </div>

            {status === "success" ? (
              <div className="leadSuccess">
                <button type="button" className="btn btnPrimary" onClick={closeModal}>
                  {copy.close}
                </button>
              </div>
            ) : (
              <form className="leadForm" onSubmit={handleSubmit}>
                <label className="leadField">
                  <span>{copy.nameLabel}</span>
                  <input
                    ref={firstFieldRef}
                    className="leadInput"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder={copy.namePlaceholder}
                    required
                  />
                </label>

                <label className="leadField">
                  <span>{copy.phoneLabel}</span>
                  <input
                    className="leadInput"
                    name="phone"
                    type="text"
                    autoComplete="tel"
                    inputMode="tel"
                    placeholder={copy.phonePlaceholder}
                  />
                </label>

                <label className="leadField">
                  <span>{copy.emailLabel}</span>
                  <input
                    className="leadInput"
                    name="email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    placeholder={copy.emailPlaceholder}
                  />
                </label>

                <fieldset className="leadFieldset">
                  <legend>{copy.formatLabel}</legend>
                  <div className="formatChoices">
                    {options.map((option) => (
                      <label key={option.value} className="formatChoice">
                        <input
                          type="radio"
                          name="format"
                          value={option.value}
                          checked={selectedFormat === option.value}
                          onChange={() => setSelectedFormat(option.value)}
                        />
                        <span>{option.label}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <label className="leadTrap" aria-hidden="true">
                  Website
                  <input name="website" tabIndex={-1} autoComplete="off" />
                </label>

                <p className="leadPrivacy">{copy.privacy}</p>

                {message ? (
                  <p className={status === "error" ? "leadMessage leadMessageError" : "leadMessage"}>{message}</p>
                ) : null}

                <button type="submit" className="btn btnPrimary leadSubmit" disabled={status === "sending"}>
                  {status === "sending" ? copy.sending : copy.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
