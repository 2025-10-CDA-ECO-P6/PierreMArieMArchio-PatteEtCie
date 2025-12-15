"use client";

import { useEffect, useRef } from "react";
import { useAuth } from "../../auth/context/authContext";
import { useOwners } from "../context/OwnerContext";

export const useGetOwnerWithAnimals = () => {
  const { user } = useAuth();
  const { currentOwner, loadCurrentOwner, isLoading } = useOwners();
  const hasLoadedRef = useRef(false);

  useEffect(() => {
    if (hasLoadedRef.current || !user) {
      return;
    }

    if (currentOwner?.animals) {
      hasLoadedRef.current = true;
      return;
    }

    hasLoadedRef.current = true;
    loadCurrentOwner(user.id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id]);

  return {
    owner: currentOwner,
    animals: currentOwner?.animals ?? [],
    isLoading,
  };
};
