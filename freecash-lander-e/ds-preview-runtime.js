/* ===========================================================
   PREVIEW RUNTIME - auto-derived from the component sources.
   NOT a component (plain .js, no .d.ts) so the DS compiler ignores it.
   Guarantees the dsCard cards and UI kit render in plain preview /
   verifier iframes even if the generated _ds_bundle.js is not served.
   Loaded via <script type="text/babel">. Only fills the namespace if
   the real bundle has not already (uses ||), so the real bundle wins.
   =========================================================== */
const React = window.React;

/* ---- Button ---- */
const Button = (function(){

/* Inject component CSS once. Relies on global keyframes (fc-pulse, fc-shine)
   and tokens from styles.css being present in the consuming page. */
const CSS = `
.fc-btn{
  --_bg: var(--fc-green);
  --_fg: var(--fc-white);
  display:inline-flex; align-items:center; justify-content:center; gap:10px;
  width:100%; box-sizing:border-box;
  font-family:var(--font-sans); font-weight:800; font-size:19px;
  text-transform:uppercase; text-align:center; text-decoration:none;
  color:var(--_fg); background:var(--_bg);
  padding:22px; border:none; border-radius:var(--r-lg); cursor:pointer;
  position:relative; overflow:hidden;
  box-shadow:0 0 20px rgba(0,211,105,.4);
  animation:fc-pulse 2s infinite;
}
.fc-btn>*{ position:relative; z-index:2; }
.fc-btn svg{ width:24px; height:24px; fill:currentColor; }
.fc-btn::after{
  content:''; position:absolute; top:0; left:-100%; width:100%; height:100%;
  background:linear-gradient(90deg,transparent,rgba(255,255,255,.4),transparent);
  animation:fc-shine 3s infinite;
}
.fc-btn:active{ transform:translateY(1px); }

/* sizes */
.fc-btn--md{ font-size:16px; padding:16px 20px; }
.fc-btn--sm{ font-size:14px; padding:12px 16px; border-radius:var(--r-md); }

/* gold / viral */
.fc-btn--gold{
  --_fg:#000; background:linear-gradient(to bottom,var(--fc-gold-bright),var(--fc-gold));
  font-family:var(--font-display);
  box-shadow:var(--shadow-gold); animation:fc-pulse-gold 2s infinite;
}
.fc-btn--gold::after{ display:none; }

/* apple blue */
.fc-btn--apple{
  --_bg:var(--fc-apple-blue);
  box-shadow:var(--shadow-apple); animation:none; text-transform:none; font-weight:600;
}
.fc-btn--apple::after{ display:none; }
.fc-btn--apple:hover{ background:var(--fc-apple-blue-d); }

.fc-btn:disabled, .fc-btn[aria-disabled="true"]{
  opacity:.6; cursor:not-allowed; animation:none;
}
`;

function useStyle() {
  React.useEffect(() => {
    if (document.getElementById("fc-btn-css")) return;
    const s = document.createElement("style");
    s.id = "fc-btn-css";
    s.textContent = CSS;
    document.head.appendChild(s);
  }, []);
}

const ARROW = (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
  </svg>
);

/**
 * Freecash primary CTA. Pulsing green by default; `gold` and `apple`
 * variants for the viral and Apple-Pay lander themes. Renders an <a>
 * when `href` is set, otherwise a <button>.
 */
function Button({
  children,
  variant = "primary",
  size = "lg",
  arrow = false,
  href,
  disabled = false,
  className = "",
  ...rest
}) {
  useStyle();
  const cls = [
    "fc-btn",
    variant === "gold" ? "fc-btn--gold" : "",
    variant === "apple" ? "fc-btn--apple" : "",
    size === "md" ? "fc-btn--md" : "",
    size === "sm" ? "fc-btn--sm" : "",
    className,
  ].filter(Boolean).join(" ");

  const content = (
    <>
      <span>{children}</span>
      {arrow && ARROW}
    </>
  );

  if (href && !disabled) {
    return (
      <a className={cls} href={href} {...rest}>{content}</a>
    );
  }
  return (
    <button className={cls} disabled={disabled} aria-disabled={disabled} {...rest}>
      {content}
    </button>
  );
}

return Button;
})();

/* ---- Badge ---- */
const Badge = (function(){

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
function Badge({ children, variant = "logo", white = false, className = "", ...rest }) {
  useStyle();
  const cls = [
    "fc-badge",
    `fc-badge--${variant}`,
    variant === "logo" && white ? "is-white" : "",
    className,
  ].filter(Boolean).join(" ");
  return <span className={cls} {...rest}>{children}</span>;
}

return Badge;
})();

