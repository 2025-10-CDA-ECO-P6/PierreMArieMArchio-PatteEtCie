"use client";

import { cx } from "../utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function Input({ label, error, className, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1 w-full ">
      {label && <label className=" text-sm font-medium text-left">{label}</label>}

      <input
        className={cx(
          "px-4 py-2 rounded-lg bg-[#F6F6F6] text-black outline-none border border-transparent",
          "focus:border-blue-400 focus:ring-2 focus:ring-blue-300",
          error && "border-red-500",
          className
        )}
        {...props}
      />

      {error && <p className="text-red-300 text-sm">{error}</p>}
    </div>
  );
}
