import { hero, profile } from "@/content/portfolio";

const secondary =
  "inline-flex items-center rounded-md border border-line px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-surface";

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto max-w-5xl px-5 pb-16 pt-14 sm:px-8 sm:pt-20 md:pb-24"
    >
      <p className="rise text-sm font-semibold uppercase tracking-[0.14em] text-accent">
        {profile.title}, {profile.company}
      </p>
      <h1 className="rise mt-5 font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
        {profile.name}
      </h1>
      <p className="rise mt-7 max-w-2xl font-display text-2xl leading-snug sm:text-3xl">
        {hero.headline}
      </p>
      <p className="rise mt-5 max-w-2xl text-lg leading-relaxed text-muted">
        {hero.support}
      </p>
      <div className="rise mt-9 flex flex-wrap gap-3">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent transition-opacity hover:opacity-90"
        >
          Email me
        </a>
        <a
          href={profile.resumePdf}
          download="Josiah_Woltjer_Resume.pdf"
          className={secondary}
        >
          Download resume
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={secondary}
        >
          LinkedIn
        </a>
      </div>
      <p className="rise mt-8 text-sm text-muted">{profile.location}</p>
    </section>
  );
}
