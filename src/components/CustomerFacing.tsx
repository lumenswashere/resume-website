import { customerFacing } from "@/content/portfolio";
import { Section } from "./Section";

export function CustomerFacing() {
  return (
    <Section
      id="customers"
      label="In the room"
      title={customerFacing.heading}
      tone="tint"
    >
      <p className="max-w-2xl text-lg leading-relaxed text-muted">
        {customerFacing.intro}
      </p>
      <ul className="mt-10 grid gap-x-10 gap-y-9 sm:grid-cols-2">
        {customerFacing.points.map((point) => (
          <li key={point.title}>
            <h3 className="font-display text-xl font-semibold tracking-tight">
              {point.title}
            </h3>
            <p className="mt-2 leading-relaxed text-muted">{point.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
