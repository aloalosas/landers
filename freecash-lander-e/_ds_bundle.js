/* @ds-bundle: {"format":3,"namespace":"FreecashLanderDesignSystem_05d09e","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"ReviewStars","sourcePath":"components/display/ReviewStars.jsx"},{"name":"StatPill","sourcePath":"components/display/StatPill.jsx"},{"name":"Timeline","sourcePath":"components/display/Timeline.jsx"},{"name":"BonusNotification","sourcePath":"components/feedback/BonusNotification.jsx"},{"name":"CountdownTimer","sourcePath":"components/feedback/CountdownTimer.jsx"},{"name":"OptionCard","sourcePath":"components/forms/OptionCard.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"504e70bd9f14","components/core/Button.jsx":"fc5d44a56cba","components/display/ReviewStars.jsx":"85810f0625bc","components/display/StatPill.jsx":"5ef64664b2fe","components/display/Timeline.jsx":"c6367d921003","components/feedback/BonusNotification.jsx":"14c5124ef14b","components/feedback/CountdownTimer.jsx":"96059efc9bf8","components/forms/OptionCard.jsx":"b47001c10156","components/forms/Select.jsx":"9f2ad8ecef5f","ds-preview-runtime.js":"fe5e3a6cc38d","ui_kits/freecash-lander-en/LanderEn.jsx":"77093354cf69","ui_kits/freecash-lander/LanderApp.jsx":"6cd6d95ba89c","ui_kits/freecash-lander/Step1.jsx":"693ee4a63b8f","ui_kits/freecash-lander/Step2.jsx":"871ba122a62b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FreecashLanderDesignSystem_05d09e = window.FreecashLanderDesignSystem_05d09e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Badge({
  children,
  variant = "logo",
  white = false,
  className = "",
  ...rest
}) {
  useStyle();
  const cls = ["fc-badge", `fc-badge--${variant}`, variant === "logo" && white ? "is-white" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
const ARROW = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
}));

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
  const cls = ["fc-btn", variant === "gold" ? "fc-btn--gold" : "", variant === "apple" ? "fc-btn--apple" : "", size === "md" ? "fc-btn--md" : "", size === "sm" ? "fc-btn--sm" : "", className].filter(Boolean).join(" ");
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, children), arrow && ARROW);
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      className: cls,
      href: href
    }, rest), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    disabled: disabled,
    "aria-disabled": disabled
  }, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/display/ReviewStars.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.fc-stars{ display:flex; align-items:center; gap:5px; font-family:var(--font-sans); font-size:14px; font-weight:600; color:#fff; }
.fc-stars svg{ width:16px; height:16px; fill:#fff; }
.fc-stars__text{ color:var(--fc-text-mute); font-weight:400; margin-left:5px; font-size:13px; }
`;
const STAR = "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z";
function Star({
  fill = 1
}) {
  // fill: 1 full, 0 empty, fraction = partial clip
  const clip = fill >= 1 ? "none" : `inset(0 ${(1 - fill) * 100}% 0 0)`;
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    style: {
      fill: fill > 0 ? "#fff" : "rgba(255,255,255,.25)",
      clipPath: fill < 1 && fill > 0 ? clip : undefined
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: STAR
  }));
}

/**
 * Star rating row with optional trailing review text. Supports
 * fractional ratings (e.g. 4.6 renders a 60%-clipped 5th star).
 */
function ReviewStars({
  rating = 5,
  text,
  className = "",
  ...rest
}) {
  React.useEffect(() => {
    if (document.getElementById("fc-stars-css")) return;
    const s = document.createElement("style");
    s.id = "fc-stars-css";
    s.textContent = CSS;
    document.head.appendChild(s);
  }, []);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["fc-stars", className].filter(Boolean).join(" ")
  }, rest), [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement(Star, {
    key: i,
    fill: Math.max(0, Math.min(1, rating - i))
  })), text && /*#__PURE__*/React.createElement("span", {
    className: "fc-stars__text"
  }, text));
}
Object.assign(__ds_scope, { ReviewStars });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/ReviewStars.jsx", error: String((e && e.message) || e) }); }

// components/display/StatPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  check: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
};

/**
 * Glassy stat pill: a brand-green icon beside a value and uppercase
 * label. Row of these forms the lander's social-proof strip.
 */
