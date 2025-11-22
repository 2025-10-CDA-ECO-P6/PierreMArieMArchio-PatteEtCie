import { Role } from "../features/auth/models/Role";

export const ROLE_REDIRECTION: Record<Role, string> = {
  [Role.CLIENT]: "/client/home",
  [Role.VETERINARIAN]: "/pro/home",
  [Role.SECRETARY]: "/pro/home",
};
