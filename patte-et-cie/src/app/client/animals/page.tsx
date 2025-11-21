"use client";
import AnimalsList from "@/src/features/common/components/animals-list/AnimalsList";
import { useGetOwnerWithAnimals } from "@/src/features/common/hooks/useGetOwnerWithAnimals";

export default function Animals() {
  const { animals } = useGetOwnerWithAnimals();
  return (
    <>
      <AnimalsList animals={animals} />
    </>
  );
}
