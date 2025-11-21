"use client";

import { useState } from "react";
import { useAuth } from "../context/authContext";
import { ProfessionalRoles } from "../models/Role";
import { useRouter } from "next/navigation";

export const useLogin = () => {
  const { login } = useAuth();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (email: string, password: string): Promise<void> => {
    setIsLoading(true);
    setError(null);
    console.log("start handle login");
    try {
      const userData = await login(email, password);

      console.log("login and user", userData);
      
      const redirectPath = ProfessionalRoles.includes(userData.role) ? "/pro/home" : "/client/home";
      router.replace(redirectPath);
    } catch {
      setError("Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  return { handleLogin, isLoading, error };
};
