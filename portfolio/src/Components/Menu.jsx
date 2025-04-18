import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://github.com/alihstm", label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/ali-shabani-8b544b352",
    label: "LinkedIn",
  },
  { href: "https://t.me/Alishbni_48", label: "Telegram" },
];

const Menu = ({ isOpen, onClose, isDark }) => {
  const currentYear = new Date().getFullYear();

  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen transition-transform duration-500 ease-in-out ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      } ${isDark ? "bg-black/95" : "bg-white/95"}`}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-8 transition-transform duration-300 hover:rotate-180 hover:cursor-pointer"
        aria-label="Close menu"
      >
        <IoMdClose className="w-8 h-8" />
      </button>

      <nav className="flex flex-col items-center justify-between h-full pt-20 pb-5 px-10">
        <div className="flex flex-col items-start gap-10">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`text-7xl font-bold transition-colors duration-300 ${
                isDark ? "text-white" : "text-black"
              } hover:text-[#a10707] text-old-standard-tt`}
              onClick={onClose}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex sm:flex-row flex-col items-center sm:justify-between sm:w-full sm;gap-0 gap-4 text-center">
          <div className="flex justify-center gap-6 text-old-standard-tt">
            {socialLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                {label}
              </a>
            ))}
          </div>
          <p
            className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
          >
            © {currentYear} Flex. All rights reserved.
          </p>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
