import { experience } from "@/content/portfolio";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section id="experience" label="Career" title={experience.heading}>
      <ul className="space-y-12">
        {experience.roles.map((role) => (
          <li key={role.company}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-display text-2xl font-semibold tracking-tight">
                {role.company}
              </h3>
              <p className="text-sm text-muted">{role.dates}</p>
            </div>
            <ul className="mt-3 space-y-1 text-muted">
              {role.positions.map((position) => (
                <li key={position.title}>
                  <span className="font-semibold text-fg">{position.title}</span>
                  <span className="text-sm"> · {position.dates}</span>
                </li>
              ))}
            </ul>
            <ul className="mt-5 max-w-2xl list-disc space-y-2 pl-5 leading-relaxed text-muted marker:text-accent">
              {role.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}
