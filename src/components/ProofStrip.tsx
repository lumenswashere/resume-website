"use client";

import { proof } from "@/content/portfolio";
import { CountUp } from "./CountUp";

export function ProofStrip() {
  return (
    <section
      id="proof"
      className="scroll-mt-8 border-y px-5 py-12 sm:px-8 lg:px-12"
      style={{ borderColor: "var(--border)", background: "var(--surface)" }}
      aria-labelledby="proof-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="proof-heading"
          className="mb-8 text-xs font-medium uppercase tracking-[0.14em]"
          style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}
        >
          Hard numbers
        </h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6 lg:gap-6">
          {proof.map((item) => (
            <div key={item.label} className="min-w-0">
              <p
                className="text-3xl font-semibold tracking-tight sm:text-4xl"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--fg)",
                }}
              >
                <CountUp
                  value={item.value}
                  prefix={item.prefix}
                  suffix={item.suffix}
                  decimals={"decimals" in item ? item.decimals : 0}
                />
              </p>
              <p
                className="mt-2 text-sm leading-snug"
                style={{ color: "var(--muted)" }}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
