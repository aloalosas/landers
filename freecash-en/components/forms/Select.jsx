import React from "react";

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
export function Select({ value, onChange, placeholder = "Choose…", options = [], className = "", ...rest }) {
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
