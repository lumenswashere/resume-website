import { forwardDeployed } from "@/content/portfolio";
import { Section } from "./Section";

export function ForwardDeployed() {
  const { lead, stories, heading } = forwardDeployed;

  return (
    <Section id="field" label="Field work" title={heading}>
      <article className="max-w-3xl">
        <p className="text-sm font-semibold text-accent">
          {lead.date} · {lead.location}
        </p>
        <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
          {lead.title}
        </h3>
        <p className="mt-4 text-lg leading-relaxed text-muted">{lead.body}</p>
        <p className="mt-4 leading-relaxed text-muted">{lead.detail}</p>
      </article>

      <ul className="mt-14 grid gap-x-10 gap-y-8 border-t border-line pt-10 sm:grid-cols-2">
        {stories.map((story) => (
          <li key={story.client}>
            <h4 className="font-semibold">{story.client}</h4>
            <p className="mt-1.5 text-[0.95rem] leading-relaxed text-muted">
              {story.body}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
