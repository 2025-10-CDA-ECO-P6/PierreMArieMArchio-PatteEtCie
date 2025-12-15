"use client";

import { useBasePath } from "../../hooks/useBasePath";
import { Animal } from "../../models/Animal";
import { usePathname, useRouter } from "next/navigation";
import { buildAnimalPath } from "../../utils";
import Button from "@/src/ui/button/Button";

interface AnimalsNavbarProps {
  animals: Animal[] | undefined;
}

const AnimalsNavbar = ({ animals }: AnimalsNavbarProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const basePath = useBasePath();

  if (!animals) {
    // Loader ou placeholder pour indiquer que les données sont en cours
    return <p className="m-4">Loading animals...</p>;
  }

  if (animals.length === 0) {
    return <p className="m-4">No animals found</p>;
  }

  return (
    <div className="flex flex-wrap gap-4 m-4 items-start">
      {animals.map((animal) => {
        const target = buildAnimalPath(basePath, animal.Id);

        return (
          <Button
            key={animal.Id}
            variant="ghost"
            isActive={pathname === target || pathname.startsWith(target)}
            onClick={() => router.push(target)}
            className="h-auto"
          >
            {animal.name}
          </Button>
        );
      })}
    </div>
  );
};

export default AnimalsNavbar;
