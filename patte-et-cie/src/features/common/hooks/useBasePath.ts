"use client";

import { usePathname } from "next/navigation";

export function useBasePath() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0];
  if (first === "client" || first === "pro") {
    return `/${first}`;
  }

  return "";
}
