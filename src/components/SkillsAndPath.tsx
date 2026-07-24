import { education, experience, skills } from "@/content/portfolio";
import { SectionHeading } from "./SectionHeading";

export function SkillsAndPath() {
  return (
    <>
      <section
        className="scroll-mt-8 px-5 py-20 sm:px-8 lg:px-12"
        aria-labelledby="skills-heading"
        style={{ background: "var(--surface)" }}
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeading id="skills-heading" eyebrow="Stack">
            {skills.heading}
          </SectionHeading>
          <ul className="flex flex-wrap gap-x-3 gap-y-2">
            {skills.primary.map((skill) => (
              <li
                key={skill}
                className="text-base sm:text-lg"
                style={{ color: "var(--fg)" }}
              >
                <span style={{ color: "var(--accent)" }}>·</span> {skill}
              </li>
            ))}
          </ul>
          <p
            className="mt-8 max-w-2xl text-sm leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            {skills.foundation}
          </p>
        </div>
      </section>

      <section
        className="scroll-mt-8 px-5 py-20 sm:px-8 lg:px-12"
        aria-labelledby="experience-heading"
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeading id="experience-heading" eyebrow="Track">
            {experience.heading}
          </SectionHeading>
          <ul className="space-y-8">
            {experience.roles.map((role) => (
              <li key={role.company + role.title}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3
                    className="text-xl font-semibold"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--fg)",
                    }}
                  >
                    {role.company}
                  </h3>
                  <span
                    className="text-sm"
                    style={{
                      color: "var(--muted)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {role.dates}
                  </span>
                </div>
                <p className="mt-1" style={{ color: "var(--accent-2)" }}>
                  {role.title}
                </p>
                <p
                  className="mt-2 max-w-2xl text-sm leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  {role.note}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="scroll-mt-8 px-5 py-20 sm:px-8 lg:px-12"
        aria-labelledby="education-heading"
        style={{ background: "var(--surface)" }}
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeading id="education-heading" eyebrow="Background">
            {education.heading}
          </SectionHeading>
          <ul className="space-y-6">
            {education.degrees.map((degree) => (
              <li key={degree.school}>
                <h3
                  className="text-lg font-semibold"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--fg)",
                  }}
                >
                  {degree.school}
                </h3>
                <p
                  className="mt-1 text-base leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  {degree.detail}
                </p>
              </li>
            ))}
          </ul>
          <p
            className="mt-8 max-w-2xl text-sm leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            {education.honors}
          </p>
        </div>
      </section>
    </>
  );
}
