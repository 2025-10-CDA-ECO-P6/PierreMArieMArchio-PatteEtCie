"use client";

import AnimalsNavbar from "@/src/features/common/components/animals-navbar/AnimalsNavbar";
import { useOwners } from "@/src/features/common/context/OwnerContext";

export default function AnimalsLayout({ children }: { children: React.ReactNode }) {
  console.log("Layout Animals");
  const { currentOwner } = useOwners();

  console.log("Layout Animal: currentOwner", currentOwner);

  if (!currentOwner) return;

  return (
    <>
      <AnimalsNavbar animals={currentOwner.animals} />
      {children}
    </>
  );
}
