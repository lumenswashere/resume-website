import { education } from "@/content/portfolio";
import { Section } from "./Section";

export function Education() {
  return (
    <Section id="education" label="Background" title={education.heading} tone="tint">
      <ul className="space-y-6">
        {education.degrees.map((degree) => (
          <li key={degree.school}>
            <h3 className="font-display text-xl font-semibold tracking-tight">
              {degree.school}
            </h3>
            <p className="mt-1 leading-relaxed text-muted">{degree.detail}</p>
          </li>
        ))}
      </ul>
      <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted">
        {education.honors.join(" · ")}
      </p>
    </Section>
  );
}
