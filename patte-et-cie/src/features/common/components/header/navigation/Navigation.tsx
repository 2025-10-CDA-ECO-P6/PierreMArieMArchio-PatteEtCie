"use client";

import { useRouter, usePathname } from "next/navigation";
import { NavigationItem } from "../../../models";
import NAVIGATION_ITEMS from "../../../../../.configs/navigationItems";
import Button from "../../../ui/button/Button";

const Navigation = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav className="flex gap-4 h-full items-center">
      {NAVIGATION_ITEMS.map((item: NavigationItem) => (
        <Button
          key={item.name}
          variant="ghost"
          isActive={pathname === item.href}
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
