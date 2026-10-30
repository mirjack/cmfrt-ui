import React, { useState } from "react";
import { Icon } from "../Icon.jsx";

export function SideBarHeaderIcon({ defaultOpen = false, ...props }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <button
      type="button"
      className="storybook--sidebar-header-button"
      onClick={() => setIsOpen((open) => !open)}
      aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
      aria-pressed={isOpen}
      {...props}
    >
      <Icon
        name={isOpen ? "ic_sidebar_open" : "ic_sidebar_close"}
        className="storybook--sidebar-header-icon"
      />
    </button>
  );
}

export default SideBarHeaderIcon;
