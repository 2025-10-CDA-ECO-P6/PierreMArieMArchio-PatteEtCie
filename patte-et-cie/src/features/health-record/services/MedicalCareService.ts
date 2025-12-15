import { HttpService } from "../../common/services/HttpService";
import { MedicalCare } from "../models/MedicalCare";

export const MedicalCareService = {
  getByHealthRecordId: async (healthRecordId: string): Promise<MedicalCare[]> => {
    const res = await HttpService.get<{ data: MedicalCare[] }>("/data/medicalCare.json");
    return res.data.filter((medicalCare) => medicalCare.healthRecordId === healthRecordId);
  },
};
