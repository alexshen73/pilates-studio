import Link from "next/link";
import { notFound } from "next/navigation";

import { ContactIcon } from "@/components/contact-icon";
import { LanguageSwitch } from "@/components/language-switch";
import { content } from "@/lib/content";
import { isLocale, type Locale } from "@/lib/i18n";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

const contactsData = {
  instagram: "https://instagram.com/yourprofile",
  tiktok: "https://tiktok.com/@yourprofile",
  youtube: "https://youtube.com/@yourchannel",
  telegram: "https://t.me/yourchannel",
  email: "mailto:hello@pilates.example",
  phone: "tel:+380000000000",
};

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const data = content[locale as Locale];
  const currentYear = new Date().getFullYear();

  const schema = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: data.pageTitle,
    description: data.pageDescription,
    sameAs: [contactsData.youtube, contactsData.telegram],
    inLanguage: locale,
  };

  return (
    <div className="pageShell theme-calm" id="top">
      <div className="bgShape bgShapeOne" aria-hidden />
      <div className="bgShape bgShapeTwo" aria-hidden />

      <header className="container header">
        <Link href={`/${locale}`} className="brandMark">
          Pilates Studio
        </Link>
        <nav className="navList" aria-label="Primary">
          <a href="#about">{data.nav.about}</a>
          <a href="#who-for">{data.nav.whoFor}</a>
          <a href="#trainer">{data.nav.trainer}</a>
          <a href="#testimonials">{data.nav.testimonials}</a>
          <a href="#formats">{data.nav.formats}</a>
          <a href="#blog">{data.nav.blog}</a>
          <a href="#faq">{data.nav.faq}</a>
          <a href="#contacts">{data.nav.contacts}</a>
        </nav>
        <LanguageSwitch locale={locale as Locale} />
      </header>

      <main>
        <section className="container hero">
          <p className="badge">{data.hero.badge}</p>
          <h1>{data.hero.title}</h1>
          <p className="heroSubtitle">{data.hero.subtitle}</p>

          <div className="ctaRow">
            <a href={contactsData.telegram} className="btn btnPrimary" target="_blank" rel="noreferrer">
              {data.hero.primaryCta}
            </a>
            <a href={contactsData.youtube} className="btn btnGhost" target="_blank" rel="noreferrer">
              {data.hero.secondaryCta}
            </a>
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

        <section id="about" className="container section block">
          <div className="sectionHead">
            <div>
              <h2>{data.about.title}</h2>
              <p>{data.about.description}</p>
            </div>
            <div className="visualBlock">Image: mindful movement</div>
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
          <article className="profileCard" aria-label="Trainer card">
            <div className="visualBlock visualTrainer">Image: trainer portrait</div>
            <p className="profileTag">Expert</p>
            <h3>Pilates Coach</h3>
            <p>{data.trainer.photoNote}</p>
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
            <div className="visualBlock">Image: online pilates setup</div>
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
            <a href={contactsData.email} className="contactLink">
              <span className="iconChip">
                <ContactIcon name="email" />
              </span>
              {data.contacts.email}
            </a>
            <a href={contactsData.phone} className="contactLink">
              <span className="iconChip">
                <ContactIcon name="phone" />
              </span>
              {data.contacts.phone}
            </a>
          </div>
        </section>
      </main>

      <a href="#top" className="upButton" aria-label="Scroll to top">
        ↑
      </a>

      <footer className="container footer">(c) {currentYear} {data.footer}</footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </div>
  );
}
