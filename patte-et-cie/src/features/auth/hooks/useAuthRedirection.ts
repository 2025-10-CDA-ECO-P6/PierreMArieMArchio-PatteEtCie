"use client";

import { useAuth } from "../context/authContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ROLE_REDIRECTION } from "@/src/.configs/roleRedirectConfig";

export const useAuthRedirection = () => {
  const { user, isHydrated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isHydrated) return;
    if (!user) {
      router.replace("/login");
      return;
    }

    const target = ROLE_REDIRECTION[user.role];
    router.replace(target ?? "/login");
  }, [isHydrated, user, router]);
};
