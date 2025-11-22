"use client";

import { useAuth } from "../context/authContext";
import { useEffect } from "react";
import { Role } from "../models/Role";
import { useRouter } from "next/navigation";

export function useAuthGuard(requiredRole?: Role | Role[]) {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoading || !user || !requiredRole) return;

    const roles = Array.isArray(requiredRole) ? requiredRole : [requiredRole];
    if (!roles.includes(user.role)) router.replace("/unauthorized");
  }, [user, isLoading, requiredRole, router]);

  return { user, isLoading };
}