function StatPill({
  icon = "users",
  value,
  label,
  className = "",
  ...rest
}) {
  React.useEffect(() => {
    if (document.getElementById("fc-stat-css")) return;
    const s = document.createElement("style");
    s.id = "fc-stat-css";
    s.textContent = CSS;
    document.head.appendChild(s);
  }, []);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["fc-stat", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: ICONS[icon] || ICONS.users
  })), /*#__PURE__*/React.createElement("div", {
    className: "fc-stat__data"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fc-stat__val"
  }, value), /*#__PURE__*/React.createElement("span", {
    className: "fc-stat__lbl"
  }, label)));
}
Object.assign(__ds_scope, { StatPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/StatPill.jsx", error: String((e && e.message) || e) }); }

// components/display/Timeline.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Timeline({
  label = "Your Earning Journey",
  steps = [],
  className = "",
  ...rest
}) {
  React.useEffect(() => {
    if (document.getElementById("fc-timeline-css")) return;
    const s = document.createElement("style");
    s.id = "fc-timeline-css";
    s.textContent = CSS;
    document.head.appendChild(s);
  }, []);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["fc-timeline", className].filter(Boolean).join(" ")
  }, rest), label && /*#__PURE__*/React.createElement("div", {
    className: "fc-timeline__label"
  }, label), steps.map((step, i) => /*#__PURE__*/React.createElement("div", {
    className: "fc-tl-item",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "fc-tl-marker" + (step.done ? "" : " is-locked")
  }, step.done ? "✓" : step.index ?? i + 1), /*#__PURE__*/React.createElement("div", {
    className: "fc-tl-text"
  }, /*#__PURE__*/React.createElement("strong", null, step.title), /*#__PURE__*/React.createElement("span", null, step.detail)))));
}
Object.assign(__ds_scope, { Timeline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Timeline.jsx", error: String((e && e.message) || e) }); }

// components/feedback/BonusNotification.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function BonusNotification({
  icon = "🎁",
  title,
  sub,
  className = "",
  ...rest
}) {
  React.useEffect(() => {
    if (document.getElementById("fc-bonus-css")) return;
    const s = document.createElement("style");
    s.id = "fc-bonus-css";
    s.textContent = CSS;
    document.head.appendChild(s);
  }, []);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["fc-bonus", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "fc-bonus__icon",
    "aria-hidden": "true"
  }, icon), /*#__PURE__*/React.createElement("div", {
    className: "fc-bonus__text"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fc-bonus__title"
  }, title), sub && /*#__PURE__*/React.createElement("div", {
    className: "fc-bonus__sub"
  }, sub)));
}
Object.assign(__ds_scope, { BonusNotification });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/BonusNotification.jsx", error: String((e && e.message) || e) }); }

// components/feedback/CountdownTimer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function pad(n) {
  return String(n).padStart(2, "0");
}

/**
 * Gold scarcity countdown (the viral lander timer). Counts down from
 * `seconds` to zero. Purely cosmetic urgency — keep the offer honest.
 */
