"use client";

import { cx } from "../../utils";

type ButtonVariant = "primary" | "secondary" | "blue" | "outline" | "ghost" | "danger";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  isActive?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-white text-black hover:bg-gray-100",
  secondary: "bg-black text-white hover:bg-gray-800",
  blue: "bg-[#9CA8FB] text-white border-[#F1E5E5]/25 hover:bg-[#818AF9]",
  outline: "border border-white text-white hover:bg-white hover:text-black",
  ghost: "bg-[#F6F6F6] text-black hover:bg-[#EDEDED]",
  danger: "bg-red-600 text-white hover:bg-red-700",
};

const activeClasses = "bg-[#818AF9] text-white border border-[#F1E5E5]/25 hover:bg-[#818AF9] font-extralight";

const getButtonClasses = (variant: ButtonVariant, isActive?: boolean) => {
  if (isActive) return activeClasses;
  return variantClasses[variant];
};

const Button = ({ variant = "primary", className, children, isActive, onClick, ...props }: ButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isActive) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };

  return (
    <button
      className={cx(

        "px-2 py-1 sm:px-1 sm:py-3 h-auto flex items-center justify-center rounded-lg font-medium transition cursor-pointer",
        getButtonClasses(variant, isActive),
        className
      )}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;