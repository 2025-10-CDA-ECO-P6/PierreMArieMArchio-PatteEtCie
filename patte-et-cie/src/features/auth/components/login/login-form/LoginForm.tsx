"use client";

import Card from "@/src/features/common/ui/card/Card";
import Button from "../../../../common/ui/button/Button";
import Input from "../../../../common/ui/input/Input";
import { useState } from "react";

interface LoginFormProps {
  login: (email: string, password: string) => Promise<void>;
}

const LoginForm = ({ login }: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full max-w-sm">
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email@example.com"
          required
        />

        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder=""
          required
        />

        <Button variant="secondary" type="submit" className="w-full mt-2">
          Log in
        </Button>
      </form>
    </Card>
  );
};

export default LoginForm;
