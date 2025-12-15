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
      if (!id) {
        throw new Error("L'ID du propriétaire est requis");
      }
      setIsLoading(true);
      try {

        let cachedOwner: Owner | undefined;
        setOwners((prev) => {
          cachedOwner = prev?.find((o) => o.id === id);
          return prev;
        });

        if (cachedOwner) {
          setCurrentOwner(cachedOwner);
          return cachedOwner;
        }

        const owner = await OwnerService.getById(id);
        setCurrentOwner(owner);
        setOwners((prev) => {
          const exists = prev?.some((o) => o.id === id);
          return exists ? prev : prev ? [...prev, owner] : [owner];
        });
        return owner;
      } catch (error) {
        console.error(`Erreur lors du chargement du propriétaire ${id}:`, error);
        throw error;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const loadCurrentOwner = useCallback(
    async (id: string) => {
      if (!id) return;
      setIsLoading(true);
      try {
        let cachedOwner: Owner | undefined;
        setOwners((prev) => {
          cachedOwner = prev?.find((o) => o.id === id);
          return prev;
        });

        if (cachedOwner?.animals) {
          setCurrentOwner(cachedOwner);
          return;
        }

        const owner = cachedOwner || (await OwnerService.getById(id));
        const animals = await AnimalService.getByOwnerId(owner.id);
        const updatedOwner = { ...owner, animals };

        setCurrentOwner(updatedOwner);
        setOwners((prev) => {
          const exists = prev?.some((o) => o.id === id);
          return exists ? prev : prev ? [...prev, updatedOwner] : [updatedOwner];
        });
      } catch (error) {
        console.error("Error :", error);
        setCurrentOwner(null);
      } finally {
        setIsLoading(false);
      }
    },
    [] 
  );

  return (
    <OwnerContext.Provider
      value={{
        owners,
        currentOwner,
        isLoading,
        getAllOwners,
        getOwnerById,
        loadCurrentOwner,
      }}
    >
      {children}
    </OwnerContext.Provider>
  );
};



export function useOwners() {
  const ctx = useContext(OwnerContext);
  if (!ctx) throw new Error("useOwners must be used inside OwnerProvider");
  return ctx;
}
