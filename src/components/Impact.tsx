import { impact } from "@/content/portfolio";

export function Impact() {
  return (
    <section
      aria-label="Impact at a glance"
      className="border-y border-line bg-surface"
    >
      <ul className="mx-auto grid max-w-5xl grid-cols-2 gap-x-6 gap-y-8 px-5 py-10 sm:px-8 md:grid-cols-3 md:py-12 lg:grid-cols-6">
        {impact.map((item) => (
          <li key={item.label} className="min-w-0">
            <p className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              {item.figure}
            </p>
            <p className="mt-2 text-sm leading-snug text-muted">{item.label}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
