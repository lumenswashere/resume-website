import { aiNative } from "@/content/portfolio";
import { Section } from "./Section";

export function AiNative() {
  return (
    <Section id="ai" label="Applied AI" title={aiNative.heading} tone="tint">
      <p className="max-w-2xl text-lg leading-relaxed text-muted">
        {aiNative.intro}
      </p>
      <ul className="mt-10 grid gap-x-10 gap-y-9 sm:grid-cols-2">
        {aiNative.points.map((point) => (
          <li key={point.title}>
            <h3 className="font-display text-xl font-semibold tracking-tight">
              {point.title}
            </h3>
            <p className="mt-2 leading-relaxed text-muted">{point.body}</p>
            {"href" in point && point.href ? (
              <a
                href={point.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block font-semibold text-accent underline underline-offset-4 hover:opacity-80"
              >
                {point.hrefLabel}
              </a>
            ) : null}
          </li>
        ))}
      </ul>
    </Section>
  );
}
