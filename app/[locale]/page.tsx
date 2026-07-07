import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ContactIcon } from "@/components/contact-icon";
import { LeadForm } from "@/components/lead-form";
import { SiteHeader } from "@/components/site-header";
import { ScrollTopButton } from "@/components/scroll-top-button";
import { content } from "@/lib/content";
import { isLocale, type Locale } from "@/lib/i18n";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

const contactsData = {
  instagram: "https://www.instagram.com/pilates_yuliya",
  tiktok: "https://www.tiktok.com/@pilates_yuliya",
  youtube: "https://www.youtube.com/@PilatesYuliya",
  telegram: "https://t.me/pilatesyuliya",
  email: "https://mail.google.com/mail/?view=cm&fs=1&to=pilates.yuliya.coach@gmail.com",
  emailLabel: "pilates.yuliya.coach@gmail.com",
  phone: "tel:+380972813267",
  phoneLabel: "+380 97 281 32 67",
};

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const data = content[locale as Locale];

  return {
    title: data.pageTitle,
    description: data.pageDescription,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        uk: "/uk",
        en: "/en",
      },
    },
    openGraph: {
      title: data.pageTitle,
      description: data.pageDescription,
      type: "website",
      url: `/${locale}`,
    },
  };
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const data = content[locale as Locale];
  const currentYear = new Date().getFullYear();
  const trainerName = locale === "en" ? "Yuliia Shendryk" : "Юлія Шендрик";

  const schema = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: data.pageTitle,
    description: data.pageDescription,
    sameAs: [contactsData.youtube, contactsData.telegram],
    inLanguage: locale,
    telephone: "+380972813267",
    image: "https://www.pilates-yuliya.com/photos/hero.webp",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <div className="pageShell theme-calm" id="top">
      <div className="bgShape bgShapeOne" aria-hidden />
      <div className="bgShape bgShapeTwo" aria-hidden />

      <SiteHeader locale={locale as Locale} nav={data.nav} />

      <main>
        <section className="container hero">
          <div className="heroGrid">
            <div>
              <p className="badge">{data.hero.badge}</p>
              <h1>{data.hero.title}</h1>
              <p className="heroSubtitle">{data.hero.subtitle}</p>

              <div className="ctaRow">
                <LeadForm locale={locale as Locale} ctaLabel={data.hero.primaryCta} />
                <a href={contactsData.youtube} className="btn btnGhost" target="_blank" rel="noreferrer">
                  {data.hero.secondaryCta}
                </a>
              </div>
            </div>

            <div className="heroVisual">
              <Image
                src="/photos/hero.webp"
                alt={locale === "uk" ? "Тренування з пілатесу" : "Pilates training session"}
                fill
                priority
                unoptimized
                sizes="(min-width: 768px) 50vw, 100vw"
                className="heroVisualImage"
              />
            </div>
          </div>

          <div className="statsGrid">
            {data.hero.stats.map((item) => (
              <article key={item.label} className="statCard">
                <p>{item.label}</p>
                <strong>{item.value}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="container section proofStrip">
          <article className="faceCard">
            <div className="facePhoto">
              <Image
                src="/photos/fact.webp"
                alt={locale === "uk" ? "Результат занять пілатесом" : "Pilates training result"}
                fill
                unoptimized
                sizes="(min-width: 768px) 32vw, 100vw"
                className="facePhotoImage"
              />
            </div>
            <div>
              <p className="faceLabel">{locale === "uk" ? "Персональний супровід" : "Personal coaching"}</p>
              <h3>{locale === "uk" ? "Результат через системність" : "Progress through consistency"}</h3>
            </div>
          </article>
          <div className="proofGrid">
            <article className="percentCard">
              <strong>87%</strong>
              <p>
                {locale === "uk"
                  ? "відмічають покращення мобільності за перші 6 тижнів"
                  : "report better mobility within the first 6 weeks"}
              </p>
            </article>
            <article className="percentCard">
              <strong>92%</strong>
              <p>
                {locale === "uk"
                  ? "кажуть, що онлайн-формат легко вбудувати у графік"
                  : "say the online format fits naturally into their schedule"}
              </p>
            </article>
          </div>
        </section>

        <section id="about" className="container section block">
          <div className="sectionHead">
            <div>
              <h2>{data.about.title}</h2>
              <p>{data.about.description}</p>
            </div>
            <div className="visualBlock visualAbout">
              <Image
                src="/photos/pilates.webp"
                alt={locale === "uk" ? "Що таке пілатес" : "What is pilates"}
                fill
                unoptimized
                sizes="(min-width: 768px) 40vw, 100vw"
                className="visualBlockImage"
              />
            </div>
          </div>
          <ul className="pointList">
            {data.about.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>

        <section id="who-for" className="container section block">
          <h2>{data.whoFor.title}</h2>
          <p>{data.whoFor.description}</p>
          <div className="cardGrid">
            {data.whoFor.groups.map((group) => (
              <article key={group.title} className="infoCard">
                <h3>{group.title}</h3>
                <p>{group.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="trainer" className="container section split block">
          <article>
            <h2>{data.trainer.title}</h2>
            <p>{data.trainer.description}</p>
            <ul className="pointList">
              {data.trainer.credentials.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="profileCard" aria-label="Coach card">
            <div className="visualBlock visualTrainer">
              <Image
                src="/photos/coach.webp"
                alt={locale === "uk" ? "Тренер Юлія Шендрик" : "Coach Yuliia Shendryk"}
                fill
                unoptimized
                sizes="(min-width: 768px) 40vw, 100vw"
                className="visualBlockImage visualTrainerImage"
              />
            </div>
            <p className="profileTag">Expert</p>
            <h3>{trainerName}</h3>
          </article>
        </section>

        <section id="testimonials" className="container section block">
          <h2>{data.testimonials.title}</h2>
          <div className="faqGrid">
            {data.testimonials.items.map((item) => (
              <article key={item.author} className="testimonialCard">
                <p className="quote">"{item.quote}"</p>
                <p className="author">{item.author}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="formats" className="container section block">
          <div className="sectionHead">
            <div>
              <h2>{data.formats.title}</h2>
            </div>
            <div className="formatVisuals" aria-label={locale === "uk" ? "Формати занять" : "Training formats"}>
              <div className="formatVisual">
                <Image
                  src="/photos/group.webp"
                  alt={locale === "uk" ? "Групові заняття пілатесом" : "Group pilates session"}
                  fill
                  unoptimized
                  sizes="(min-width: 768px) 24vw, 100vw"
                  className="visualBlockImage"
                />
              </div>
              <div className="formatVisual">
                <Image
                  src="/photos/online.webp"
                  alt={locale === "uk" ? "Онлайн заняття пілатесом" : "Online pilates session"}
                  fill
                  unoptimized
                  sizes="(min-width: 768px) 24vw, 100vw"
                  className="visualBlockImage"
                />
              </div>
            </div>
          </div>
          <div className="cardGrid">
            {data.formats.cards.map((card) => (
              <article key={card.title} className="infoCard">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="blog" className="container section block">
          <h2>{data.blog.title}</h2>
          <p>{data.blog.description}</p>
          <div className="programGrid">
            {data.blog.posts.map((post) => (
              <article key={post.title} className="programCard">
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </article>
            ))}
          </div>
          <div className="ctaRow">
            <a href={`/${locale}/blog`} className="btn btnGhost">
              {data.blog.cta}
            </a>
          </div>
        </section>

        <section id="faq" className="container section block">
          <h2>{data.faq.title}</h2>
          <div className="faqAccordion">
            {data.faq.items.map((item) => (
              <details key={item.q} className="faqItem">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="contacts" className="container section block contacts">
          <h2>{data.contacts.title}</h2>
          <p>{data.contacts.description}</p>
          <div className="linkGrid">
            <a href={contactsData.instagram} target="_blank" rel="noreferrer" className="contactLink">
              <span className="iconChip">
                <ContactIcon name="instagram" />
              </span>
              {data.contacts.instagram}
            </a>
            <a href={contactsData.tiktok} target="_blank" rel="noreferrer" className="contactLink">
              <span className="iconChip">
                <ContactIcon name="tiktok" />
              </span>
              {data.contacts.tiktok}
            </a>
            <a href={contactsData.youtube} target="_blank" rel="noreferrer" className="contactLink">
              <span className="iconChip">
                <ContactIcon name="youtube" />
              </span>
              {data.contacts.youtube}
            </a>
            <a href={contactsData.telegram} target="_blank" rel="noreferrer" className="contactLink">
              <span className="iconChip">
                <ContactIcon name="telegram" />
              </span>
              {data.contacts.telegram}
            </a>
            <a href={contactsData.email} className="contactLink" target="_blank" rel="noreferrer">
              <span className="iconChip">
                <ContactIcon name="email" />
              </span>
              {contactsData.emailLabel}
            </a>
            <a href={contactsData.phone} className="contactLink">
              <span className="iconChip">
                <ContactIcon name="phone" />
              </span>
              {contactsData.phoneLabel}
            </a>
          </div>
        </section>
      </main>

      <ScrollTopButton />

      <footer className="container footer">(c) {currentYear} {data.footer}</footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </div>
  );
}
