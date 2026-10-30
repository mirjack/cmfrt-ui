import React from "react";
import { Icon } from "../Icon.jsx";
import { Button } from "../Button.jsx";

export function SideBarEmpty({
  title = "There is no tests yet",
  subtitle = "You haven't created a test yet. Click the button below to create one now.",
  buttonText = "Create new test",
  onCreate,
}) {
  return (
    <div className="storybook-sidebar-empty-container">
      <Icon name="ic_empty_bar" className="storybook-sidebar-empty-icon" />
      <div className="storybook-sidebar-empty-text-container">
        <p className="storybook-sidebar-empty-text">{title}</p>
        <p className="storybook-sidebar-empty-subtext">{subtitle}</p>
      </div>
      <Button primary={false} size="extra-small" tone="neutral" onClick={onCreate}>
        <Icon name="ic_add_outlined" className="storybook-sidebar-empty-button-icon" />
        {buttonText && <span className="storybook-sidebar-empty-button-text">{buttonText}</span>}
      </Button>
    </div>
  );
}

export default SideBarEmpty;
