import React from "react";

const CSS = `
.fc-timer{
  background:linear-gradient(to bottom,#2a2a2a,#111);
  border:1px solid var(--fc-gold); border-radius:var(--r-sm);
  padding:10px; box-shadow:0 0 15px rgba(0,0,0,.5); text-align:center;
  font-family:var(--font-sans);
}
.fc-timer__label{ color:var(--fc-gold); font-weight:700; text-transform:uppercase; font-size:12px; margin-bottom:5px; letter-spacing:1px; }
.fc-timer__digits{ display:flex; justify-content:center; gap:5px; font-family:var(--font-mono); font-size:24px; color:#fff; font-weight:700; }
.fc-timer__unit{ background:#000; padding:4px 8px; border-radius:4px; border:1px solid var(--fc-line); }
.fc-timer__sep{ padding:4px 0; }
`;

function pad(n) { return String(n).padStart(2, "0"); }

/**
 * Gold scarcity countdown (the viral lander timer). Counts down from
 * `seconds` to zero. Purely cosmetic urgency — keep the offer honest.
 */
export function CountdownTimer({ seconds = 300, label = "Offer Reserved For", className = "", ...rest }) {
  const [remaining, setRemaining] = React.useState(seconds);
  React.useEffect(() => {
    if (document.getElementById("fc-timer-css") == null) {
      const s = document.createElement("style");
      s.id = "fc-timer-css"; s.textContent = CSS; document.head.appendChild(s);
    }
  }, []);
  React.useEffect(() => {
    if (remaining <= 0) return;
    const id = setInterval(() => setRemaining((r) => (r > 0 ? r - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, [remaining]);

  const m = pad(Math.floor(remaining / 60));
  const s = pad(remaining % 60);
  return (
    <div className={["fc-timer", className].filter(Boolean).join(" ")} {...rest}>
      <div className="fc-timer__label">{label}</div>
      <div className="fc-timer__digits">
        <span className="fc-timer__unit">{m[0]}</span>
        <span className="fc-timer__unit">{m[1]}</span>
        <span className="fc-timer__sep">:</span>
        <span className="fc-timer__unit">{s[0]}</span>
        <span className="fc-timer__unit">{s[1]}</span>
      </div>
    </div>
  );
}
