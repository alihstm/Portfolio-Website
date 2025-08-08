import DayMateBanner from "../assets/Material/DayMate-Banner.png";
import ShopetBanner from "../assets/Material/Shopet-Banner.png";
import XPowerBanner from "../assets/Material/XPower-Banner.png";
import AppleStoreBanner from "../assets/Material/AppleStore-Banner.png";
import TickyBanner from "../assets/Material/TickyBanner.png";
import KeepLink from "../assets/Material/KeepLinkBanner.png";

const Portfolio = ({ isDark }) => {
  const projects = [
    {
      id: 1,
      image: DayMateBanner,
      githubLink: "https://github.com/alihstm/DayMate",
      demoLink: "https://day-mate.vercel.app/",
    },
    {
      id: 2,
      image: ShopetBanner,
      githubLink: "https://github.com/alihstm/Shopet",
      demoLink: "https://shopet.vercel.app/",
    },
    {
      id: 3,
      image: AppleStoreBanner,
      githubLink: "https://github.com/alihstm/Apple-Store",
      demoLink: "https://apple-store-weld-five.vercel.app/",
    },
    {
      id: 4,
      image: XPowerBanner,
      githubLink: "https://github.com/alihstm/X-Power",
      demoLink: "https://x-power-azure.vercel.app/",
    },
    {
      id: 5,
      image: TickyBanner,
      githubLink: "https://github.com/alihstm/Ticky-Chrome-Extension",
    },
    {
      id: 6,
      image: KeepLink,
      githubLink: "https://github.com/alihstm/KeepLink",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex flex-col items-start justify-between w-full gap-15 sm:px-50 px-5 sm:pt-143 pt-182">
        <div
          className={`flex flex-col items-start justify-center sm:w-2xl w-xs pb-8 border-b-1 ${
            isDark ? "border-white" : "border-black"
          }`}
        >
          <h1 className="sm:text-6xl text-4xl text-old-standard-tt">
            Portfolio
          </h1>
        </div>

        <div className="flex flex-col items-start justify-between w-full gap-6">
          <h1 className="sm:text-lg text-sm text-rale-way">
            You Can Check The Rest Of My Works In My GitHub
          </h1>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-10 w-full pb-10">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`relative sm:h-64 h-48 group overflow-hidden border-3 ${
                  isDark ? "border-white" : "border-black"
                }`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="flex flex-row items-center justify-center absolute inset-0 bg-black/80 bg-opacity-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-1 border-1 ${
                      isDark ? "border-white" : "border-black"
                    } hover:underline underline-offset-4 ${
                      isDark ? "color-white bg-black" : "color-black bg-white"
                    } transition`}
                  >
                    View Project
                  </a>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-1 border-1 ${
                      isDark ? "border-white" : "border-black"
                    } hover:underline underline-offset-4 ${
                      isDark ? "color-white bg-black" : "color-black bg-white"
                    } transition`}
                  >
                    View Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
