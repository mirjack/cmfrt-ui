import React from "react";
import AvatarImg from "../../../assets/avatar.png";

export function SideBarAvatar({ alt = "User avatar", className = "", ...props }) {
  return (
    <img
      src={AvatarImg}
      alt={alt}
      className={`storybook-sidebar--avatar-img ${className}`.trim()}
      {...props}
    />
  );
}

export default SideBarAvatar;
