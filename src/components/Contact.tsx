import { hero, profile } from "@/content/portfolio";

const link =
  "font-semibold text-accent underline underline-offset-4 hover:opacity-80";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-16 border-t border-line"
    >
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 md:py-24">
        <h2
          id="contact-title"
          className="font-display text-4xl font-semibold tracking-tight sm:text-5xl"
        >
          Let&apos;s talk
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          {hero.openTo}
        </p>
        <ul className="mt-9 space-y-3 text-lg">
          <li>
            <a href={`mailto:${profile.email}`} className={link}>
              {profile.email}
            </a>
          </li>
          <li>
            <a href={`tel:${profile.phone.replace(/[^\d]/g, "")}`}>
              {profile.phone}
            </a>
          </li>
          <li>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={link}
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={profile.resumePdf}
              download="Josiah_Woltjer_Resume.pdf"
              className={link}
            >
              Download resume (PDF)
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
