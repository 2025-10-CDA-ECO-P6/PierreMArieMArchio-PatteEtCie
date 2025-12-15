import { Animal } from "./Animal";

export interface Owner {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  adresse: string;
  tel: number;
  animals?: Animal[];
}
