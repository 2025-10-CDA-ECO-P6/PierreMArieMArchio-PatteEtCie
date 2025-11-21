"use client";
import Loader from "@/src/features/common/ui/loader/Loader";
import Logo from "@/src/features/common/components/header/logo/Logo";
import LoginForm from "../components/login-form/LoginForm";
import RegisterLink from "../components/register-link/RegisterLink";

import { useLogin } from "../hooks/useLogin";

const LoginScreen = () => {
  const { handleLogin, isLoading} = useLogin();

  if (isLoading ) {
    return (
      <div className="page">
        <div className="content">
          <Loader />
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="content">
        <Logo color="white" />
        <h2 className="font-light text-3xl text-center max-w-xl mt-20">
          Welcome back 👋 <br />
          <span className="font-bold">Log in</span> or create an account
        </h2>
        <div className="mt-14">
          <LoginForm login={handleLogin} />
          <RegisterLink />
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
