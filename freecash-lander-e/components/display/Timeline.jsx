import React from "react";

const CSS = `
.fc-timeline{ font-family:var(--font-sans); }
.fc-timeline__label{ font-size:11px; color:var(--fc-text-faint); text-transform:uppercase; letter-spacing:1px; margin-bottom:15px; }
.fc-tl-item{ display:flex; align-items:flex-start; gap:15px; margin-bottom:20px; position:relative; }
.fc-tl-item:not(:last-child)::after{ content:''; position:absolute; top:25px; left:9px; width:1px; height:100%; background:var(--fc-line); z-index:-1; }
.fc-tl-marker{
  width:20px; height:20px; flex-shrink:0; border-radius:50%;
  background:#000; border:2px solid var(--fc-green); color:var(--fc-green);
  display:flex; align-items:center; justify-content:center; font-size:10px;
  box-shadow:0 0 10px rgba(0,211,105,.2);
}
.fc-tl-marker.is-locked{ border-color:var(--fc-line-soft); color:var(--fc-line-soft); box-shadow:none; }
.fc-tl-text strong{ display:block; font-size:14px; margin-bottom:2px; color:#fff; }
.fc-tl-text span{ font-size:13px; color:var(--fc-text-mute); }
`;

/**
 * Vertical "earning journey" roadmap. Steps are either done (green
 * marker with a check) or locked (muted, numbered).
 */
export function Timeline({ label = "Your Earning Journey", steps = [], className = "", ...rest }) {
  React.useEffect(() => {
    if (document.getElementById("fc-timeline-css")) return;
    const s = document.createElement("style");
    s.id = "fc-timeline-css"; s.textContent = CSS; document.head.appendChild(s);
  }, []);
  return (
    <div className={["fc-timeline", className].filter(Boolean).join(" ")} {...rest}>
      {label && <div className="fc-timeline__label">{label}</div>}
      {steps.map((step, i) => (
        <div className="fc-tl-item" key={i}>
          <div className={"fc-tl-marker" + (step.done ? "" : " is-locked")}>
            {step.done ? "✓" : (step.index ?? i + 1)}
          </div>
          <div className="fc-tl-text">
            <strong>{step.title}</strong>
            <span>{step.detail}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
