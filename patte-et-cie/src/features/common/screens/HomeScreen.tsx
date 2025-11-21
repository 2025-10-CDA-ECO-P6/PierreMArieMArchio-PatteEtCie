"use client";

import { useEffect } from "react";
import { useAuth } from "../../auth/context/authContext";
import Header from "../components/header/Header";

const HomeScreen = () => {
  const { user } = useAuth();

  useEffect(() => {
    console.log("user home screen:", user);
  }, [user]);

  return (
    <>
      <Header />
    </>
  );
};

export default HomeScreen;
