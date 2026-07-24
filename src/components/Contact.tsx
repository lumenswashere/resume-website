import { hero, profile } from "@/content/portfolio";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-8 px-5 py-24 sm:px-8 lg:px-12"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="contact-heading"
          className="text-4xl font-semibold tracking-tight sm:text-5xl"
          style={{ fontFamily: "var(--font-display)", color: "var(--fg)" }}
        >
          Let&apos;s talk
        </h2>
        <p
          className="mt-5 text-lg leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          {hero.openTo}
        </p>
        <ul className="mt-10 space-y-3 text-base sm:text-lg">
          <li>
            <a
              href={`mailto:${profile.email}`}
              className="underline underline-offset-4 transition-opacity hover:opacity-80"
              style={{ color: "var(--accent)" }}
            >
              {profile.email}
            </a>
          </li>
          <li style={{ color: "var(--fg)" }}>{profile.phone}</li>
          <li>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 transition-opacity hover:opacity-80"
              style={{ color: "var(--accent)" }}
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={profile.resumePdf}
              download="Josiah_Woltjer_Resume.pdf"
              className="underline underline-offset-4 transition-opacity hover:opacity-80"
              style={{ color: "var(--accent)" }}
            >
              Download resume (PDF)
            </a>
          </li>
          <li style={{ color: "var(--muted)" }}>{profile.location}</li>
        </ul>
      </div>
    </section>
  );
}
