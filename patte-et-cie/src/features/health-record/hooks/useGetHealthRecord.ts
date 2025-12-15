"use client";

import { useEffect, useRef } from "react";
import { useHealthRecord } from "../contexts/HealthRecordContext";

export const useGetHealthRecord = (animalId: string | null) => {
  const { healthRecord, loadHealthRecord, isLoading } = useHealthRecord();
  const hasLoadedRef = useRef(false);

  useEffect(() => {
    console.log("Loading health record for animalId:", animalId);
    if (!animalId || hasLoadedRef.current) {
      return;
    }

    if (healthRecord?.animalId === animalId && healthRecord?.medicalCares) {
      hasLoadedRef.current = true;
      return;
    }

    hasLoadedRef.current = true;
    loadHealthRecord(animalId);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animalId]);

  return {
    healthRecord,
    medicalCares: healthRecord?.medicalCares ?? [],
    isLoading,
  };
};
