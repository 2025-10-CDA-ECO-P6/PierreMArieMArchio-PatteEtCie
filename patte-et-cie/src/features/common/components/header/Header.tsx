import Logo from "./logo/Logo";
import Navigation from "./navigation/Navigation";

interface HeaderProps {
  color?: "black" | "white";
}

const Header = ({ color = "black" }: HeaderProps) => {
  return (
    <header className="w-full px-6 p-4 bg-white shadow-md">
      <div className="flex items-center gap-8">
        <Logo color={color} />
      </div>
      <div className="mt-5 max-h-10">
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
