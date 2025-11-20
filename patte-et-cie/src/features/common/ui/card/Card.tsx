"use client";

import { cx } from "../../utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  shadow?: boolean;
  hover?: boolean;
}

export default function Card({ children, className, shadow = true, hover = false, ...props }: CardProps) {
  return (
    <div
      className={cx(
        "rounded-xl bg-white text-black p-6",
        shadow && "shadow-md",
        hover && "transition hover:shadow-lg",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
