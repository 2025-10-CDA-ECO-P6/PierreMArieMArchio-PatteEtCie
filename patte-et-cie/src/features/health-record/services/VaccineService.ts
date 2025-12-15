import { HttpService } from "../../common/services/HttpService";
import { Vaccine } from "../models/Vaccine";

export const VaccineService = {
  getByMedicalCareId: async (medicalCareId: string): Promise<Vaccine | null> => {
    const res = await HttpService.get<{ data: Vaccine[] }>("/data/vaccines.json");

    return res.data.find((vaccine) => vaccine.medicalCareId === medicalCareId) || null;
  },
};
