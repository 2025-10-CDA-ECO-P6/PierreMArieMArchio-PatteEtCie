import { HttpService } from "../../common/services/HttpService";
import { User } from "../models/User";
import { LoginRequest } from "../types";

const fakeEmail = "john@john";
const fakePassword = "secret123";

export const AuthService = {
  login: async (payload: LoginRequest): Promise<User> => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    if (payload.email !== fakeEmail || payload.password !== fakePassword) {
      return Promise.reject(new Error("Incorrect credentials"));
    }

    const userData = await HttpService.get<User>("data/loginResonse.json");
    return userData;
  },
};
