import { compliments } from "@/content/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Compliments() {
  return (
    <section
      id="praise"
      className="scroll-mt-8 px-5 py-20 sm:px-8 lg:px-12"
      aria-labelledby="praise-heading"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading id="praise-heading" eyebrow="Recognition">
          {compliments.heading}
        </SectionHeading>
        <ul className="grid gap-12 md:grid-cols-3">
          {compliments.items.map((item) => (
            <li key={item.attribution}>
              <blockquote>
                <p
                  className="text-lg leading-snug sm:text-xl"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--fg)",
                  }}
                >
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer
                  className="mt-4 text-sm leading-snug"
                  style={{ color: "var(--muted)" }}
                >
                  <cite className="not-italic">{item.attribution}</cite>
                  <span className="block mt-1" style={{ fontFamily: "var(--font-mono)" }}>
                    {item.date}
                  </span>
                </footer>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
