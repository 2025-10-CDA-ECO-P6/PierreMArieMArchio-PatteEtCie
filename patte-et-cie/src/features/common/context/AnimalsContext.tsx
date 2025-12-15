"use client";
import { createContext, ReactNode, useCallback, useContext, useState } from "react";
import { Animal } from "../models/Animal";
import AnimalService from "../services/AnimalsService";

interface AnimalContextType {
  animals: Animal[] | null;
  isLoading: boolean;
  getAllAnimals: () => Promise<void>;
  getAnimalById: (id: string) => Promise<Animal>;
  getAnimalsByOwnerId: (ownerId: string) => Promise<void>;
}

const AnimalContext = createContext<AnimalContextType | undefined>(undefined);

export const AnimalProvider = ({ children }: { children: ReactNode }) => {
  const [animals, setAnimals] = useState<Animal[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const getAllAnimals = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await AnimalService.getAll();
      setAnimals(data);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const findAnimalById = useCallback(
    async (id: string): Promise<Animal> => {
      setIsLoading(true);
      try {
        const animal = animals?.find((a) => a.Id === id) ?? (await AnimalService.getById(id));
        return animal;
      } finally {
        setIsLoading(false);
      }
    },
    [animals]
  );

  const getAnimalsByOwnerId = useCallback(async (ownerId: string): Promise<void> => {
    setIsLoading(true);
    try {
      const ownerAnimals = await AnimalService.getByOwnerId(ownerId);
      setAnimals(ownerAnimals);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <AnimalContext.Provider value={{ animals, isLoading, getAllAnimals, getAnimalById: findAnimalById, getAnimalsByOwnerId }}>
      {children}
    </AnimalContext.Provider>
  );
};

export const useAnimals = () => {
  const ctx = useContext(AnimalContext);
  if (!ctx) throw new Error("useAnimals must be used inside AnimalProvider");
  return ctx;
};
