import React from "react";
import { Icon } from "../Icon.jsx";

export function SideBarMedia({ state = "default", ...props }) {
  return (
    <button
      type="button"
      className={`storybook--sidebar-button storybook--sidebar-button--${state}`}
      disabled={state === "disabled"}
      {...props}
    >
      <Icon name="ic_square_outlined" className="storybook--sidebar-button-icon" />
    </button>
  );
}

export const SidebarMedia = SideBarMedia;
export default SideBarMedia;
