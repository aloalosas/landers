import React from "react";

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
export function OptionCard({ title, desc, selected = false, onSelect, className = "", ...rest }) {
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
