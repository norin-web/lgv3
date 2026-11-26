import { img } from "../utils/img";

/**
 * App screen inside a thin bezel. With several `screens`, the one at `active`
 * is shown and the others cross-fade out (no movement, no tilt).
 */
export default function Phone({
  screens,
  active = 0,
  alt,
  className = "",
  eager,
}: {
  screens: string[];
  active?: number;
  alt: string;
  className?: string;
  eager?: boolean;
}) {
  return (
    <div className={`phone ${className}`}>
      <div className="phone__screen">
        {screens.map((s, i) => (
          <img
            key={s}
            src={img(s)}
            alt={i === active ? alt : ""}
            aria-hidden={i === active ? undefined : true}
            className={i === active ? "is-on" : undefined}
            width={390}
            height={844}
            loading={eager ? "eager" : "lazy"}
            decoding="async"
          />
        ))}
      </div>
    </div>
  );
}
