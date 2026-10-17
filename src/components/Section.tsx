export function Section({
  id,
  label,
  title,
  tone = "plain",
  children,
}: {
  id: string;
  label: string;
  title: string;
  tone?: "plain" | "tint";
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`scroll-mt-16 border-t border-line ${tone === "tint" ? "bg-surface" : ""}`}
    >
      <div className="mx-auto grid max-w-5xl gap-4 px-5 py-16 sm:px-8 md:grid-cols-[10rem_1fr] md:gap-12 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent md:pt-3">
          {label}
        </p>
        <div className="min-w-0">
          <h2
            id={`${id}-title`}
            className="font-display text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            {title}
          </h2>
          <div className="mt-8">{children}</div>
        </div>
      </div>
    </section>
  );
}
