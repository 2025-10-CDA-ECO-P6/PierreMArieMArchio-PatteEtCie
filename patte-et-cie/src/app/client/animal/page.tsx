"use client";

import { useOwners } from "@/src/features/common/context/OwnerContext";
import { useBasePath } from "@/src/features/common/hooks/useBasePath";
import { buildAnimalPath } from "@/src/features/common/utils";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AnimalsRootPage() {
  console.log("PAGE AnimalsRoot");
  const router = useRouter();
  const basePath = useBasePath();
  const { currentOwner } = useOwners();

  console.log("PAGE AnimalsRoot animals get");

  useEffect(() => {
    if (!currentOwner) return;
    console.log("PAGE AnimalsRoot effect");
    if (!currentOwner.animals || currentOwner.animals.length === 0) return;

    const target = buildAnimalPath(basePath, currentOwner.animals[0].Id);
    router.replace(target);
  }, [basePath, currentOwner, router]);

  return null;
}
