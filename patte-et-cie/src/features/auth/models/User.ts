import { UserRole } from "./Role";

export interface User {
  id: string;
  username: string;
  jwt: string;
  role: UserRole;
}
