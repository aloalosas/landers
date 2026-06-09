import React from "react";

const CSS = `
.fc-stars{ display:flex; align-items:center; gap:5px; font-family:var(--font-sans); font-size:14px; font-weight:600; color:#fff; }
.fc-stars svg{ width:16px; height:16px; fill:#fff; }
.fc-stars__text{ color:var(--fc-text-mute); font-weight:400; margin-left:5px; font-size:13px; }
`;

const STAR = "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z";

function Star({ fill = 1 }) {
  // fill: 1 full, 0 empty, fraction = partial clip
  const clip = fill >= 1 ? "none" : `inset(0 ${(1 - fill) * 100}% 0 0)`;
  return (
    <svg viewBox="0 0 24 24" style={{ fill: fill > 0 ? "#fff" : "rgba(255,255,255,.25)", clipPath: fill < 1 && fill > 0 ? clip : undefined }} aria-hidden="true">
      <path d={STAR} />
    </svg>
  );
}

/**
 * Star rating row with optional trailing review text. Supports
 * fractional ratings (e.g. 4.6 renders a 60%-clipped 5th star).
 */
export function ReviewStars({ rating = 5, text, className = "", ...rest }) {
  React.useEffect(() => {
    if (document.getElementById("fc-stars-css")) return;
    const s = document.createElement("style");
    s.id = "fc-stars-css"; s.textContent = CSS; document.head.appendChild(s);
  }, []);
  return (
    <div className={["fc-stars", className].filter(Boolean).join(" ")} {...rest}>
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} fill={Math.max(0, Math.min(1, rating - i))} />
      ))}
      {text && <span className="fc-stars__text">{text}</span>}
    </div>
  );
}
