import { Role } from "./Role";

export interface User {
  id: string;
  username: string;
  jwt: string;
  role: Role;
}
