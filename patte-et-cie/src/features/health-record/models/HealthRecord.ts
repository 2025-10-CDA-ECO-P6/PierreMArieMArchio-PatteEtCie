import { MedicalCare } from "./MedicalCare";

export interface HealthRecord {
  id: string;
  notes: string | null;
  animalId: string;
  medicalCares?: MedicalCare[];
}
