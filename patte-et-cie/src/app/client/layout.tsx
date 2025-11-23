"use client";

import Header from "@/src/features/common/components/header/Header";
import Loader from "@/src/features/common/ui/loader/Loader";
import { NAVIGATION_ITEMS_CLIENT } from "../../.configs/navigationItems";
import { useAuthGuard } from "@/src/features/auth/hooks/useAuthGuard";
import { Role } from "@/src/features/auth/models/Role";
import { useGetOwnerWithAnimals } from "@/src/features/common/hooks/useGetOwnerWithAnimals";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const { isLoading: authIsLoading } = useAuthGuard(Role.CLIENT);
  const { isLoading: animalIsLoading } = useGetOwnerWithAnimals();

  const isAnyLoading = authIsLoading || animalIsLoading;

  if (isAnyLoading) {
    return <Loader />;
  }

  return (
    <>
      <Header navigationItems={NAVIGATION_ITEMS_CLIENT} />
      {children}
    </>
  );
}
