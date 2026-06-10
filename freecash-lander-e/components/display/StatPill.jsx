import React from "react";

const CSS = `
.fc-stat{
  display:flex; align-items:center; gap:10px; flex:1 1 auto;
  background:rgba(255,255,255,.03); border:1px solid rgba(255,255,255,.08);
  border-radius:var(--r-lg); padding:10px 16px;
  backdrop-filter:blur(5px); font-family:var(--font-sans);
}
.fc-stat svg{ width:20px; height:20px; fill:var(--fc-green); flex-shrink:0; }
.fc-stat__data{ display:flex; flex-direction:column; }
.fc-stat__val{ font-weight:700; font-size:15px; color:#fff; }
.fc-stat__lbl{ font-size:10px; text-transform:uppercase; color:var(--fc-text-mute); }
`;

const ICONS = {
  users: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",
  cash: "M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.75-2.7 1.75-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c2.17-.46 3.5-1.66 3.5-3.66 0-2.52-2.38-3.47-5.2-4.14z",
  bolt: "M7 2v11h3v9l7-12h-4l4-8z",
  check: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",
};

/**
 * Glassy stat pill: a brand-green icon beside a value and uppercase
 * label. Row of these forms the lander's social-proof strip.
 */
export function StatPill({ icon = "users", value, label, className = "", ...rest }) {
  React.useEffect(() => {
    if (document.getElementById("fc-stat-css")) return;
    const s = document.createElement("style");
    s.id = "fc-stat-css"; s.textContent = CSS; document.head.appendChild(s);
  }, []);
  return (
    <div className={["fc-stat", className].filter(Boolean).join(" ")} {...rest}>
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d={ICONS[icon] || ICONS.users} /></svg>
      <div className="fc-stat__data">
        <span className="fc-stat__val">{value}</span>
        <span className="fc-stat__lbl">{label}</span>
      </div>
    </div>
  );
}
