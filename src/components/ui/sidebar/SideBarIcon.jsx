import React, { useState } from "react";
import { Icon } from "../Icon.jsx";

export function SideBarIcon({
  variant = "action",
  type = "horizontal",
  className = "",
  ...props
}) {
  const [toggled, setToggled] = useState(false);

  let iconName = "ic_add_outlined";
  if (variant === "collapse") {
    if (type === "horizontal") iconName = toggled ? "ic_down" : "ic_top";
    else if (type === "vertical") iconName = toggled ? "ic_up" : "ic_down";
    else if (type === "upDown") iconName = "ic_collapsed_horizontal";
    else if (type === "plusMinus") iconName = toggled ? "ic_minus" : "ic_add_outlined";
    else iconName = null;
  }

  return (
    <button
      type="button"
      className={`storybook--sidebar-icon-button ${className}`.trim()}
      onClick={() => variant === "collapse" && setToggled((value) => !value)}
      aria-label={variant === "collapse" ? "Toggle section" : "Add item"}
      {...props}
    >
      <Icon name={iconName} className="storybook--sidebar-icon" />
    </button>
  );
}

export default SideBarIcon;