/* ---- OptionCard ---- */
const OptionCard = (function(){

const CSS = `
.fc-option{
  display:flex; align-items:center; justify-content:space-between; gap:14px;
  width:100%; box-sizing:border-box; text-align:left;
  background:linear-gradient(145deg,#1a1a1a,#141414);
  border:1px solid var(--fc-line); border-radius:var(--r-xl);
  padding:20px; cursor:pointer; position:relative; overflow:hidden;
  font-family:var(--font-sans); color:#fff;
  transition:.2s;
}
.fc-option:hover{ border-color:var(--fc-green); transform:scale(1.02); background:#222; }
.fc-option__content{ display:flex; flex-direction:column; gap:4px; }
.fc-option__title{ font-size:18px; font-weight:600; color:#fff; }
.fc-option__desc{ font-size:13px; color:var(--fc-text-mute); }
.fc-option__radio{
  width:24px; height:24px; flex-shrink:0; border-radius:50%;
  border:2px solid var(--fc-line-soft); display:flex; align-items:center; justify-content:center;
  transition:.2s;
}
.fc-option:hover .fc-option__radio{ border-color:var(--fc-green); background:rgba(0,211,105,.1); }
.fc-option.is-selected{ border-color:var(--fc-green); }
.fc-option.is-selected .fc-option__radio{ border-color:var(--fc-green); background:var(--fc-green); }
.fc-option.is-selected .fc-option__radio::after{ content:''; width:8px; height:8px; border-radius:50%; background:#000; }
`;

function useStyle() {
  React.useEffect(() => {
    if (document.getElementById("fc-option-css")) return;
    const s = document.createElement("style");
    s.id = "fc-option-css";
    s.textContent = CSS;
    document.head.appendChild(s);
  }, []);
}

/**
 * Tappable selection card (the lander's `.option-card`): a title +
 * description on the left and a radio dot on the right. Scales up on
 * hover and lights the border/radio green when selected.
 */
function OptionCard({ title, desc, selected = false, onSelect, className = "", ...rest }) {
  useStyle();
  return (
    <button
      type="button"
      className={["fc-option", selected ? "is-selected" : "", className].filter(Boolean).join(" ")}
      onClick={onSelect}
      {...rest}
    >
      <span className="fc-option__content">
        <span className="fc-option__title">{title}</span>
        {desc && <span className="fc-option__desc">{desc}</span>}
      </span>
      <span className="fc-option__radio" aria-hidden="true"></span>
    </button>
  );
}

return OptionCard;
})();

/* ---- Select ---- */
const Select = (function(){

const CSS = `
.fc-age-wrap{ position:relative; width:100%; }
.fc-age{
  width:100%; box-sizing:border-box;
  background:linear-gradient(145deg,#1a1a1a,#141414);
  border:2px solid var(--fc-green); border-radius:var(--r-xl);
  padding:20px 50px 20px 20px;
  font-size:18px; font-weight:600; color:#fff;
  font-family:var(--font-sans); cursor:pointer;
  appearance:none; -webkit-appearance:none; -moz-appearance:none;
  transition:all .3s;
  box-shadow:0 0 20px rgba(0,211,105,.2), 0 0 40px rgba(0,211,105,.1);
  animation:fc-select-pulse 3s ease-in-out infinite;
}
.fc-age:hover{ border-color:var(--fc-green-neon); background:#222; transform:translateY(-2px);
  box-shadow:0 0 30px rgba(0,211,105,.4), 0 0 60px rgba(0,211,105,.2); }
.fc-age:focus{ outline:none; border-color:var(--fc-green-neon); animation:none;
  box-shadow:0 0 30px rgba(0,211,105,.5), 0 0 60px rgba(0,211,105,.3); }
.fc-age option{ background:#1a1a1a; color:#fff; }
.fc-age option:first-child{ color:#888; font-style:italic; }
.fc-age-arrow{
  position:absolute; right:20px; top:50%; transform:translateY(-50%);
  pointer-events:none; color:var(--fc-text-mute); transition:.2s;
}
.fc-age:focus ~ .fc-age-arrow{ color:var(--fc-green); transform:translateY(-50%) rotate(180deg); }
.fc-age-wrap:hover .fc-age-arrow{ color:var(--fc-green); }
`;

function useStyle() {
  React.useEffect(() => {
    if (document.getElementById("fc-age-css")) return;
    const s = document.createElement("style");
    s.id = "fc-age-css";
    s.textContent = CSS;
    document.head.appendChild(s);
  }, []);
}

/**
 * The glowing, breathing gate-select used as the lander's primary
 * interaction. A native <select> styled with a green pulse and a
 * custom chevron. Pass options as {value,label} objects.
 */
function Select({ value, onChange, placeholder = "Choose…", options = [], className = "", ...rest }) {
  useStyle();
  return (
    <div className="fc-age-wrap">
      <select
        className={["fc-age", className].filter(Boolean).join(" ")}
        value={value}
        onChange={onChange}
        {...rest}
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
      <span className="fc-age-arrow" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M7 10l5 5 5-5z"/></svg>
      </span>
    </div>
  );
}

return Select;
})();

/* ---- StatPill ---- */
const StatPill = (function(){

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
function StatPill({ icon = "users", value, label, className = "", ...rest }) {
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

return StatPill;
})();

/* ---- ReviewStars ---- */
const ReviewStars = (function(){

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
function ReviewStars({ rating = 5, text, className = "", ...rest }) {
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

return ReviewStars;
})();

/* ---- Timeline ---- */
const Timeline = (function(){

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
function Timeline({ label = "Your Earning Journey", steps = [], className = "", ...rest }) {
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

return Timeline;
})();

/* ---- BonusNotification ---- */
const BonusNotification = (function(){

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
function BonusNotification({ icon = "🎁", title, sub, className = "", ...rest }) {
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

return BonusNotification;
})();

/* ---- CountdownTimer ---- */
const CountdownTimer = (function(){

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
function CountdownTimer({ seconds = 300, label = "Offer Reserved For", className = "", ...rest }) {
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

return CountdownTimer;
})();

window.FreecashLanderDesignSystem_05d09e = window.FreecashLanderDesignSystem_05d09e || { Button, Badge, OptionCard, Select, StatPill, ReviewStars, Timeline, BonusNotification, CountdownTimer };
