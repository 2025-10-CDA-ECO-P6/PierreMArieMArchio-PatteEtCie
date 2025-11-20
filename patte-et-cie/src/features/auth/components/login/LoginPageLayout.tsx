"use client";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/authContext";
import styles from "./LoginPageLayout.module.css";
import LoginForm from "./login-form/LoginForm";
import RegisterLink from "./register-link/RegisterLink";
import { useEffect } from "react";
import Loader from "@/src/features/common/ui/loader/Loader";
import Logo from "@/src/features/common/components/logo/Logo";

const LoginPageLayout = () => {
  const { login, isLoading, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/home");
    }
  }, [user, router]);

  if (isLoading) {
    return (
      <div className={styles.page}>
        <div className={styles.content}>
          <Loader />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <Logo />
        <h2 className="font-light text-3xl text-center max-w-xl mt-10">
          Welcome back 👋 <br />
          <span className="font-bold">Log in</span> or create an account
        </h2>
        <div className="mt-14">
          <LoginForm login={login} />
          <RegisterLink />
        </div>
      </div>
    </div>
  );
};

export default LoginPageLayout;
