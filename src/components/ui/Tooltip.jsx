import React from "react";

export function Tooltip({
  label = "This is a tooltip",
  position = "top",
  children,
  mode = "light",
}) {
  const placement = ["top", "bottom", "left", "right"].includes(position)
    ? position
    : "top";

  return (
    <span className={`storybook-tooltip storybook-tooltip--${placement} ${mode === "dark" ? "storybook-tooltip--dark" : ""}`}>
      <span className="storybook-tooltip__trigger">{children}</span>
      <span className="storybook-tooltip__bubble" role="tooltip">{label}</span>
    </span>
  );
}

export default Tooltip;
