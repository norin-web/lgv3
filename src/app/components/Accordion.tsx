import { useId, useState } from "react";

const Chevron = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true">
    <path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

type Item = { q: string; a: string };

/**
 * Question list; one answer open at a time.
 * "cards" — separate rounded items (Home FAQ, as in the reference);
 * "list"  — rows inside one sheet, like the app's Connect device list (Support).
 */
export default function Accordion({ items, first = false, variant = "cards" }: { items: Item[]; first?: boolean; variant?: "cards" | "list" }) {
  const [open, setOpen] = useState<number | null>(first ? 0 : null);
  const base = useId();
  const itemCls = variant === "list" ? "row" : "acc__item";
  return (
    <div className={variant === "list" ? "sheet" : "acc"}>
      {items.map((it, i) => {
        const on = open === i;
        const id = `${base}-${i}`;
        return (
          <div key={it.q} className={`${itemCls}${on ? " is-open" : ""}`}>
            <h3 className="acc__h">
              <button className="acc__q" aria-expanded={on} aria-controls={id} onClick={() => setOpen(on ? null : i)}>
                <span>{it.q}</span>
                <span className="acc__icon"><Chevron /></span>
              </button>
            </h3>
            <div className="acc__a" id={id} role="region" aria-hidden={!on}>
              <div>
                <p>{it.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