function CountdownTimer({
  seconds = 300,
  label = "Offer Reserved For",
  className = "",
  ...rest
}) {
  const [remaining, setRemaining] = React.useState(seconds);
  React.useEffect(() => {
    if (document.getElementById("fc-timer-css") == null) {
      const s = document.createElement("style");
      s.id = "fc-timer-css";
      s.textContent = CSS;
      document.head.appendChild(s);
    }
  }, []);
  React.useEffect(() => {
    if (remaining <= 0) return;
    const id = setInterval(() => setRemaining(r => r > 0 ? r - 1 : 0), 1000);
    return () => clearInterval(id);
  }, [remaining]);
  const m = pad(Math.floor(remaining / 60));
  const s = pad(remaining % 60);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["fc-timer", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "fc-timer__label"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "fc-timer__digits"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fc-timer__unit"
  }, m[0]), /*#__PURE__*/React.createElement("span", {
    className: "fc-timer__unit"
  }, m[1]), /*#__PURE__*/React.createElement("span", {
    className: "fc-timer__sep"
  }, ":"), /*#__PURE__*/React.createElement("span", {
    className: "fc-timer__unit"
  }, s[0]), /*#__PURE__*/React.createElement("span", {
    className: "fc-timer__unit"
  }, s[1])));
}
Object.assign(__ds_scope, { CountdownTimer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/CountdownTimer.jsx", error: String((e && e.message) || e) }); }

// components/forms/OptionCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function OptionCard({
  title,
  desc,
  selected = false,
  onSelect,
  className = "",
  ...rest
}) {
  useStyle();
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: ["fc-option", selected ? "is-selected" : "", className].filter(Boolean).join(" "),
    onClick: onSelect
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "fc-option__content"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fc-option__title"
  }, title), desc && /*#__PURE__*/React.createElement("span", {
    className: "fc-option__desc"
  }, desc)), /*#__PURE__*/React.createElement("span", {
    className: "fc-option__radio",
    "aria-hidden": "true"
  }));
}
Object.assign(__ds_scope, { OptionCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/OptionCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Select({
  value,
  onChange,
  placeholder = "Choose…",
  options = [],
  className = "",
  ...rest
}) {
  useStyle();
  return /*#__PURE__*/React.createElement("div", {
    className: "fc-age-wrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    className: ["fc-age", className].filter(Boolean).join(" "),
    value: value,
    onChange: onChange
  }, rest), /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    className: "fc-age-arrow",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "20",
    height: "20",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 10l5 5 5-5z"
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// ds-preview-runtime.js
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
const Button = function () {
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
  const ARROW = /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
  }));

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
    const cls = ["fc-btn", variant === "gold" ? "fc-btn--gold" : "", variant === "apple" ? "fc-btn--apple" : "", size === "md" ? "fc-btn--md" : "", size === "sm" ? "fc-btn--sm" : "", className].filter(Boolean).join(" ");
    const content = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, children), arrow && ARROW);
    if (href && !disabled) {
      return /*#__PURE__*/React.createElement("a", _extends({
        className: cls,
        href: href
      }, rest), content);
    }
    return /*#__PURE__*/React.createElement("button", _extends({
      className: cls,
      disabled: disabled,
      "aria-disabled": disabled
    }, rest), content);
  }
  return Button;
}();

/* ---- Badge ---- */
const Badge = function () {
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
  function Badge({
    children,
    variant = "logo",
    white = false,
    className = "",
    ...rest
  }) {
    useStyle();
    const cls = ["fc-badge", `fc-badge--${variant}`, variant === "logo" && white ? "is-white" : "", className].filter(Boolean).join(" ");
    return /*#__PURE__*/React.createElement("span", _extends({
      className: cls
    }, rest), children);
  }
  return Badge;
}();

/* ---- OptionCard ---- */
const OptionCard = function () {
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
  function OptionCard({
    title,
    desc,
    selected = false,
    onSelect,
    className = "",
    ...rest
  }) {
    useStyle();
    return /*#__PURE__*/React.createElement("button", _extends({
      type: "button",
      className: ["fc-option", selected ? "is-selected" : "", className].filter(Boolean).join(" "),
      onClick: onSelect
    }, rest), /*#__PURE__*/React.createElement("span", {
      className: "fc-option__content"
    }, /*#__PURE__*/React.createElement("span", {
      className: "fc-option__title"
    }, title), desc && /*#__PURE__*/React.createElement("span", {
      className: "fc-option__desc"
    }, desc)), /*#__PURE__*/React.createElement("span", {
      className: "fc-option__radio",
      "aria-hidden": "true"
    }));
  }
  return OptionCard;
}();

/* ---- Select ---- */
const Select = function () {
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
  function Select({
    value,
    onChange,
    placeholder = "Choose…",
    options = [],
    className = "",
    ...rest
  }) {
    useStyle();
    return /*#__PURE__*/React.createElement("div", {
      className: "fc-age-wrap"
    }, /*#__PURE__*/React.createElement("select", _extends({
      className: ["fc-age", className].filter(Boolean).join(" "),
      value: value,
      onChange: onChange
    }, rest), /*#__PURE__*/React.createElement("option", {
      value: ""
    }, placeholder), options.map(o => /*#__PURE__*/React.createElement("option", {
      key: o.value,
      value: o.value
    }, o.label))), /*#__PURE__*/React.createElement("span", {
      className: "fc-age-arrow",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      width: "20",
      height: "20",
      fill: "currentColor"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 10l5 5 5-5z"
    }))));
  }
  return Select;
}();

