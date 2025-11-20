import getAllVetResponse from "../../../../.data/getAllVet.json";
import { Veterinarian } from "../models";

export const VeterinarianService = {
  getAll: async (): Promise<Veterinarian[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(getAllVetResponse.data);
      }, 500);
    });
  },

  getById: async (id: string): Promise<Veterinarian> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const vet = getAllVetResponse.data.find((v) => v.id === id);
        if (!vet) {
          reject(new Error("Veterinarian not found"));
        } else {
          resolve(vet);
        }
      }, 500);
    });
  },
};
export default VeterinarianService;
