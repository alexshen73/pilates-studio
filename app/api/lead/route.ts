// Використовується лише локально (`npm run dev`). На продакшені форму обробляє
// Cloudflare-воркер (worker/index.ts), бо сайт збирається як статичні файли.
import { handleLead } from "@/lib/lead-handler";

export async function POST(request: Request) {
  return handleLead(request, {
    TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN,
    TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID,
  });
}