/* ---- StatPill ---- */
const StatPill = function () {
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
    check: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
  };

  /**
   * Glassy stat pill: a brand-green icon beside a value and uppercase
   * label. Row of these forms the lander's social-proof strip.
   */
  function StatPill({
    icon = "users",
    value,
    label,
    className = "",
    ...rest
  }) {
    React.useEffect(() => {
      if (document.getElementById("fc-stat-css")) return;
      const s = document.createElement("style");
      s.id = "fc-stat-css";
      s.textContent = CSS;
      document.head.appendChild(s);
    }, []);
    return /*#__PURE__*/React.createElement("div", _extends({
      className: ["fc-stat", className].filter(Boolean).join(" ")
    }, rest), /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: ICONS[icon] || ICONS.users
    })), /*#__PURE__*/React.createElement("div", {
      className: "fc-stat__data"
    }, /*#__PURE__*/React.createElement("span", {
      className: "fc-stat__val"
    }, value), /*#__PURE__*/React.createElement("span", {
      className: "fc-stat__lbl"
    }, label)));
  }
  return StatPill;
}();

/* ---- ReviewStars ---- */
const ReviewStars = function () {
  const CSS = `
.fc-stars{ display:flex; align-items:center; gap:5px; font-family:var(--font-sans); font-size:14px; font-weight:600; color:#fff; }
.fc-stars svg{ width:16px; height:16px; fill:#fff; }
.fc-stars__text{ color:var(--fc-text-mute); font-weight:400; margin-left:5px; font-size:13px; }
`;
  const STAR = "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z";
  function Star({
    fill = 1
  }) {
    // fill: 1 full, 0 empty, fraction = partial clip
    const clip = fill >= 1 ? "none" : `inset(0 ${(1 - fill) * 100}% 0 0)`;
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      style: {
        fill: fill > 0 ? "#fff" : "rgba(255,255,255,.25)",
        clipPath: fill < 1 && fill > 0 ? clip : undefined
      },
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: STAR
    }));
  }

  /**
   * Star rating row with optional trailing review text. Supports
   * fractional ratings (e.g. 4.6 renders a 60%-clipped 5th star).
   */
  function ReviewStars({
    rating = 5,
    text,
    className = "",
    ...rest
  }) {
    React.useEffect(() => {
      if (document.getElementById("fc-stars-css")) return;
      const s = document.createElement("style");
      s.id = "fc-stars-css";
      s.textContent = CSS;
      document.head.appendChild(s);
    }, []);
    return /*#__PURE__*/React.createElement("div", _extends({
      className: ["fc-stars", className].filter(Boolean).join(" ")
    }, rest), [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement(Star, {
      key: i,
      fill: Math.max(0, Math.min(1, rating - i))
    })), text && /*#__PURE__*/React.createElement("span", {
      className: "fc-stars__text"
    }, text));
  }
  return ReviewStars;
}();

/* ---- Timeline ---- */
const Timeline = function () {
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
  function Timeline({
    label = "Your Earning Journey",
    steps = [],
    className = "",
    ...rest
  }) {
    React.useEffect(() => {
      if (document.getElementById("fc-timeline-css")) return;
      const s = document.createElement("style");
      s.id = "fc-timeline-css";
      s.textContent = CSS;
      document.head.appendChild(s);
    }, []);
    return /*#__PURE__*/React.createElement("div", _extends({
      className: ["fc-timeline", className].filter(Boolean).join(" ")
    }, rest), label && /*#__PURE__*/React.createElement("div", {
      className: "fc-timeline__label"
    }, label), steps.map((step, i) => /*#__PURE__*/React.createElement("div", {
      className: "fc-tl-item",
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      className: "fc-tl-marker" + (step.done ? "" : " is-locked")
    }, step.done ? "✓" : step.index ?? i + 1), /*#__PURE__*/React.createElement("div", {
      className: "fc-tl-text"
    }, /*#__PURE__*/React.createElement("strong", null, step.title), /*#__PURE__*/React.createElement("span", null, step.detail)))));
  }
  return Timeline;
}();

/* ---- BonusNotification ---- */
const BonusNotification = function () {
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
  function BonusNotification({
    icon = "🎁",
    title,
    sub,
    className = "",
    ...rest
  }) {
    React.useEffect(() => {
      if (document.getElementById("fc-bonus-css")) return;
      const s = document.createElement("style");
      s.id = "fc-bonus-css";
      s.textContent = CSS;
      document.head.appendChild(s);
    }, []);
    return /*#__PURE__*/React.createElement("div", _extends({
      className: ["fc-bonus", className].filter(Boolean).join(" ")
    }, rest), /*#__PURE__*/React.createElement("div", {
      className: "fc-bonus__icon",
      "aria-hidden": "true"
    }, icon), /*#__PURE__*/React.createElement("div", {
      className: "fc-bonus__text"
    }, /*#__PURE__*/React.createElement("div", {
      className: "fc-bonus__title"
    }, title), sub && /*#__PURE__*/React.createElement("div", {
      className: "fc-bonus__sub"
    }, sub)));
  }
  return BonusNotification;
}();

