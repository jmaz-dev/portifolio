//react
import { useEffect, useState } from "react";
//assets
import netflixImg from "../public/assets/projects/netflix.png";
import miniBlogImg from "../public/assets/projects/miniblog.png";
import secretWordImg from "../public/assets/projects/secretword.png";
import frellaImg from "../public/assets/projects/freelances.png";
import reactGramImg from "../public/assets/projects/reactgram.png";
import azClothesImg from "../public/assets/projects/azclothes.png";
//aos
import Aos from "aos";
import "aos/dist/aos.css";
//components
import ProjectItem from "./ProjectItem";
//i18n
import { useTranslation } from "next-i18next";

const Projects = () => {
  const { t } = useTranslation();
  const [hide, setHide] = useState(true);

  const handleCards = () => {
    setHide(!hide);
  };
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <div data-aos="fade-up">
          <p className="text-xl tracking-widest uppercase text-[#f07d12]">
            {t("home:projects")}
          </p>
          <h2 className="p-4 capitalize"> {t("home:i_build")}</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div data-aos="zoom-in">
            <ProjectItem
              title="Az Clothes"
              backgroundImg={azClothesImg}
              projectUrl="/azclothes"
              tech={"Next.js"}
            />
          </div>
          <div data-aos="zoom-in">
            <ProjectItem
              title="ReactGram"
              backgroundImg={reactGramImg}
              projectUrl="/reactgram"
              tech={"React.js / Node.js"}
            />
          </div>
          <div data-aos="zoom-in">
            <ProjectItem
              title="Netflix"
              backgroundImg={netflixImg}
              projectUrl="/netflix"
              tech={"React.js"}
            />
          </div>
          <div data-aos="zoom-in">
            <ProjectItem
              title="MiniBlog"
              backgroundImg={miniBlogImg}
              projectUrl="/miniblog"
              tech={"React.js"}
            />
          </div>

          <div
            className={hide ? "hidden" : "block duration-200"}
            data-aos="zoom-in"
          >
            <div>
              <ProjectItem
                title="Secret Word"
                backgroundImg={secretWordImg}
                projectUrl="/secretword"
                tech={"React.js"}
              />
            </div>
          </div>
          <div
            className={hide ? "hidden" : "block duration-200"}
            data-aos="zoom-in"
          >
            <div data-aos="zoom-in">
              <ProjectItem
                title="Freelances"
                backgroundImg={frellaImg}
                projectUrl="/freelance"
                tech={""}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="px-16 py-2 mt-10 hover:scale-110 active:scale-90 ease-in duration-200"
            onClick={handleCards}
          >
            {hide ? (
              <div>{t("home:seemore")}</div>
            ) : (
              <div>{t("home:less")}</div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
