"use client";

import { usePathname } from "next/navigation";
import { NavigationItem } from "../../../models";
import NAVIGATION_ITEMS from "../../../../../.configs/navigationItems";
import Button from "../../../ui/button/Button";

const Navigation = () => {
  const pathname = usePathname();
  console.log(NAVIGATION_ITEMS);

  return (
    <nav className="flex gap-4 h-full items-center">
      {NAVIGATION_ITEMS.map((item: NavigationItem) => (
        <Button
          key={item.name}
          variant="ghost"
          isActive={pathname === item.href}
          onClick={() => {
            if (item.href) window.location.href = item.href;
          }}
        >
          {item.name}
        </Button>
      ))}
    </nav>
  );
};

export default Navigation;
