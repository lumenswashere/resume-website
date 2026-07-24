import { aiNative } from "@/content/portfolio";
import { SectionHeading } from "./SectionHeading";

export function AiNative() {
  return (
    <section
      id="ai"
      className="scroll-mt-8 px-5 py-20 sm:px-8 lg:px-12"
      aria-labelledby="ai-heading"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading id="ai-heading" eyebrow="Differentiator">
          {aiNative.heading}
        </SectionHeading>
        <p
          className="mb-12 max-w-2xl text-lg leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          {aiNative.intro}
        </p>
        <ul className="grid gap-10 md:grid-cols-2">
          {aiNative.points.map((point) => (
            <li key={point.title} className="max-w-md">
              <h3
                className="text-xl font-semibold tracking-tight"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--fg)",
                }}
              >
                {point.title}
              </h3>
              <p
                className="mt-3 text-base leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                {point.body}
                {"href" in point && point.href ? (
                  <>
                    {" "}
                    <a
                      href={point.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4 transition-opacity hover:opacity-80"
                      style={{ color: "var(--accent)" }}
                    >
                      {point.hrefLabel}
                    </a>
                  </>
                ) : null}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
