import { HttpService } from "../../common/services/HttpService";
import { HealthRecord } from "../models/HealthRecord";

export const HealthRecordService = {
  getByAnimalId: async (animalId: string): Promise<HealthRecord> => {
    const res = await HttpService.get<{ data: HealthRecord[] }>("/data/healthRecords.json");

    const record = res.data.find((healthRecord) => healthRecord.animalId === animalId);
    if (!record) throw new Error("Health record not found");

    return record;
  },

  getById: async (id: string): Promise<HealthRecord> => {
    const res = await HttpService.get<{ data: HealthRecord[] }>("/data/healthRecords.json");

    const record = res.data.find((r) => r.id === id);
    if (!record) throw new Error("Health record not found");

    return record;
  },
};
