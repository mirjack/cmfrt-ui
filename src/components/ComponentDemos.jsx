import { useState } from "react";
import { Icon } from "./ui/Icon.jsx";
import { iconNames } from "./ui/icon-names.js";
import { OtpInput } from "./ui/OtpInput.jsx";

export function OtpPreview() {
  const [value, setValue] = useState("");
  return (
    <div className="otp-demo">
      <OtpInput onChange={setValue} />
      <span className="otp-demo__value">{value ? `Entered code: ${value}` : "Type a code to preview the value"}</span>
    </div>
  );
}

export function IconPreview() {
  const [query, setQuery] = useState("");
  const visibleIcons = iconNames.filter((name) => name.toLowerCase().includes(query.toLowerCase()));
  return (
    <div className="icon-demo">
      <input type="search" className="icon-demo__search" placeholder="Filter icons" value={query}
        onChange={(event) => setQuery(event.target.value)} aria-label="Filter icons" />
      <div className="icon-demo__grid">
        {visibleIcons.map((name) => <div className="icon-demo__item" key={name}><Icon name={name} size={24} /><code>{name}</code></div>)}
      </div>
      {!visibleIcons.length && <p className="icon-demo__empty">No icons match that name.</p>}
    </div>
  );
}
