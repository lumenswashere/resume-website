import { recognition } from "@/content/portfolio";
import { Section } from "./Section";

export function Recognition() {
  return (
    <Section id="recognition" label="Recognition" title={recognition.heading}>
      <ul className="grid gap-10 md:grid-cols-2">
        {recognition.items.map((item) => (
          <li key={item.attribution + item.date} className="border-l-2 border-accent pl-5">
            <p className="font-display text-xl leading-snug">
              {item.quote ? <>&ldquo;{item.quote}&rdquo;</> : item.summary}
            </p>
            <p className="mt-4 text-sm leading-snug text-muted">
              {item.attribution} · {item.date}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
