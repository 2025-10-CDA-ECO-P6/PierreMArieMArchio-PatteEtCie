import Link from "next/link";
import { Animal } from "../../models/Animal";
import Image from "next/image";
import Button from "@/src/ui/button/Button";
import Card from "@/src/ui/card/Card";

interface AnimalsListProps {
  animals: Animal[] | undefined;
}

const AnimalsList = ({ animals }: AnimalsListProps) => {
  if (!animals) {
    return <p> no animals found</p>;
  }

  return (
    <div className="space-y-4 m-4">
      {animals.map((animal) => (
        <Card key={animal.Id} className="shadow-xl">
          <div className="flex">
            <div style={{ width: 130, height: 130, position: "relative" }}>
              <Image src={animal.img_url} alt={animal.name} fill style={{ objectFit: "cover", borderRadius: "8px" }} />
            </div>

            <div className="ml-4 flex flex-col justify-between w-full">
              <h2 className="text-xl font-bold">{animal.name}</h2>

              <div className="flex justify-end">
                <Link href={`/animals/${animal.Id}`} passHref>
                  <Button variant="blue">Voir détails</Button>
                </Link>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default AnimalsList;
