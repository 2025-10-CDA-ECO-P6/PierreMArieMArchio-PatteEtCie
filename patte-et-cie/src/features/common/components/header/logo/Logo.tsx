import Image from "next/image";
import logo from "@/public/logo.svg";

interface LogoProps {
  color?: "black" | "white";
}

const Logo = ({ color = "black" }: LogoProps) => {
  const colorClass = color === "white" ? "" : "brightness-0";

  return (
    <div className="flex justify-center items-center gap-4">
      <div className={`shrink-0 self-center ${colorClass}`}>
        <Image src={logo} alt="logo" width={60} height={60} />
      </div>

      <div className="text-left">
        <h1 className="text-4xl font-bold leading-none">Patte&Cie</h1>
        <p className="font-light text-lg tracking-wide leading-[0.9]">Clinique vétérinaire</p>
      </div>
    </div>
  );
};

export default Logo;
