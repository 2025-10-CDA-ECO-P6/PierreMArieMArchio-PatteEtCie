import { Veterinarian } from "../models";
import { HttpService } from "./HttpService";

export const VeterinarianService = {
  getAll: async (): Promise<Veterinarian[]> => {
    const res = await HttpService.get<{ data: Veterinarian[] }>("/data/getAllVetResponse.json");
    return res.data;
  },

  getById: async (id: string): Promise<Veterinarian> => {
    const vets = await VeterinarianService.getAll();
    const vet = vets.find((v) => v.id === id);
    if (!vet) throw new Error("Veterinarian not found");
    return vet;
  },
};

export default VeterinarianService;