/* ---- CountdownTimer ---- */
const CountdownTimer = function () {
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
  function pad(n) {
    return String(n).padStart(2, "0");
  }

  /**
   * Gold scarcity countdown (the viral lander timer). Counts down from
   * `seconds` to zero. Purely cosmetic urgency — keep the offer honest.
   */
  function CountdownTimer({
    seconds = 300,
    label = "Offer Reserved For",
    className = "",
    ...rest
  }) {
    const [remaining, setRemaining] = React.useState(seconds);
    React.useEffect(() => {
      if (document.getElementById("fc-timer-css") == null) {
        const s = document.createElement("style");
        s.id = "fc-timer-css";
        s.textContent = CSS;
        document.head.appendChild(s);
      }
    }, []);
    React.useEffect(() => {
      if (remaining <= 0) return;
      const id = setInterval(() => setRemaining(r => r > 0 ? r - 1 : 0), 1000);
      return () => clearInterval(id);
    }, [remaining]);
    const m = pad(Math.floor(remaining / 60));
    const s = pad(remaining % 60);
    return /*#__PURE__*/React.createElement("div", _extends({
      className: ["fc-timer", className].filter(Boolean).join(" ")
    }, rest), /*#__PURE__*/React.createElement("div", {
      className: "fc-timer__label"
    }, label), /*#__PURE__*/React.createElement("div", {
      className: "fc-timer__digits"
    }, /*#__PURE__*/React.createElement("span", {
      className: "fc-timer__unit"
    }, m[0]), /*#__PURE__*/React.createElement("span", {
      className: "fc-timer__unit"
    }, m[1]), /*#__PURE__*/React.createElement("span", {
      className: "fc-timer__sep"
    }, ":"), /*#__PURE__*/React.createElement("span", {
      className: "fc-timer__unit"
    }, s[0]), /*#__PURE__*/React.createElement("span", {
      className: "fc-timer__unit"
    }, s[1])));
  }
  return CountdownTimer;
}();
window.FreecashLanderDesignSystem_05d09e = window.FreecashLanderDesignSystem_05d09e || {
  Button,
  Badge,
  OptionCard,
  Select,
  StatPill,
  ReviewStars,
  Timeline,
  BonusNotification,
  CountdownTimer
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ds-preview-runtime.js", error: String((e && e.message) || e) }); }

// ui_kits/freecash-lander-en/LanderEn.jsx
try { (() => {
/* Freecash — English independent REFERRAL lander.
   A standalone page (separate from the German freecash-lander). Composes
   the design-system components and uses ONLY real, user-supplied proof.

   ⚠ PLACEHOLDER referral link — swap for your real tracked referral URL
   and keep all SubID / ttclid tracking params intact. */
const REFERRAL_LINK = "https://your-referral-link.example/?s1=SUBID&s2=SUBID";
const {
  Button,
  StatPill
} = window.FreecashLanderDesignSystem_05d09e;
const STAR_PATH = "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z";
function TrustpilotBadge() {
  return /*#__PURE__*/React.createElement("div", {
    className: "tp"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tp__stars"
  }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement("span", {
    className: "tp__star",
    key: i
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    d: STAR_PATH
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "tp__txt"
  }, /*#__PURE__*/React.createElement("b", null, "Trustpilot 4.7"), " ", /*#__PURE__*/React.createElement("span", null, "\xB7 276,000+ reviews")));
}
function Hero() {
  return /*#__PURE__*/React.createElement("div", {
    className: "en-hero"
  }, /*#__PURE__*/React.createElement(TrustpilotBadge, null), /*#__PURE__*/React.createElement("h1", {
    className: "en-h1"
  }, "Earn real cash in your ", /*#__PURE__*/React.createElement("span", {
    className: "en-hl"
  }, "spare time")), /*#__PURE__*/React.createElement("p", {
    className: "en-sub"
  }, /*#__PURE__*/React.createElement("b", null, "Saw it on TikTok? It's real."), " Freecash pays you to complete surveys, try new apps, and play games \u2014 then cash out the same day, right from your phone."), /*#__PURE__*/React.createElement(Button, {
    href: REFERRAL_LINK,
    arrow: true
  }, "Start earning on Freecash"), /*#__PURE__*/React.createElement("p", {
    className: "en-cta-note"
  }, "A simple way to earn extra cash in your spare time. Earnings vary and are not guaranteed."));
}
function Proof() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "en-eyebrow"
  }, "Trusted by millions"), /*#__PURE__*/React.createElement("div", {
    className: "fc-stats",
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px"
    }
  }, /*#__PURE__*/React.createElement(StatPill, {
    icon: "cash",
    value: "$300M+",
    label: "Paid Out"
  }), /*#__PURE__*/React.createElement(StatPill, {
    icon: "users",
    value: "70M+",
    label: "Members"
  }), /*#__PURE__*/React.createElement(StatPill, {
    icon: "bolt",
    value: "#3",
    label: "2025 FT1000"
  })));
}
function HowItWorks() {
  const steps = [{
    t: "Create your free account",
    d: "Sign up in under a minute — no purchase, no catch."
  }, {
    t: "Complete offers, surveys & games",
    d: "Pick whatever you like and earn as you go, whenever you've got a few minutes."
  }, {
    t: "Cash out your earnings",
    d: "Withdraw via PayPal, crypto, or a gift card once you hit the minimum."
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "en-eyebrow"
  }, "How it works"), /*#__PURE__*/React.createElement("div", {
    className: "hiw"
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    className: "hiw__row",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "hiw__num"
  }, i + 1), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "hiw__t"
  }, s.t), /*#__PURE__*/React.createElement("p", {
    className: "hiw__d"
  }, s.d))))));
}
function Payouts() {
  const methods = ["PayPal", "Crypto", "Gift cards"];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "en-eyebrow"
  }, "Get paid your way"), /*#__PURE__*/React.createElement("div", {
    className: "pay"
  }, methods.map(m => /*#__PURE__*/React.createElement("div", {
    className: "pay__chip",
    key: m
  }, /*#__PURE__*/React.createElement("span", {
    className: "pay__dot"
  }), m))));
}
function Faq() {
  const items = [{
    q: "Is Freecash legit?",
    a: /*#__PURE__*/React.createElement(React.Fragment, null, "Yes. Freecash has paid out ", /*#__PURE__*/React.createElement("b", null, "$300M+"), " to ", /*#__PURE__*/React.createElement("b", null, "70M+"), " members, holds a", /*#__PURE__*/React.createElement("b", null, " 4.7/5 Trustpilot rating"), " from 276,000+ reviews, and ranked ", /*#__PURE__*/React.createElement("b", null, "#3 on the Financial Times' 2025 FT1000"), " list of Europe's fastest-growing companies.")
  }, {
    q: "How much can I earn?",
    a: /*#__PURE__*/React.createElement(React.Fragment, null, "It varies. Freecash is a way to ", /*#__PURE__*/React.createElement("b", null, "earn extra cash in your spare time"), ", not a salary or guaranteed income \u2014 what you make depends on the offers you choose to complete.")
  }, {
    q: "How do I get paid?",
    a: /*#__PURE__*/React.createElement(React.Fragment, null, "Cash out via ", /*#__PURE__*/React.createElement("b", null, "PayPal, crypto, or gift cards"), " once you reach the minimum withdrawal amount.")
  }, {
    q: "Is it free to join?",
    a: /*#__PURE__*/React.createElement(React.Fragment, null, "Yes \u2014 creating an account and completing offers is completely free.")
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "en-eyebrow"
  }, "Is Freecash legit?"), /*#__PURE__*/React.createElement("div", {
    className: "faq"
  }, items.map((it, i) => /*#__PURE__*/React.createElement("details", {
    className: "faq__item",
    key: i,
    open: i === 0
  }, /*#__PURE__*/React.createElement("summary", {
    className: "faq__q"
  }, it.q, /*#__PURE__*/React.createElement("span", {
    className: "faq__plus"
  }, "+")), /*#__PURE__*/React.createElement("p", {
    className: "faq__a"
  }, it.a)))));
}
function LanderEn() {
  return /*#__PURE__*/React.createElement("div", {
    className: "en"
  }, /*#__PURE__*/React.createElement("div", {
    className: "en-top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "en-logo"
  }, "Free", /*#__PURE__*/React.createElement("b", null, "cash")), /*#__PURE__*/React.createElement("span", {
    className: "en-ref-note"
  }, "Independent referral page")), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Proof, null), /*#__PURE__*/React.createElement(HowItWorks, null), /*#__PURE__*/React.createElement(Payouts, null), /*#__PURE__*/React.createElement(Button, {
    href: REFERRAL_LINK,
    arrow: true
  }, "Start earning on Freecash"), /*#__PURE__*/React.createElement(Faq, null), /*#__PURE__*/React.createElement("p", {
    className: "en-foot"
  }, "This is an independent promotional / referral page and is not operated by or affiliated with Freecash. We may earn a commission when you sign up through our link. Freecash is free to join; earnings vary and are not guaranteed."));
}
window.LanderEn = LanderEn;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/freecash-lander-en/LanderEn.jsx", error: String((e && e.message) || e) }); }

