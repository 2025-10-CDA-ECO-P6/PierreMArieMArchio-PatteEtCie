"use client";
import { createContext, ReactNode, useCallback, useContext, useState } from "react";
import { User } from "../models/User";
import { AuthService } from "../services/AuthService";
import { JWTService } from "../services/JWTService";

type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const userData = await AuthService.login({ email, password });
      JWTService.setToken(userData.jwt);

      console.log("before", userData);
      setUser(userData);
    } catch (err) {
      throw err;
    } finally {
      setIsLoading(false);
      console.log("finally user (stale):", user);
    }
  };

  const logout = useCallback(() => {
    setUser(null);
    JWTService.removeToken();
  }, []);

  return <AuthContext.Provider value={{ user, isLoading, login, logout }}>{children}</AuthContext.Provider>;
};

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
