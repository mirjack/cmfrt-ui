import React, { useRef, useState } from "react";

function OtpInputFields({
  length = 6,
  error = false,
  success = false,
  notice = "Notice",
  onChange,
}) {
  const [values, setValues] = useState(() => Array(length).fill(""));
  const inputsRef = useRef([]);

  const updateValues = (nextValues) => {
    setValues(nextValues);
    onChange?.(nextValues.join(""));
  };

  const handleChange = (event, index) => {
    const digits = event.target.value.replace(/\D/g, "");
    if (!digits) return;
    const nextValues = [...values];
    for (let offset = 0; offset < digits.length && index + offset < length; offset += 1) {
      nextValues[index + offset] = digits[offset];
    }
    updateValues(nextValues);
    inputsRef.current[Math.min(index + digits.length, length - 1)]?.focus();
  };

  const handleKeyDown = (event, index) => {
    if (event.key === "Backspace") {
      if (values[index]) {
        const nextValues = [...values];
        nextValues[index] = "";
        updateValues(nextValues);
      } else if (index > 0) {
        inputsRef.current[index - 1]?.focus();
        const nextValues = [...values];
        nextValues[index - 1] = "";
        updateValues(nextValues);
      }
    } else if (event.key === "ArrowLeft" && index > 0) {
      inputsRef.current[index - 1]?.focus();
    } else if (event.key === "ArrowRight" && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  return (
    <div className="storybook-otp--container">
      <div className="otp-wrapper" role="group" aria-label="One-time password">
        {values.map((value, index) => (
          <input
            key={index}
            ref={(element) => { inputsRef.current[index] = element; }}
            type="text"
            inputMode="numeric"
            autoComplete={index === 0 ? "one-time-code" : "off"}
            maxLength={length}
            value={value}
            aria-label={`Digit ${index + 1}`}
            className={[
              "storybook-otp",
              value ? "filled" : "",
              error ? "storybook-otp--error" : "",
              success ? "storybook-otp--success" : "",
            ].filter(Boolean).join(" ")}
            onChange={(event) => handleChange(event, index)}
            onKeyDown={(event) => handleKeyDown(event, index)}
          />
        ))}
      </div>
      <span className="storybook-otp-error-notice" role={error ? "alert" : undefined}>
        {error ? notice : ""}
      </span>
    </div>
  );
}

export function OtpInput(props) {
  return <OtpInputFields key={props.length ?? 6} {...props} />;
}

export default OtpInput;
