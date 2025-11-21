"use client";
import LoginForm from "@/src/features/auth/components/login-form/LoginForm";
import RegisterLink from "@/src/features/auth/components/register-link/RegisterLink";
import { useLogin } from "@/src/features/auth/hooks/useLogin";
import Logo from "@/src/features/common/components/header/logo/Logo";
import Loader from "@/src/features/common/ui/loader/Loader";

export default function Login() {
  const { handleLogin, isLoading } = useLogin();

  if (isLoading) {
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
}
