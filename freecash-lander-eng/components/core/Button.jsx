import React from "react";

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
export function Button({
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
