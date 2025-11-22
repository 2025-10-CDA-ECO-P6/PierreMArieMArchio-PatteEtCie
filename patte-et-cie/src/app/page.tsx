"use client";
import { useAuthenticate } from "../features/auth/hooks/useAuthenticate";
import Logo from "../features/common/components/header/logo/Logo";
import Loader from "../features/common/ui/loader/Loader";

export default function Home() {
  useAuthenticate();

  return (
    <div className="page">
      <div className="content">
        <Logo color="white" />

        <h2 className="secondary-text font-light text-3xl text-center max-w-xl mt-10">
          Helping you to keep <span className="font-bold">your bestie</span> stay healthy!
        </h2>

        <div className="mt-14">
          <Loader />
        </div>
      </div>
    </div>
  );
}
