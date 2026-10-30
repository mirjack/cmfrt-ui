import React from "react";
import { SideBarSubMenuItem } from "./SideBarSubMenuItem";

const normalizeItem = (item) => typeof item === "string"
  ? { text: item, disabled: false }
  : { text: item?.text ?? "Sub Menu item", disabled: item?.disabled ?? false };

export function SideBarSubMenu({ border = true, items = [], ...props }) {
  const menuItems = items.length ? items : Array(4).fill("Sub Menu item");

  return (
    <div className={`storybook-sidebar-submenu ${border ? "storybook-sidebar-submenu--border" : ""}`} {...props}>
      {menuItems.map((item, index) => {
        const normalized = normalizeItem(item);
        return <SideBarSubMenuItem key={`${normalized.text}-${index}`} {...normalized} />;
      })}
    </div>
  );
}

export default SideBarSubMenu;
