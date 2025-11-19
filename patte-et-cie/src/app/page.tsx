"use client";

import { useEffect } from "react";
import { useAuth } from "../features/auth/context/authContext";
import { useUserRedirect } from "../features/auth/hooks/useUserRedirect";

import LandingPageComponent from "../features/common/components/landing-page/landing-page-component";

export default function Home() {
  const { user, login } = useAuth();

  console.log("1", user);

  useUserRedirect(user);

  console.log("2", user);

  // useEffect(() => {
  //   login("john", "secret123");
  // }, [login]);

  return <LandingPageComponent />;
}
