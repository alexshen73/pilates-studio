// Усі сторінки сайту — статичні файли (out/), Cloudflare віддає їх напряму,
// без запуску цього коду. Воркер запускається лише для запитів, яким не знайшлося
// статичного файлу: форма заявки та 404.
import { handleLead, type LeadEnv } from "../lib/lead-handler";

type Env = LeadEnv & {
  ASSETS: { fetch: (request: Request) => Promise<Response> };
};

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/api/lead") {
      if (request.method !== "POST") {
        return new Response("Method Not Allowed", { status: 405, headers: { Allow: "POST" } });
      }
      return handleLead(request, env);
    }

    return env.ASSETS.fetch(request);
  },
};
