import { direction } from "@/content/portfolio";
import { Section } from "./Section";

export function Direction() {
  return (
    <Section id="direction" label="Next" title={direction.heading}>
      <p className="max-w-2xl text-lg leading-relaxed text-muted">
        {direction.body}
      </p>
    </Section>
  );
}
