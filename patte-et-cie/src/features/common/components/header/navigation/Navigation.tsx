"use client";

import { useRouter, usePathname } from "next/navigation";
import { NavigationItem } from "../../../models";
import Button from "@/src/ui/button/Button";

interface NavigationProps {
  navigationItems: NavigationItem[];
}

const Navigation = ({ navigationItems }: NavigationProps) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav className="flex gap-4 h-full items-center">
      {navigationItems.map((item: NavigationItem) => (
        <Button
          key={item.name}
          variant="ghost"
          isActive={pathname.startsWith(item.href)}
          onClick={() => {
            if (item.href) router.push(item.href);
          }}
        >
          {item.name}
        </Button>
      ))}
    </nav>
  );
};

export default Navigation;
