import { customerFacing } from "@/content/portfolio";
import { SectionHeading } from "./SectionHeading";

export function CustomerFacing() {
  return (
    <section
      id="customers"
      className="scroll-mt-8 px-5 py-20 sm:px-8 lg:px-12"
      aria-labelledby="customers-heading"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading id="customers-heading" eyebrow="In the room">
          {customerFacing.heading}
        </SectionHeading>
        <p
          className="mb-12 max-w-2xl text-lg leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          {customerFacing.intro}
        </p>
        <ol className="grid gap-10 sm:grid-cols-2">
          {customerFacing.points.map((point, i) => (
            <li key={point.title} className="flex gap-4">
              <span
                className="mt-1 shrink-0 text-sm font-medium"
                style={{
                  color: "var(--accent)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3
                  className="text-xl font-semibold tracking-tight"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--fg)",
                  }}
                >
                  {point.title}
                </h3>
                <p
                  className="mt-2 text-base leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  {point.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
