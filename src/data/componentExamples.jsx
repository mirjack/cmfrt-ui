import {
  Button,
  Input,
  OtpInput,
  SideBarAvatar,
  SideBarEmpty,
  SideBarHeaderIcon,
  SideBarIcon,
  SideBarMedia,
  SideBarMenuRow,
  SideBarSubMenu,
  SideBarSubMenuItem,
  Tooltip,
} from "../components/ui/index.js";
import { IconPreview, OtpPreview } from "../components/ComponentDemos.jsx";

export const componentExamples = {
  button: {
    title: "Button",
    description: "Buttons trigger actions and support tonal, visual, size, icon, and disabled states.",
    sections: [{ title: "Preview", id: "preview" }, { title: "Props", id: "props" }, { title: "Usage", id: "usage" }],
    api: [
      { name: "label", type: "ReactNode", default: "—", description: "Button content. `children` can be used instead." },
      { name: "primary", type: "boolean", default: "true", description: "Uses the primary visual treatment when true." },
      { name: "tone", type: "string", default: '"neutral"', description: "Sets the neutral, positive, or negative tone." },
      { name: "type", type: "string", default: '"flled"', description: "Selects the filled, ghost, or secondary style." },
      { name: "size", type: "string", default: '"medium"', description: "Controls the button size." },
      { name: "leftIcon / rightIcon", type: "boolean", default: "false", description: "Shows the built-in leading or trailing icon." },
      { name: "disabled", type: "boolean", default: "false", description: "Disables the native button." },
    ],
    code: `import { Button } from "@cmfrt/ui";\nimport "@cmfrt/ui/styles.css";\n\n<Button label="Continue" tone="positive" />\n<Button primary={false} label="Cancel" />\n<Button type="ghost" label="More options" />`,
    preview: (
      <div className="ui-preview-grid">
        <Button label="Primary" />
        <Button primary={false} label="Secondary" />
        <Button type="ghost" label="Ghost" />
        <Button tone="negative" label="Delete" />
        <Button leftIcon label="Continue" />
        <Button disabled label="Disabled" />
      </div>
    ),
  },
  input: {
    title: "Input",
    description: "Text inputs include optional labels, helper text, icons, password visibility, validation, and Uzbekistan phone formatting.",
    sections: [{ title: "Preview", id: "preview" }, { title: "Props", id: "props" }, { title: "Usage", id: "usage" }],
    api: [
      { name: "type", type: "string", default: '"text"', description: "Accepts native input types plus `password` and `phone`." },
      { name: "label", type: "ReactNode", default: '"Title"', description: "Label displayed above the field." },
      { name: "placeholder", type: "string", default: '"Enter text"', description: "Input placeholder text." },
      { name: "notice", type: "ReactNode", default: '"Notice text"', description: "Helper text shown below the field." },
      { name: "errorFilled / errorText", type: "boolean / ReactNode", default: "false / \"Error text\"", description: "Shows the error state and its message." },
      { name: "leftIcon", type: "boolean", default: "true", description: "Shows the leading icon." },
      { name: "disabled", type: "boolean", default: "false", description: "Disables the native input." },
      { name: "onChange", type: "function", default: "—", description: "Receives the native input change event." },
    ],
    code: `import { Input } from "@cmfrt/ui";\n\n<Input label="Email" type="email" notice="We will not share your email." />\n<Input label="Password" type="password" />\n<Input label="Phone" type="phone" />`,
    preview: (
      <div className="ui-preview-stack">
        <Input label="Email" type="email" notice="Use your work email address." placeholder="name@example.com" />
        <Input label="Password" type="password" notice="At least 8 characters" />
        <Input label="Phone" type="phone" notice="Uzbekistan phone number" />
        <Input label="Validation error" errorFilled errorText="Check this value" notice="This field needs attention." />
      </div>
    ),
  },
  "otp-input": {
    title: "OTP input",
    description: "The one-time password control advances between digits, accepts pasted codes, and reports the entered value through onChange.",
    sections: [{ title: "Preview", id: "preview" }, { title: "Props", id: "props" }, { title: "Usage", id: "usage" }],
    api: [
      { name: "length", type: "number", default: "6", description: "Number of code digits." },
      { name: "onChange", type: "function", default: "—", description: "Receives the current code as a string." },
      { name: "error", type: "boolean", default: "false", description: "Applies the error state to each digit." },
      { name: "success", type: "boolean", default: "false", description: "Applies the success state to each digit." },
      { name: "notice", type: "string", default: '"Notice"', description: "Message announced while the error state is active." },
    ],
    code: `import { OtpInput } from "@cmfrt/ui";\n\n<OtpInput length={6} onChange={(code) => verify(code)} />\n<OtpInput length={4} error notice="Code is incorrect" />`,
    preview: (
      <div className="ui-preview-stack">
        <OtpPreview />
        <OtpInput length={4} error notice="Code is incorrect" />
        <OtpInput length={4} success />
      </div>
    ),
  },
  tooltip: {
    title: "Tooltip",
    description: "Tooltip labels appear on hover or keyboard focus and can be positioned on any side of the trigger.",
    sections: [{ title: "Preview", id: "preview" }, { title: "Props", id: "props" }, { title: "Usage", id: "usage" }],
    api: [
      { name: "children", type: "ReactNode", default: "required", description: "Element that activates the tooltip." },
      { name: "label", type: "ReactNode", default: '"This is a tooltip"', description: "Content shown in the tooltip bubble." },
      { name: "position", type: '"top" | "bottom" | "left" | "right"', default: '"top"', description: "Placement relative to the trigger." },
      { name: "mode", type: '"light" | "dark"', default: '"light"', description: "Tooltip bubble color treatment." },
    ],
    code: `import { Tooltip } from "@cmfrt/ui";\n\n<Tooltip label="More information" position="top">\n  <button type="button">Details</button>\n</Tooltip>`,
    preview: (
      <div className="tooltip-demo">
        <Tooltip label="Top tooltip" position="top"><button type="button">Top</button></Tooltip>
        <Tooltip label="Bottom tooltip" position="bottom"><button type="button">Bottom</button></Tooltip>
        <Tooltip label="Left tooltip" position="left"><button type="button">Left</button></Tooltip>
        <Tooltip label="Right tooltip" position="right"><button type="button">Right</button></Tooltip>
      </div>
    ),
  },
  sidebar: {
    title: "Sidebar",
    description: "Sidebar building blocks include menu rows, submenus, icon actions, media controls, avatars, and an empty state.",
    sections: [{ title: "Preview", id: "preview" }, { title: "Props", id: "props" }, { title: "Usage", id: "usage" }],
    api: [
      { name: "SideBarMenuRow.label", type: "ReactNode", default: '"Menu item"', description: "Text shown in a menu row." },
      { name: "SideBarSubMenu.items", type: "Array<string | { text, disabled }>", default: "[]", description: "Submenu items. An empty array renders the sample rows." },
      { name: "SideBarSubMenu.border", type: "boolean", default: "true", description: "Shows the submenu divider." },
      { name: "SideBarEmpty.title / subtitle", type: "ReactNode", default: "Built-in copy", description: "Heading and supporting text for the empty state." },
      { name: "SideBarEmpty.buttonText", type: "string", default: '"Create new test"', description: "Label for the empty-state action." },
      { name: "SideBarEmpty.onCreate", type: "function", default: "—", description: "Called when the empty-state action is pressed." },
    ],
    code: `import { SideBarMenuRow, SideBarSubMenu, SideBarEmpty } from "@cmfrt/ui";\n\n<SideBarMenuRow label="Projects" />\n<SideBarSubMenu items={["Overview", "Settings"]} />\n<SideBarEmpty title="No items yet" />`,
    preview: (
      <div className="sidebar-demo">
        <div className="sidebar-demo__controls">
          <SideBarMedia />
          <SideBarMedia state="focus" />
          <SideBarMedia state="disabled" />
          <SideBarAvatar />
          <SideBarHeaderIcon />
          <SideBarIcon variant="collapse" type="vertical" />
        </div>
        <SideBarMenuRow label="Projects" />
        <SideBarSubMenu items={["Overview", "Members", { text: "Archived", disabled: true }]} />
        <SideBarSubMenuItem text="Standalone menu item" />
        <SideBarEmpty title="No tests yet" subtitle="Create a test to see it here." buttonText="Create test" />
      </div>
    ),
  },
  icons: {
    title: "Icons",
    description: "Browse the 60 inline SVG icons included with CMFRT UI. Filter by name and use the icon key with the Icon component.",
    sections: [{ title: "Preview", id: "preview" }, { title: "Props", id: "props" }, { title: "Usage", id: "usage" }],
    api: [
      { name: "name", type: "string", default: "required", description: "Key of an icon in the CMFRT icon set." },
      { name: "size", type: "number | string", default: "24", description: "Rendered width and height." },
      { name: "fill / stroke", type: "string", default: '"none" / "#131314"', description: "SVG fill and stroke colors." },
      { name: "color", type: "string", default: "—", description: "SVG color value for icons that use `currentColor`." },
      { name: "fallback", type: "ReactNode", default: "null", description: "Content rendered when the icon name is not found." },
    ],
    code: `import { Icon } from "@cmfrt/ui";\n\n<Icon name="ic_add_outlined" size={24} />\n<Icon name="ic_search_outlined" color="#ff5e00" />`,
    preview: <IconPreview />,
  },
};
