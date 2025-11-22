"use client";

import { useAuth } from "../context/authContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ROLE_REDIRECTION } from "@/src/.configs/roleRedirectConfig";

export function useAuthenticate() {
  const { user, isLoading, authenticate } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoading || user) return;

    const checkAuth = async () => {
      try {
        const authenticatedUser = await authenticate();
        if (!authenticatedUser) {
          router.replace("/login");
          return;
        }

        const redirectTo = ROLE_REDIRECTION[authenticatedUser.role];
        if (redirectTo) {
          router.replace(redirectTo);
          return;
        }

        router.replace("/login");
      } catch {
        router.replace("/login");
      }
    };

    checkAuth();
  }, [user, isLoading, authenticate, router]);

  return { user, isLoading };
}
