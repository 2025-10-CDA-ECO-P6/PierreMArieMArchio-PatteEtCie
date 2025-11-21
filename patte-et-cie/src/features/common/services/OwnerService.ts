import { Owner } from "../models/Owner";
import { HttpService } from "./HttpService";

export const OwnerService = {
  getAll: async (): Promise<Owner[]> => {
    const res = await HttpService.get<{ data: Owner[] }>("/data/getAllOwnerResponse.json");
    return res.data;
  },

  getById: async (id: string): Promise<Owner> => {
    const owners = await OwnerService.getAll();
    const owner = owners.find((o) => o.id === id);
    if (!owner) throw new Error("Owner not found");
    console.log("owner service",owner);
    return owner;
  },

  findOwnerById: (owners: Owner[], id: string): Owner => {
    const owner = owners.find((o) => o.id === id);
    if (!owner) throw new Error("Owner not found");
    return owner;
  },
};

export default OwnerService;
