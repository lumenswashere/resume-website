import { projects } from "@/content/portfolio";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section id="projects" label="Builds" title={projects.heading}>
      <ul className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
        {projects.items.map((item) => (
          <li key={item.title}>
            <h3 className="font-display text-xl font-semibold tracking-tight">
              {item.title}
            </h3>
            <p className="mt-1 text-sm text-accent">{item.meta}</p>
            <p className="mt-3 leading-relaxed text-muted">{item.body}</p>
            {"href" in item && item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block font-semibold text-accent underline underline-offset-4 hover:opacity-80"
              >
                {item.hrefLabel}
              </a>
            ) : null}
          </li>
        ))}
      </ul>
    </Section>
  );
}
