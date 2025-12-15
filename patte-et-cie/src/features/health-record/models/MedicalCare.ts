import { Veterinarian } from "../../common/models";
import { Vaccine } from "./Vaccine";

export interface MedicalCare {
  id: string;
  date: string;
  description: string;
  tag: string;
  healthRecordId: string;
  veterinarianId: string;
  vaccine?: Vaccine | null;

  veterinarian?: Veterinarian;
}
