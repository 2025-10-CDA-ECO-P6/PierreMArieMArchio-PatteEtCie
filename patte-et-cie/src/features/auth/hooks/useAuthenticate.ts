"use client";

import { useAuth } from "../context/authContext";
import { useEffect } from "react";
import { UserRole } from "../models/Role";
import { useRouter } from "next/navigation";

export function useAuthenticate(requiredRole?: UserRole | UserRole[]) {
  const { user, isLoading, authenticate } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const authenticatedUser = await authenticate();
        if (!authenticatedUser) {
          router.replace("/login");
        }
      } catch (err) {
        console.error("Authentication failed:", err);
        router.replace("/login");
      }
    };

    if (!user && !isLoading) {
      checkAuth();
    }
  }, [user, isLoading, authenticate, router]);

  useEffect(() => {
    if (!isLoading && user && requiredRole) {
      const requiredRoles = Array.isArray(requiredRole) ? requiredRole : [requiredRole];
      if (!requiredRoles.includes(user.role)) {
        router.replace("/unauthorized");
      }
    }
  }, [user, isLoading, requiredRole, router]);

  return { user, isLoading };
}
