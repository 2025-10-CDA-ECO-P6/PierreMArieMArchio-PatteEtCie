"use client";

import { useAuth } from "../context/authContext";
import { useEffect } from "react";
import { Role } from "../models/Role";
import { useRouter } from "next/navigation";

export const useAuthGuard = (requiredRole?: Role | Role[]) => {
  const { user, isLoading, isHydrated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isHydrated) return;

    if (!user) {
      router.replace("/unauthorized");
      return;
    }

    if (requiredRole) {
      const roles = Array.isArray(requiredRole) ? requiredRole : [requiredRole];
      if (!roles.includes(user.role)) {
        router.replace("/unauthorized");
        return;
      }
    }
  }, [isHydrated, requiredRole, router, user]);

  return {
    user,
    isLoading: isLoading || !isHydrated,
  };
};
