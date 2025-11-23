"use client";
import { useAuthRedirection } from "../features/auth/hooks/useAuthRedirection";
import Logo from "../features/common/components/header/logo/Logo";
import Loader from "../features/common/ui/loader/Loader";

export default function Home() {
  useAuthRedirection();
  console.log("home");

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
