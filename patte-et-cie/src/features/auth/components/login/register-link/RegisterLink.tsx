"use client";

import Link from "next/link";

const RegisterLink = () => {
  return (
    <p className="text-white mt-6 text-sm">
      Don&apos;t have an account?{" "}
      <Link href="/register" className="underline font-medium hover:text-gray-200 transition">
        Create an account
      </Link>
    </p>
  );
};


export default RegisterLink;
