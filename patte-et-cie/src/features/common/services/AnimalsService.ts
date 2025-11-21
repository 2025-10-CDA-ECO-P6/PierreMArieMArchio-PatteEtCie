import { Animal } from "../models/Animal";
import { HttpService } from "./HttpService";

export const AnimalService = {
  getAll: async (): Promise<Animal[]> => {
    const res = await HttpService.get<{ data: Animal[] }>("/data/getAllOwnerAnimalsResponse.json");
    return res.data;
  },

  getById: async (id: string): Promise<Animal> => {
    const animals = await AnimalService.getAll();
    const animal = animals.find((a) => a.Id === id);
    if (!animal) throw new Error("Animal not found");
    return animal;
  },

  getByOwnerId: async (ownerId: string): Promise<Animal[]> => {
    const res = await HttpService.get<{ data: Animal[] }>("/data/getAllOwnerAnimalsResponse.json");
    console.log("animals service", res.data);
    return res.data;
  },

  findAnimalById: (animals: Animal[], id: string): Animal => {
    const animal = animals.find((a) => a.Id === id);
    if (!animal) throw new Error("Animal not found");
    return animal;
  },
};

export default AnimalService;
