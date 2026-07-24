import { forwardDeployed } from "@/content/portfolio";
import { SectionHeading } from "./SectionHeading";

export function ForwardDeployed() {
  const { lead, stories, heading } = forwardDeployed;

  return (
    <section
      id="field"
      className="scroll-mt-8 px-5 py-20 sm:px-8 lg:px-12"
      aria-labelledby="field-heading"
      style={{ background: "var(--surface)" }}
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading id="field-heading" eyebrow="Autonomy">
          {heading}
        </SectionHeading>

        <article className="mb-14 max-w-3xl">
          <p
            className="text-xs font-medium uppercase tracking-[0.12em]"
            style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}
          >
            {lead.date} · {lead.location}
          </p>
          <h3
            className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl"
            style={{ fontFamily: "var(--font-display)", color: "var(--fg)" }}
          >
            {lead.title}
          </h3>
          <p
            className="mt-4 text-base leading-relaxed sm:text-lg"
            style={{ color: "var(--muted)" }}
          >
            {lead.body}
          </p>
          <p
            className="mt-4 text-base leading-relaxed sm:text-lg"
            style={{ color: "var(--muted)" }}
          >
            {lead.detail}
          </p>
        </article>

        <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <li key={story.client}>
              <h4
                className="text-base font-semibold"
                style={{ color: "var(--fg)" }}
              >
                {story.client}
              </h4>
              <p
                className="mt-2 text-sm leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                {story.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
