"use client";
import { useAuthenticate } from "@/src/features/auth/hooks/useAuthenticate";
import Header from "@/src/features/common/components/header/Header";
import Loader from "@/src/features/common/ui/loader/Loader";
import { NAVIGATION_ITEMS_CLIENT } from "../../.configs/navigationItems";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const { isLoading } = useAuthenticate();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Header navigationItems={NAVIGATION_ITEMS_CLIENT} />
      {children}
    </>
  );
}
