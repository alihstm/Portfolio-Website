import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaGitAlt, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiSass } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const About = ({ isDark }) => {
  const workTimeline = [
    {
      id: 1,
      position: "Frontend Developer",
      workplace: "FlokaTeam",
      date: "till now",
    },
    {
      id: 2,
      position: "Frontend Developer",
      workplace: "Freelance",
      date: "till now",
    },
  ];

  const skills = [
    {
      id: 1,
      name: "JavaScript",
      icon: IoLogoJavascript,
    },
    {
      id: 2,
      name: "React",
      icon: FaReact,
    },
    {
      id: 3,
      name: "React Native",
      icon: TbBrandReactNative,
    },
    {
      id: 4,
      name: "Tailwind",
      icon: SiTailwindcss,
    },
    {
      id: 5,
      name: "Bootstrap",
      icon: FaBootstrap,
    },
    {
      id: 6,
      name: "Sass",
      icon: SiSass,
    },
    {
      id: 6,
      name: "Figma",
      icon: SiFigma,
    },
    {
      id: 7,
      name: "Git",
      icon: FaGitAlt,
    },
  ];

  const services = [
    {
      id: 1,
      title: "Develop Websites",
      description:
        "Crafting modern, responsive websites using React and cutting-edge technologies. From sleek landing pages to complex web applications, I focus on creating intuitive user interfaces with smooth animations, optimal performance, and clean code architecture. My websites are built with SEO best practices and cross-browser compatibility in mind.",
    },
    {
      id: 2,
      title: "Develop Mobile Apps",
      description:
        "Building powerful cross-platform mobile applications with React Native that feel truly native on both iOS and Android. I specialize in creating seamless user experiences with fluid animations, offline functionality, and efficient state management. My apps are optimized for performance and follow platform-specific design guidelines while maintaining a consistent brand identity.",
    },
    {
      id: 3,
      title: "Improve Websites",
      description:
        "I optimize websites by writing cleaner, more efficient front-end code. From smoother animations to better layouts, I make websites look better, feel faster, and work more smoothly across devices. My focus is on clean design, responsive UI, and performance that users actually notice."
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center w-full h-[120rem]">
      <div className="flex flex-col items-start justify-between w-full h-full gap-15 sm:px-50 px-5 sm:pt-25 pt-35 pb-10">
        <div
          className={`flex flex-col items-start justify-center sm:w-2xl w-xs pb-8 border-b-1 ${
            isDark ? "border-white" : "border-black"
          }`}
        >
          <h1 className="sm:text-6xl text-4xl text-old-standard-tt">
            About me
          </h1>
        </div>

        <div className="flex sm:flex-row flex-col items-start justify-between w-full gap-6">
          <h1 className="sm:text-4xl text-2xl text-old-standard-tt">
            about my self
          </h1>

          <p className="sm:text-lg text-base sm:w-[60%] w-full text-rale-way">
            I'm Ali, a 19-year-old freelance front-end developer with a passion
            for clean code and creative design. I build dynamic, responsive UIs
            using React, Tailwind, and modern web tools. Always excited to add
            new features and bring fresh ideas to life. Driven by curiosity, I
            never stop learning and improving my craft.
          </p>
        </div>

        <div className="flex sm:flex-row flex-col items-start justify-between w-full gap-6">
          <h1 className="sm:text-4xl text-2xl text-old-standard-tt">
            Work Timeline
          </h1>

          <div className="sm:w-[60%] w-full">
            <div className="w-full">
              <div
                className={`grid grid-cols-3 p-4 border-b-1 ${
                  isDark ? "border-white" : "border-black"
                }`}
              >
                <h2 className="text-lg font-semibold text-rale-way">
                  Position
                </h2>
                <h2 className="text-lg font-semibold text-rale-way">
                  Workplace
                </h2>
                <h2 className="text-lg font-semibold text-rale-way text-right">
                  Date
                </h2>
              </div>

              {workTimeline.map((work, index) => (
                <div
                  key={work.id}
                  className={`grid grid-cols-3 p-4 ${
                    index !== workTimeline.length
                      ? `border-b-1 ${isDark ? "border-white" : "border-black"}`
                      : ""
                  }`}
                >
                  <span className="text-base font-semibold text-rale-way">
                    {work.position}
                  </span>
                  <span className="text-base text-rale-way">
                    {work.workplace}
                  </span>
                  <span className="text-base text-rale-way text-right">
                    {work.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex sm:flex-row flex-col items-start justify-between w-full gap-6">
          <h1 className="sm:text-4xl text-2xl text-old-standard-tt">Skills</h1>

          <div className="sm:w-[60%] w-full grid sm:grid-cols-3 grid-cols-2 gap-6">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.id}
                  className={`flex flex-row items-center gap-3 transition-transform duration-300`}
                >
                  <Icon className="w-8 h-8" />
                  <span className="text-base font-bold text-rale-way">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex sm:flex-row flex-col items-start justify-between w-full gap-6">
          <h1 className="sm:text-4xl text-2xl text-old-standard-tt">
            Services
          </h1>

          <div className="sm:w-[60%] w-full flex flex-col gap-8">
            {services.map((service) => (
              <div key={service.id} className="flex flex-col gap-3 p-4">
                <h2 className="text-xl pb-2 border-b-2 text-old-standard-tt">
                  {service.title}
                </h2>
                <p className="text-base text-rale-way">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
