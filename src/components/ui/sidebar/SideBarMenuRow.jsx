import React from "react";
import { SideBarIcon } from "./SideBarIcon";

export function SideBarMenuRow({ label = "Menu item", ...props }) {
  return (
    <div className="storybook-sidebar-menu-row" {...props}>
      <span className="storybook-sidebar-menu-row__label">{label}</span>
      <div className="storybook-sidebar-menu-row__actions">
        <SideBarIcon variant="collapse" type="vertical" className="storybook-sidebar-menu-row__collapse-icon" />
        <SideBarIcon />
      </div>
    </div>
  );
}

export default SideBarMenuRow;