// ui_kits/freecash-lander/LanderApp.jsx
try { (() => {
/* Freecash Lander UI kit — top-level state machine.
   Step 1 (age gate) → Step 2 (standard or Apple-Pay variant). */
function LanderApp() {
  const [step, setStep] = React.useState(1);
  const [age, setAge] = React.useState("");
  function handleContinue(selected) {
    // small delay so the select's value registers visually
    setTimeout(() => {
      setStep(2);
      window.scrollTo(0, 0);
    }, 150);
  }
  function restart() {
    setStep(1);
    setAge("");
    window.scrollTo(0, 0);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "fc-container",
    key: step
  }, step === 1 && /*#__PURE__*/React.createElement(window.Step1, {
    age: age,
    setAge: setAge,
    onContinue: handleContinue
  }), step === 2 && age === "over21" && /*#__PURE__*/React.createElement(window.Step2Standard, {
    onRestart: restart
  }), step === 2 && age === "under21" && /*#__PURE__*/React.createElement(window.Step2Apple, {
    onRestart: restart
  }));
}
window.LanderApp = LanderApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/freecash-lander/LanderApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/freecash-lander/Step1.jsx
try { (() => {
/* Freecash Lander UI kit — Step 1: the age-gate hero.
   Composes Badge, BonusNotification, ReviewStars, StatPill, Select. */
const {
  Badge,
  BonusNotification,
  ReviewStars,
  StatPill,
  Select
} = window.FreecashLanderDesignSystem_05d09e;
function Step1({
  age,
  setAge,
  onContinue
}) {
  const desc = {
    over21: "<strong>Instant Payouts:</strong> PayPal, CashApp, Venmo, Crypto & Wire",
    under21: "<strong>Limited Payouts:</strong> Wire Transfer Only"
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "fc-step"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fc-header"
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "logo"
  }, "Freecash App"), /*#__PURE__*/React.createElement(Badge, {
    variant: "step"
  }, "1 / 2")), /*#__PURE__*/React.createElement("div", {
    className: "fc-hero"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "fc-h1"
  }, "Get Paid for ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "fc-hl"
  }, "Everyday Stuff")), /*#__PURE__*/React.createElement(BonusNotification, {
    icon: "\uD83C\uDF81",
    title: "$5 Sign up Bonus",
    sub: "Available for new users"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "10px 0"
    }
  }, /*#__PURE__*/React.createElement(ReviewStars, {
    rating: 4.6,
    text: "4.6 (1K Ratings)"
  })), /*#__PURE__*/React.createElement("p", {
    className: "fc-sub"
  }, /*#__PURE__*/React.createElement("b", null, "Watch Netflix. Scroll TikTok. Take a walk."), /*#__PURE__*/React.createElement("br", null), "Earn cash just by engaging with our daily offers, that you can do any time!")), /*#__PURE__*/React.createElement("div", {
    className: "fc-stats"
  }, /*#__PURE__*/React.createElement(StatPill, {
    icon: "users",
    value: "500K+",
    label: "Active Users"
  }), /*#__PURE__*/React.createElement(StatPill, {
    icon: "cash",
    value: "100+",
    label: "Offers"
  })), /*#__PURE__*/React.createElement("div", {
    className: "fc-instruction"
  }, "Please Select Your Age Below"), /*#__PURE__*/React.createElement("div", {
    className: "fc-interaction"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fc-eyebrow"
  }, "Required: Select Your Age Range"), /*#__PURE__*/React.createElement(Select, {
    value: age,
    onChange: e => {
      const v = e.target.value;
      setAge(v);
      if (v) onContinue(v);
    },
    placeholder: "Choose your age\u2026",
    options: [{
      value: "over21",
      label: "I'm over 21"
    }, {
      value: "under21",
      label: "I'm under 21"
    }]
  }), age && /*#__PURE__*/React.createElement("div", {
    className: "fc-age-desc",
    dangerouslySetInnerHTML: {
      __html: desc[age]
    }
  })));
}
window.Step1 = Step1;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/freecash-lander/Step1.jsx", error: String((e && e.message) || e) }); }

