export function SectionHeading({
  id,
  children,
  eyebrow,
}: {
  id?: string;
  children: React.ReactNode;
  eyebrow?: string;
}) {
  return (
    <header className="mb-8 max-w-2xl">
      {eyebrow ? (
        <p
          className="mb-2 text-xs font-medium uppercase tracking-[0.14em]"
          style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className="text-3xl font-semibold tracking-tight sm:text-4xl"
        style={{ fontFamily: "var(--font-display)", color: "var(--fg)" }}
      >
        {children}
      </h2>
    </header>
  );
}
