import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SocialContact from "./SocialContact";
import AnimatedBtn from "./Extra/animatedBtn";
import Resume from "../assets/Material/Resume.png";

const typingTexts = [
  "I love coding + tea",
  "I code cool websites",
  "I develop mobile apps",
];

const TYPING_SPEED = 110;
const DELETING_SPEED = 20;
const PAUSE_DURATION = 1500;

const Home = ({ isDark }) => {
  const navigate = useNavigate();
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(TYPING_SPEED);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = Resume;
    link.download = "Ali-Shabani-Resume.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContact = () => {
    navigate("/contact");
  };

  useEffect(() => {
    const currentText = typingTexts[textIndex];

    const type = () => {
      if (isDeleting) {
        setDisplayText((prev) => prev.slice(0, -1));
        setSpeed(DELETING_SPEED);
      } else {
        setDisplayText((prev) => currentText.slice(0, prev.length + 1));
        setSpeed(TYPING_SPEED);
      }
      if (!isDeleting && displayText === currentText) {
        setTimeout(() => setIsDeleting(true), PAUSE_DURATION);
      }
      if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % typingTexts.length);
      }
    };

    const timeout = setTimeout(type, speed);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  return (
    <section className="flex sm:flex-row flex-col-reverse items-center justify-between w-full h-full px-3 pt-3">
      <div className="flex sm:flex-row flex-col-reverse items-start justify-between sm:w-[40%] w-full sm:h-[60%] h-[50%] sm:pl-8 px-3">
        <SocialContact isDark={isDark} />
        <div className="flex flex-col items-start justify-between sm:w-[75%] w-full sm:h-[65%] h-[85%]">
          <header className="flex flex-col items-start justify-between h-[34%]">
            <h1 className="text-4xl text-old-standard-tt">I'm Ali Shabani</h1>
            <h2
              className={`text-3xl font-bold text-old-standard-tt ${
                isDark ? "text-white" : "text-black"
              }`}
            >
              {displayText}
              <span className="blinking-caret">|</span>
            </h2>
          </header>

          <div className="flex flex-col items-start justify-between h-[42%]">
            <p className="sm:text-lg text-base text-rale-way">
              Frontend Developer & Digital Designer, Transforming Vision Into
              Interactive Beauty
            </p>

            <nav className="flex items-center sm:gap-5 gap-2">
              <AnimatedBtn
                name="Contact Me"
                className="text-rale-way"
                onClick={handleContact}
              />
              <AnimatedBtn
                name="Download Resume"
                className="text-rale-way"
                onClick={handleDownload}
              />
            </nav>
          </div>
        </div>
      </div>

      <div
        className="sm:w-[50%] w-full sm:h-full h-[40%] grayPic-bg"
        role="img"
        aria-label="Profile Image"
      ></div>
    </section>
  );
};

export default Home;
