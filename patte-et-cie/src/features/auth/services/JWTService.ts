import { LocalStorageService } from "../../common/services/LocalStorageService";


const JWT_KEY = "jwtToken";

export const JWTService = {
  setToken: (token: string) => {
    LocalStorageService.setItem<string>(JWT_KEY, token);
  },

  getToken: (): string | null => {
    return LocalStorageService.getItem<string>(JWT_KEY);
  },

  removeToken: () => {
    LocalStorageService.removeItem(JWT_KEY);
  },
};
