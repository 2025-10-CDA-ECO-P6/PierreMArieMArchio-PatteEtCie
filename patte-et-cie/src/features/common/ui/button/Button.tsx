"use client";

import { cx } from "../../utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-white text-black hover:bg-gray-100",
  secondary: "bg-black text-white hover:bg-gray-800",
  outline: "border border-white text-white hover:bg-white hover:text-black",
  ghost: "bg-transparent text-white hover:bg-white/20",
  danger: "bg-red-600 text-white hover:bg-red-700",
};

const Button = ({ variant = "primary", className, children, ...props }: ButtonProps) => {
  return (
    <button
      className={cx("px-5 py-3 rounded-lg font-medium transition  cursor-pointer", variantClasses[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
