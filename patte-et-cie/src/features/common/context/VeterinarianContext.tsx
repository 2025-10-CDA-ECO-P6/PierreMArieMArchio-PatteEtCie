"use client";
import { createContext, ReactNode, useCallback, useContext, useState } from "react";
import { Veterinarian } from "../models";
import VeterinarianService from "../services/VetenarianService";

interface VeterinarianContextType {
  currentVeterinarian: Veterinarian | null;
  veterinarians: Veterinarian[] | null;
  isLoading: boolean;
  getAllVeterinarians: () => Promise<void>;
  getVeterinarianById: (id: string) => Promise<void>;
}

const VeterinarianContext = createContext<VeterinarianContextType | undefined>(undefined);

export const VeterinarianProvider = ({ children }: { children: ReactNode }) => {
  const [currentVeterinarian, setCurrentVeterinarian] = useState<Veterinarian | null>(null);
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

  const getVeterinarianById = useCallback(async (id: string) => {
    setIsLoading(true);
    try {
      const vet = await VeterinarianService.getById(id);
      setCurrentVeterinarian(vet);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <VeterinarianContext.Provider
      value={{ veterinarians, currentVeterinarian, isLoading, getAllVeterinarians, getVeterinarianById }}
    >
      {children}
    </VeterinarianContext.Provider>
  );
};

export function useVeterinarian() {
  const ctx = useContext(VeterinarianContext);
  if (!ctx) throw new Error("useVeterinarian must be used inside VeterinarianProvider");
  return ctx;
}
