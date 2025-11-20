"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { User } from "../models/User";

export function useUserRedirect(user: User | null) {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("ici", user);

      if (user) {
        router.push("/home");
      } else {
        router.push("/login");
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [router, user]);
}
