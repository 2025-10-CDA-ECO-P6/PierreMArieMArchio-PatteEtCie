import Image from "next/image";
import logo from "@/public/logo.svg";

const Logo = () => {
  return (
    <div className="flex justify-center  items-center gap-4">
      <div className="shrink-0 self-center">
        <Image className="brightness-0" src={logo} alt="logo" width={60} height={60} />
      </div>

      <div className="text-left">
        <h1 className="text-4xl font-bold leading-none">Patte&Cie</h1>
        <p className="font-light text-lg tracking-wide leading-[0.9]">Clinique vétérinaire</p>
      </div>
    </div>
  );
};
export default Logo;
