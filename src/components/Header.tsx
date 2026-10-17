import { nav, profile } from "@/content/portfolio";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-col gap-1 px-5 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <a href="#top" className="font-display text-lg font-semibold">
          {profile.name}
        </a>
        <nav aria-label="Primary" className="-mx-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <ul className="flex gap-1 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block whitespace-nowrap rounded px-2 py-1.5 text-muted transition-colors hover:text-fg"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
