import { skills } from "@/content/portfolio";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section id="skills" label="Toolkit" title={skills.heading} tone="tint">
      <dl className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
        {skills.groups.map((group) => (
          <div key={group.label}>
            <dt className="text-sm font-semibold text-muted">{group.label}</dt>
            <dd className="mt-1 text-lg leading-snug">
              {group.items.join(" · ")}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
