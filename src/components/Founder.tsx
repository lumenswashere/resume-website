import { founder } from "@/content/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Founder() {
  return (
    <section
      className="scroll-mt-8 px-5 py-20 sm:px-8 lg:px-12"
      aria-labelledby="founder-heading"
      style={{ background: "var(--surface)" }}
    >
      <div className="mx-auto max-w-3xl">
        <SectionHeading id="founder-heading" eyebrow="MBA and startup">
          {founder.heading}
        </SectionHeading>
        <p
          className="text-lg leading-relaxed sm:text-xl"
          style={{ color: "var(--muted)" }}
        >
          {founder.body}
        </p>
      </div>
    </section>
  );
}
