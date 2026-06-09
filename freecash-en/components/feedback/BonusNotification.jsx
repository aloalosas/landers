import React from "react";

const CSS = `
.fc-bonus{
  display:flex; align-items:center; gap:12px;
  background:linear-gradient(90deg,#1f1f1f 0%,#141414 100%);
  border-left:4px solid var(--fc-green); border-radius:var(--r-md);
  padding:12px 15px; box-shadow:0 4px 12px rgba(0,0,0,.3);
  font-family:var(--font-sans);
}
.fc-bonus__icon{ font-size:20px; line-height:1; }
.fc-bonus__text{ display:flex; flex-direction:column; }
.fc-bonus__title{ font-weight:700; color:#fff; font-size:15px; }
.fc-bonus__sub{ color:var(--fc-green); font-size:12px; font-weight:600; text-transform:uppercase; }
`;

/**
 * The lander's hook callout — a dark gradient strip with a green
 * left bar, an emoji/icon, a bold title and an uppercase green sub.
 */
export function BonusNotification({ icon = "🎁", title, sub, className = "", ...rest }) {
  React.useEffect(() => {
    if (document.getElementById("fc-bonus-css")) return;
    const s = document.createElement("style");
    s.id = "fc-bonus-css"; s.textContent = CSS; document.head.appendChild(s);
  }, []);
  return (
    <div className={["fc-bonus", className].filter(Boolean).join(" ")} {...rest}>
      <div className="fc-bonus__icon" aria-hidden="true">{icon}</div>
      <div className="fc-bonus__text">
        <div className="fc-bonus__title">{title}</div>
        {sub && <div className="fc-bonus__sub">{sub}</div>}
      </div>
    </div>
  );
}
