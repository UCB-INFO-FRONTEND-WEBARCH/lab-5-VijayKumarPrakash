import React from "react";
import "./Button.css";

/**
 * Lab 5 - Button Component
 *
 * Goal:
 *   Build a reusable <Button> component that changes its appearance and behavior
 *   based on props, using the provided Button.css for styling.
 *
 * Props:
 *   - children (ReactNode): Button label or content (required)
 *   - variant ("fill" | "outline" | "text"): Visual style of the button
 *   - size ("small" | "medium" | "large"): Button size
 *   - color ("primary" | "secondary"): Theme color
 *   - disabled (boolean): Whether the button is disabled
 *   - icon (ReactNode): Optional icon displayed before the text
 *   - onClick (function): Click event handler
 *
 * Requirements:
 *   1. Render a <button> element that:
 *        - Shows the icon (if provided) before the text.
 *        - Renders the children inside the button.
 *   2. Dynamically assign CSS classes based on props:
 *        - "button"
 *        - "variant-[fill|outline|text]"
 *        - "size-[small|medium|large]"
 *        - "color-[primary|secondary]"
 *        - Add "disabled" class if the button is disabled.
 *   3. Add `disabled={disabled}` to disable clicks.
 *
 * Tips:
 *   - Combine class names with:
 *       const classes = [
 *         "button",
 *         `variant-${variant}`,
 *         `size-${size}`,
 *         `color-${color}`,
 *         disabled ? "disabled" : ""
 *       ].filter(Boolean).join(" ");
 *
 *   - Render the icon only if it exists:
 *       {icon && <span className="icon">{icon}</span>}
 *
 *   - Reference Button.css to see existing styles.
 */

export function Button({
  /* Setting some defaults for props */
  children,
  variant = "fill",
  size = "medium",
  color = "primary",
  disabled = false,
  icon,
  onClick
}) {
  const classes = [
    "button",
    `variant-${variant}`,
    `size-${size}`,
    `color-${color}`,
    disabled ? "disabled" : ""
  ].filter(Boolean).join(" ");

  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {icon && <span className="icon">{icon}</span>}
      {children}
    </button>
  );
}