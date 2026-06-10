import React from "react";

const CSS = `
.fc-badge{ display:inline-flex; align-items:center; gap:8px; font-family:var(--font-sans); box-sizing:border-box; }

/* logo badge — uppercase wordmark + pulsing dot */
.fc-badge--logo{ font-weight:700; font-size:14px; letter-spacing:.5px; text-transform:uppercase; color:var(--fc-green); }
.fc-badge--logo::before{ content:''; width:8px; height:8px; border-radius:50%; background:var(--fc-green); box-shadow:0 0 10px var(--fc-green); }
.fc-badge--logo.is-white{ color:#fff; }
.fc-badge--logo.is-white::before{ background:#fff; box-shadow:0 0 10px #fff; }

/* step indicator pill */
.fc-badge--step{ font-size:12px; color:var(--fc-text-mute); background:rgba(255,255,255,.05); padding:4px 12px; border-radius:20px; }

/* tint badge (mockup-badge) */
.fc-badge--tint{ font-size:10px; padding:2px 6px; border-radius:4px; color:var(--fc-green); background:rgba(0,211,105,.15); border:1px solid rgba(0,211,105,.3); text-transform:uppercase; font-weight:600; }

/* gold alert pill (viral) */
.fc-badge--alert{ font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:.5px; color:var(--fc-gold); background:#000; border:1px solid var(--fc-gold); padding:8px 14px; border-radius:20px; box-shadow:0 0 10px rgba(207,170,86,.2); }
`;

function useStyle() {
  React.useEffect(() => {
    if (document.getElementById("fc-badge-css")) return;
    const s = document.createElement("style");
    s.id = "fc-badge-css";
    s.textContent = CSS;
    document.head.appendChild(s);
  }, []);
}

/**
 * Small labels: the Freecash logo wordmark+dot, step indicators,
 * green tint chips, and the gold viral alert pill.
 */
export function Badge({ children, variant = "logo", white = false, className = "", ...rest }) {
  useStyle();
  const cls = [
    "fc-badge",
    `fc-badge--${variant}`,
    variant === "logo" && white ? "is-white" : "",
    className,
  ].filter(Boolean).join(" ");
  return <span className={cls} {...rest}>{children}</span>;
}
