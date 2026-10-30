import React from "react";

export function SideBarSubMenuItem({ text = "Sub Menu item", disabled = false, ...props }) {
  return (
    <button
      type="button"
      className={`storybook-sidebar-submenu-item-button ${disabled ? "storybook-sidebar-submenu-item-button--disabled" : "storybook-sidebar-submenu-item-button--default"}`}
      disabled={disabled}
      {...props}
    >
      <span className="storybook-sidebar-submenu-item">{text}</span>
    </button>
  );
}

export default SideBarSubMenuItem;
