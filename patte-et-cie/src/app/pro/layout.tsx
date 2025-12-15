"use client";

import { NAVIGATION_ITEMS_PRO } from "@/src/.configs/navigationItems";
import { useAuthGuard } from "@/src/features/auth/hooks/useAuthGuard";
import Header from "@/src/features/common/components/header/Header";
import Loader from "@/src/ui/loader/Loader";

export default function ProLayout({ children }: { children: React.ReactNode }) {
  const { isLoading } = useAuthGuard();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Header navigationItems={NAVIGATION_ITEMS_PRO} />
      {children}
    </>
  );
}
