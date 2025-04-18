import { IoLogoGithub } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const socialLinks = [
  {
    href: "https://github.com/alihstm",
    Icon: IoLogoGithub,
    ariaLabel: "GitHub Profile"
  },
  {
    href: "https://t.me/Alishbni_48",
    Icon: FaTelegram,
    ariaLabel: "Telegram Contact"
  },
  {
    href: "https://www.linkedin.com/in/ali-shabani-8b544b352",
    Icon: FaLinkedin,
    ariaLabel: "LinkedIn Profile"
  }
];

const SocialContact = ({ isDark }) => {
  return (
    <ul className="flex flex-col items-center sm:w-5 w-102 sm:h-[65%] h-full sm:px-0 gap-4 sm:rotate-0 rotate-90">
      {socialLinks.map(({ href, Icon, ariaLabel }) => (
        <li key={href} className="transition-transform duration-100 ease-in-out hover:scale-110 sm:rotate-0 -rotate-90">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabel}
          >
            <Icon className="w-6 h-6" />
          </a>
        </li>
      ))}
      <div className={`w-0.5 h-35 ${isDark ? 'bg-white' : 'bg-black'}`}></div>
      <p className="text-sm font-semibold w-32 -rotate-90">
        Contact Me
      </p>
    </ul>
  );
};

export default SocialContact;
