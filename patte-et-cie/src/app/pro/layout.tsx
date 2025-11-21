"use client";
import { NAVIGATION_ITEMS_PRO } from "@/src/.configs/navigationItems";
import { useAuthenticate } from "@/src/features/auth/hooks/useAuthenticate";
import Header from "@/src/features/common/components/header/Header";
import Loader from "@/src/features/common/ui/loader/Loader";

export default function ProLayout({ children }: { children: React.ReactNode }) {
  const { isLoading } = useAuthenticate();

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
