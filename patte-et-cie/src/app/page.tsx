"use client";
import { useAuth } from "../features/auth/context/authContext";
import { useUserRedirect } from "../features/auth/hooks/useUserRedirect";

import LandingPageLayout from "../features/common/components/landing-page/LandingPageLayout";

export default function Home() {
  const { user } = useAuth();
  useUserRedirect(user);

  return <LandingPageLayout />;
}
