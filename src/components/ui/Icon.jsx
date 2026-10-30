import React from "react";
import { icons } from "./icons-data.js";

export function Icon({
  name,
  size = 24,
  fill = "none",
  stroke = "#131314",
  color,
  className,
  style,
  fallback = null,
  ...props
}) {
  const icon = icons[name];
  if (!icon) return fallback;

  return (
    <svg
      {...icon.attributes}
      width={size}
      height={size}
      fill={fill}
      stroke={stroke}
      color={color}
      className={className}
      style={style}
      aria-hidden={props["aria-label"] ? undefined : true}
      {...props}
      dangerouslySetInnerHTML={{ __html: icon.body }}
    />
  );
}

export default Icon;
