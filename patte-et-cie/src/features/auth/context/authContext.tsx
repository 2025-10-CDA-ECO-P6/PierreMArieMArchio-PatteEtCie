"use client";
import { createContext, ReactNode, useCallback, useContext, useState } from "react";
import { User } from "../models/User";
import { AuthService } from "../services/AuthService";
import { JWTService } from "../services/JWTService";

type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<User>;
  logout: () => void;
  authenticate: () => Promise<User>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email: string, password: string): Promise<User> => {
    setIsLoading(true);
    try {
      const userData = await AuthService.login({ email, password });

      JWTService.setToken(userData.jwt);
      console.log("before", userData);

      setUser(userData);
      return userData;
    } catch (err) {
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = useCallback(() => {
    setUser(null);
    JWTService.removeToken();
  }, []);

  const authenticate = useCallback(async (): Promise<User> => {
    setIsLoading(true);
    try {
      const token = JWTService.getToken();
      if (!token) throw new Error("No token found");
      const refreshedUser = await AuthService.authenticate(token);
      if (refreshedUser.jwt) JWTService.setToken(refreshedUser.jwt);
      setUser(refreshedUser);
      return refreshedUser;
    } catch (err) {
      setUser(null);
      JWTService.removeToken();
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout, authenticate }}>{children}</AuthContext.Provider>
  );
};

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
