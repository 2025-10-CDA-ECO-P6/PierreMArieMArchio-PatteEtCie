"use client";

import { useEffect } from "react";
import { useAuth } from "../../auth/context/authContext";
import { useOwners } from "../context/OwnerContext";

export const useGetOwnerWithAnimals = () => {
  const { user } = useAuth();
  const { currentOwner, loadCurrentOwner, isLoading } = useOwners();

  useEffect(() => {
    if (!user) return;
    if (currentOwner?.animals) return;

    loadCurrentOwner(user.id);
  }, [user, currentOwner, loadCurrentOwner]);

  return {
    owner: currentOwner,
    animals: currentOwner?.animals ?? [],
    isLoading,
  };
};
