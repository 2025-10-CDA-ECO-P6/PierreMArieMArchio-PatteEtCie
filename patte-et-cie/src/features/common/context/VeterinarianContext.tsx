"use client";
import { createContext, ReactNode, useCallback, useContext, useState } from "react";
import { Veterinarian } from "../models";
import VeterinarianService from "../services/VetenarianService";

type VeterinarianContextType = {
  veterinarians: Veterinarian[] | null;
  isLoading: boolean;
  getAllVeterinarians: () => Promise<void>;
  getVeterinarianById: (id: string) => Promise<Veterinarian>;
};

const VeterinarianContext = createContext<VeterinarianContextType | undefined>(undefined);

export const VeterinarianProvider = ({ children }: { children: ReactNode }) => {
  const [veterinarians, setVeterinarians] = useState<Veterinarian[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const getAllVeterinarians = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await VeterinarianService.getAll();
      setVeterinarians(data);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getVeterinarianById = useCallback(
    async (id: string): Promise<Veterinarian> => {
      if (!veterinarians || veterinarians.length === 0) {
        return Promise.reject(new Error("No veterinarians available"));
      }

      const vet = veterinarians.find((v) => v.id === id);
      if (!vet) {
        return Promise.reject(new Error("Veterinarian not found"));
      }

      return Promise.resolve(vet);
    },
    [veterinarians]
  );

  return (
    <VeterinarianContext.Provider value={{ veterinarians, isLoading, getAllVeterinarians, getVeterinarianById }}>
      {children}
    </VeterinarianContext.Provider>
  );
};

export function useVeterinarian() {
  const ctx = useContext(VeterinarianContext);
  if (!ctx) throw new Error("useVeterinarian must be used inside VeterinarianProvider");
  return ctx;
}
