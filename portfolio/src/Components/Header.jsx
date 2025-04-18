import { GiHamburgerMenu } from "react-icons/gi";
import { CgDarkMode } from "react-icons/cg";
import { useState } from "react";
import Menu from "./Menu";

const Header = ({ toggleTheme, isDark }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between fixed top-0 left-0 right-0 z-10">
      <div className="text-2xl sm:text-3xl font-bold pl-4 sm:pl-8 pt-5 text-old-standard-tt">
        Flex
      </div>

      <div
        className={`flex flex-row items-end justify-start w-28 sm:w-36 h-16 gap-6 sm:gap-10 pb-4 pl-2 sm:pl-4 ${
          isDark ? "bg-black" : "bg-white"
        }`}
      >
        <button
          onClick={toggleTheme}
          className="transition duration-100 hover:cursor-pointer"
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          <CgDarkMode className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={() => setIsMenuOpen(true)}
          className="transition duration-100 hover:cursor-pointer"
          aria-label="Open menu"
        >
          <GiHamburgerMenu className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      <Menu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        isDark={isDark}
      />
    </header>
  );
};

export default Header;