// ui_kits/freecash-lander/Step2.jsx
try { (() => {
/* Freecash Lander UI kit — Step 2: the confirmation / offer screens.
   `over21` → standard green "You're In!" with referral CTA.
   `under21` → Apple-Pay reward variant with blue CTA. */
const {
  Badge,
  Button,
  Timeline
} = window.FreecashLanderDesignSystem_05d09e;

/* ⚠ PLACEHOLDER referral link — swap for your real tracked referral URL.
   Keep all SubID / ttclid params intact when wiring production. */
const REFERRAL_LINK = "https://your-referral-link.example/?s1=SUBID&s2=SUBID";
const CHECK = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  style: {
    width: 28,
    height: 28,
    fill: "var(--fc-green)"
  }
}, /*#__PURE__*/React.createElement("path", {
  d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
}));
function Step2Standard({
  onRestart
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "fc-step"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fc-header"
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "logo",
    white: true
  }, "Step Complete"), /*#__PURE__*/React.createElement(Badge, {
    variant: "step"
  }, "2 / 2")), /*#__PURE__*/React.createElement("div", {
    className: "fc-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fc-headline-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fc-success-icon"
  }, CHECK), /*#__PURE__*/React.createElement("h1", {
    className: "fc-youre-in"
  }, "You're ", /*#__PURE__*/React.createElement("span", {
    className: "fc-in-block"
  }, "In!"))), /*#__PURE__*/React.createElement("p", {
    className: "fc-sub"
  }, "Your device is confirmed compatible. We have reserved a sign up bonus for you.")), /*#__PURE__*/React.createElement(Button, {
    href: REFERRAL_LINK,
    arrow: true
  }, "Download & Start Earning"), /*#__PURE__*/React.createElement(Timeline, {
    steps: [{
      title: "Device Verified",
      detail: "iPhone/Android Ready",
      done: true
    }, {
      title: "Install & Register",
      detail: "Takes less than 60 seconds"
    }, {
      title: "Claim $5 Bonus",
      detail: "Instant credit to your balance"
    }]
  }), /*#__PURE__*/React.createElement("button", {
    className: "fc-restart",
    onClick: onRestart
  }, "\u2190 Start over"));
}
function Step2Apple({
  onRestart
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "fc-step"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fc-header"
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "logo",
    white: true
  }, "Step Complete"), /*#__PURE__*/React.createElement(Badge, {
    variant: "step"
  }, "2 / 2")), /*#__PURE__*/React.createElement("div", {
    className: "fc-hero",
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "fc-h1",
    style: {
      textAlign: "center"
    }
  }, "Get $750 Towards ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "fc-hl"
  }, "Apple Pay")), /*#__PURE__*/React.createElement("p", {
    className: "fc-sub",
    style: {
      textAlign: "center"
    }
  }, "Your device is confirmed compatible. We have reserved your $750 Apple Pay reward for you.")), /*#__PURE__*/React.createElement(Button, {
    variant: "apple",
    href: REFERRAL_LINK,
    arrow: true
  }, "Claim Your $750 Reward"), /*#__PURE__*/React.createElement(Timeline, {
    steps: [{
      title: "Device Verified",
      detail: "iPhone/Android Ready",
      done: true
    }, {
      title: "Complete Registration",
      detail: "Takes less than 60 seconds"
    }, {
      title: "Claim $750 Apple Pay Reward",
      detail: "Instant credit to your balance"
    }]
  }), /*#__PURE__*/React.createElement("button", {
    className: "fc-restart",
    onClick: onRestart
  }, "\u2190 Start over"));
}
window.Step2Standard = Step2Standard;
window.Step2Apple = Step2Apple;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/freecash-lander/Step2.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.ReviewStars = __ds_scope.ReviewStars;

__ds_ns.StatPill = __ds_scope.StatPill;

__ds_ns.Timeline = __ds_scope.Timeline;

__ds_ns.BonusNotification = __ds_scope.BonusNotification;

__ds_ns.CountdownTimer = __ds_scope.CountdownTimer;

__ds_ns.OptionCard = __ds_scope.OptionCard;

__ds_ns.Select = __ds_scope.Select;

})();
