"use client";
import { createContext, ReactNode, useCallback, useContext, useState } from "react";
import OwnerService from "../services/OwnerService";
import { Owner } from "../models/Owner";
import AnimalService from "../services/AnimalsService";

interface OwnerContextType {
  owners: Owner[] | null;
  currentOwner: Owner | null;
  isLoading: boolean;
  getAllOwners: () => Promise<void>;
  getOwnerById: (id: string) => Promise<Owner>;
  loadCurrentOwner: (id: string) => Promise<void>;
}

const OwnerContext = createContext<OwnerContextType | undefined>(undefined);

export const OwnerProvider = ({ children }: { children: ReactNode }) => {
  const [owners, setOwners] = useState<Owner[] | null>(null);
  const [currentOwner, setCurrentOwner] = useState<Owner | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const getAllOwners = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await OwnerService.getAll();
      setOwners(data);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getOwnerById = useCallback(
    async (id: string): Promise<Owner> => {
      setIsLoading(true);
      try {
        const cachedOwner = owners?.find((o) => o.id === id);
        if (cachedOwner) {
          setCurrentOwner(cachedOwner);
          return cachedOwner;
        }

        const owner = await OwnerService.getById(id);
        setCurrentOwner(owner);

        setOwners((prev) => (prev ? [...prev, owner] : [owner]));

        return owner;
      } finally {
        setIsLoading(false);
      }
    },
    [owners]
  );

  const loadCurrentOwner = useCallback(
    async (id: string) => {
      setIsLoading(true);
      try {
        const owner = await getOwnerById(id);
        const animals = await AnimalService.getByOwnerId(owner.id);
        const updatedOwner = { ...owner, animals };

        setCurrentOwner(updatedOwner);
      } finally {
        setIsLoading(false);
      }
    },
    [getOwnerById]
  );

  return (
    <OwnerContext.Provider value={{ owners, currentOwner, isLoading, getAllOwners, getOwnerById, loadCurrentOwner }}>
      {children}
    </OwnerContext.Provider>
  );
};

export function useOwners() {
  const ctx = useContext(OwnerContext);
  if (!ctx) throw new Error("useOwners must be used inside OwnerProvider");
  return ctx;
}
