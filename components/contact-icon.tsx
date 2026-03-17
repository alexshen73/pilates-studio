type ContactIconName = "instagram" | "tiktok" | "youtube" | "telegram" | "email" | "phone";

type ContactIconProps = {
  name: ContactIconName;
};

export function ContactIcon({ name }: ContactIconProps) {
  if (name === "instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5.5" />
        <circle cx="12" cy="12" r="4.1" />
        <circle cx="17.2" cy="6.8" r="1.1" />
      </svg>
    );
  }

  if (name === "tiktok") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14.2 4.2v8.5a4.5 4.5 0 1 1-3.2-4.3" />
        <path d="M14.2 6.1c.9 1.3 2.4 2.2 4.2 2.2" />
      </svg>
    );
  }

  if (name === "youtube") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.2" y="6.4" width="17.6" height="11.2" rx="3.2" />
        <path d="M10.2 9.4 15.2 12l-5 2.6z" />
      </svg>
    );
  }

  if (name === "telegram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21 4.8 3.9 11.4l5.4 2.1 2.2 5.7L21 4.8Z" />
        <path d="m9.3 13.5 11.1-8.7" />
      </svg>
    );
  }

  if (name === "email") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.3" y="5.6" width="17.4" height="12.8" rx="2.2" />
        <path d="m4.5 7.2 7.5 6 7.5-6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.4 3.8h3.3l1.7 4.1-2 1.9a13.8 13.8 0 0 0 4.8 4.8l1.9-2 4.1 1.7v3.3a2 2 0 0 1-2.3 2 17.8 17.8 0 0 1-13.5-13.5 2 2 0 0 1 2-2.3Z" />
    </svg>
  );
}

