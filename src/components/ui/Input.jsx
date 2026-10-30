import React, { useState } from "react";
import { Icon } from "./Icon.jsx";

function formatPhone(value) {
  let digits = value.replace(/\D/g, "");
  if (!digits.startsWith("998")) digits = `998${digits}`;
  digits = digits.slice(0, 12);

  let formatted = "+998";
  if (digits.length > 3) formatted += ` ${digits.slice(3, 5)}`;
  if (digits.length > 5) formatted += ` ${digits.slice(5, 8)}`;
  if (digits.length > 8) formatted += ` ${digits.slice(8, 10)}`;
  if (digits.length > 10) formatted += ` ${digits.slice(10, 12)}`;
  return formatted;
}

export function Input({
  disabled = false,
  label = "Title",
  notice = "Notice text",
  errorFilled = false,
  errorText = "Error text",
  leftIcon = true,
  type = "text",
  placeholder = "Enter text",
  className = "",
  onChange,
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [phoneValue, setPhoneValue] = useState(type === "phone" ? "+998 " : "");

  const handlePhoneChange = (event) => {
    const nextValue = formatPhone(event.target.value.startsWith("+998")
      ? event.target.value
      : `+998${event.target.value}`);
    setPhoneValue(nextValue);
    onChange?.(event);
  };

  const handlePhoneKeyDown = (event) => {
    if ((event.key === "Backspace" || event.key === "Delete") && phoneValue.length <= 5) {
      event.preventDefault();
    }
    props.onKeyDown?.(event);
  };

  const inputType = type === "password"
    ? (showPassword ? "text" : "password")
    : (type === "phone" ? "tel" : type);

  return (
    <div className="storybook-input-form">
      {label && <label className="storybook-input-label">{label}</label>}
      <div className={`storybook-input-wrapper ${leftIcon ? "with-left-icon" : ""}`}>
        {leftIcon && (
          <Icon
            name="ic_add_outlined"
            className={`storybook-left-input-icon ${disabled ? "storybook-input-icon--disabled" : ""}`}
          />
        )}
        <input
          {...props}
          type={inputType}
          disabled={disabled}
          placeholder={placeholder}
          className={[
            "storybook-input",
            disabled ? "storybook-button--disabled" : "",
            errorFilled ? "storybook-input--error" : "",
            className,
          ].filter(Boolean).join(" ")}
          {...(type === "phone"
            ? { value: phoneValue, onChange: handlePhoneChange, onKeyDown: handlePhoneKeyDown }
            : { onChange })}
        />
        {type === "password" && (
          <Icon
            name={showPassword ? "ic_eye_outlined" : "ic_eye_slash_outlined"}
            className={`storybook-input--icon ${disabled ? "storybook-input-icon--disabled" : ""}`}
            onClick={() => setShowPassword((visible) => !visible)}
            role="button"
            aria-label={showPassword ? "Hide password" : "Show password"}
            style={{ cursor: "pointer" }}
          />
        )}
      </div>
      {errorFilled && <span className="storybook-input-notice storybook-input-notice--error">{errorText}</span>}
      {notice && <span className="storybook-input-notice">{notice}</span>}
    </div>
  );
}

export default Input;
