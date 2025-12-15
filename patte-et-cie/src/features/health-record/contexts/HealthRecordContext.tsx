"use client";

import { ReactNode, useState, useCallback, useContext, createContext } from "react";
import { HealthRecord } from "../models/HealthRecord";
import { HealthRecordService } from "../services/HealthRecordService";
import { MedicalCareService } from "../services/MedicalCareService";
import { VaccineService } from "../services/VaccineService";

interface HealthRecordContextType {
  healthRecord: HealthRecord | null;
  isLoading: boolean;
  loadHealthRecord: (animalId: string) => Promise<void>;
}

const HealthRecordContext = createContext<HealthRecordContextType | undefined>(undefined);

export const HealthRecordProvider = ({ children }: { children: ReactNode }) => {
  const [healthRecord, setHealthRecord] = useState<HealthRecord | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const loadHealthRecord = useCallback(async (animalId: string) => {
    if (!animalId) return;

    setIsLoading(true);
    try {
      const baseRecord = await HealthRecordService.getByAnimalId(animalId);

      const medicalCares = await MedicalCareService.getByHealthRecordId(baseRecord.id);

      const caresWithVaccines = await Promise.all(
        medicalCares.map(async (medicalCare) => {
          const vaccine = await VaccineService.getByMedicalCareId(medicalCare.id);
          return { ...medicalCare, vaccine };
        })
      );

      setHealthRecord({ ...baseRecord, medicalCares: caresWithVaccines });
    } catch (e) {
      console.error("Failed to load health record :", e);
      setHealthRecord(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <HealthRecordContext.Provider
      value={{
        healthRecord,
        isLoading,
        loadHealthRecord,
      }}
    >
      {children}
    </HealthRecordContext.Provider>
  );
};

export function useHealthRecord() {
  const ctx = useContext(HealthRecordContext);
  if (!ctx) throw new Error("useHealthRecord must be used inside HealthRecordProvider");
  return ctx;
}
