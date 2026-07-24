import { hero, nav, profile } from "@/content/portfolio";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-between px-5 pb-16 pt-6 sm:px-8 lg:px-12">
      <nav className="flex flex-wrap items-center justify-between gap-4">
        <p
          className="text-sm font-medium"
          style={{ color: "var(--muted)", fontFamily: "var(--font-mono)" }}
        >
          {profile.location}
        </p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="opacity-70 transition-opacity hover:opacity-100"
                style={{ color: "var(--fg)" }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center py-16">
        <h1
          className="hero-name max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          style={{ fontFamily: "var(--font-display)", color: "var(--fg)" }}
        >
          {profile.name}
        </h1>
        <p
          className="hero-fade mt-6 max-w-xl text-xl leading-snug sm:text-2xl"
          style={{ color: "var(--accent-2)", fontFamily: "var(--font-display)" }}
        >
          {hero.headline}
        </p>
        <p
          className="hero-fade mt-5 max-w-lg text-base leading-relaxed sm:text-lg"
          style={{ color: "var(--muted)", animationDelay: "120ms" }}
        >
          {hero.support}
        </p>
        <div
          className="hero-fade mt-10 flex flex-wrap gap-3"
          style={{ animationDelay: "200ms" }}
        >
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center rounded-md px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-90"
            style={{ background: "var(--accent)", color: "var(--on-accent)" }}
          >
            Email
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md border px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-80"
            style={{ borderColor: "var(--border)", color: "var(--fg)" }}
          >
            LinkedIn
          </a>
          <a
            href={profile.resumePdf}
            download="Josiah_Woltjer_Resume.pdf"
            className="inline-flex items-center rounded-md border px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-80"
            style={{ borderColor: "var(--border)", color: "var(--fg)" }}
          >
            Download resume
          </a>
          <a
            href="#proof"
            className="inline-flex items-center rounded-md border px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-80"
            style={{ borderColor: "var(--border)", color: "var(--fg)" }}
          >
            See the numbers
          </a>
        </div>
      </div>

      <p
        className="max-w-xl text-sm leading-relaxed"
        style={{ color: "var(--muted)" }}
      >
        {profile.title} at {profile.company}
      </p>
    </section>
  );
}
