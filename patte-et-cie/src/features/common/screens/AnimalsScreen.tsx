"use client";

import { useEffect } from "react";
import AnimalsList from "../components/animals-list/AnimalsList";
import Header from "../components/header/Header";

import { useOwners } from "../context/OwnerContext";
import { useAuth } from "../../auth/context/authContext";

const AnimalsScreen = () => {
  const { currentOwner } = useOwners();

  usePagedInit();

  console.log("animal screen", currentOwner?.animals);

  return (
    <>
      <Header />
      <AnimalsList animals={currentOwner?.animals} />
    </>
  );
};

const usePagedInit = () => {
  const { currentOwner, loadCurrentOwner } = useOwners();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;
    if (currentOwner?.animals) return;

    loadCurrentOwner(user.id);
  }, [user, loadCurrentOwner, currentOwner?.animals]);
};

export default AnimalsScreen;
