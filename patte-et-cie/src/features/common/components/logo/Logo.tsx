import Image from "next/image";
import logo from "@/public/logo.svg";

const Logo = () => {
  return (
    <div className="flex justify-center items-center gap-4">

      <div className="shrink-0 self-center">
        <Image src={logo} alt="logo" width={60} height={60} />
      </div>

      <div className="text-left">
        <h1 className="text-4xl font-bold leading-tight">Patte&Cie</h1>
        <p className="text-lg tracking-wide">Clinique vétérinaire</p>
      </div>
    </div>
  );
};
export default Logo;
