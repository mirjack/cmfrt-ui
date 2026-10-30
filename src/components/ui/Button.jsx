import React from "react";
import { Icon } from "./Icon.jsx";

export function Button({
  primary = true,
  size = "medium",
  tone = "neutral",
  type = "flled",
  leftIcon = false,
  rightIcon = false,
  disabled = false,
  label,
  className = "",
  children,
  ...props
}) {
  const mode = primary ? "storybook-button--primary" : "storybook-button--secondary";
  const disabledMode = disabled ? "storybook-button--disabled" : "";

  return (
    <button
      className={[
        "storybook-button",
        `storybook-button--${tone}`,
        `storybook-button--${type}`,
        `storybook-button--${size}`,
        mode,
        disabledMode,
        className,
      ].filter(Boolean).join(" ")}
      disabled={disabled}
      {...props}
    >
      {leftIcon && <Icon name="ic_info_outlined" className="input-icon" />}
      {label ?? children}
      {rightIcon && <Icon name="ic_arrow_down" className="input-icon" />}
    </button>
  );
}

export default Button;
