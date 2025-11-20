import Logo from "../logo/Logo";
import Navigation from "./navigation/Navigation";

const Header = () => {
  return (
    <header className="w-full px-6 p-4 bg-white shadow-md">
      <div className="flex items-center gap-8">
        <Logo />
      </div>
      <div className="mt-5 max-h-10">
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
