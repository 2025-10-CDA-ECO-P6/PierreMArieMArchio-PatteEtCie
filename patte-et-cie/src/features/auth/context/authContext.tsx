"use client";
import { createContext, ReactNode, useCallback, useContext, useState } from "react";
import { User } from "../models/User";
import loginResponse from "../../../../.mock/LoginResonse.json";

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const fakePassword = "secret123";
  const fakeUsername = "john";

  const login = useCallback(async (username: string, password: string) => {
    await new Promise((resolve) => setTimeout(resolve, 500));

    if (username !== fakeUsername || password !== fakePassword) {
      throw new Error("incorect credentials");
    }

    setUser({
      id: loginResponse.id,
      jwt: loginResponse.jwt,
      role: loginResponse.role,
      username: loginResponse.username,
    });
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
