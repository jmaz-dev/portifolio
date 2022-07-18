//assets
import netflixImg from "../public/assets/projects/netflix.png";
import miniBlogImg from "../public/assets/projects/miniblog.png";
import secretWordImg from "../public/assets/projects/secretword.png";
import caniObrasImg from "../public/assets/projects/caniobras.png";
import reactGramImg from "../public/assets/projects/reactgram.png";
import todoTSImg from "../public/assets/projects/todo-ts.png";

//components
import ProjectItem from "./ProjectItem";
//i18n
import { useTranslation } from "next-i18next";
import { useState } from "react";

const Projects = () => {
  const { t } = useTranslation();
  const [hide, setHide] = useState("none");

  const handleCards = () => {
    if (hide === "none") {
      setHide("block");
    } else {
      setHide("none");
    }
  };

  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#f07d12]">
          {t("home:projects")}
        </p>
        <h2 className="p-4 capitalize"> {t("home:i_build")}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Netflix"
            backgroundImg={netflixImg}
            projectUrl="/netflix"
            tech={"React.js"}
          />
          <ProjectItem
            title="MiniBlog"
            backgroundImg={miniBlogImg}
            projectUrl="/miniblog"
            tech={"React.js"}
          />
          <ProjectItem
            title="ReactGram"
            backgroundImg={reactGramImg}
            projectUrl="/reactgram"
            tech={"React.js / Node.js"}
          />
          <ProjectItem
            title="Cani Obras"
            backgroundImg={caniObrasImg}
            projectUrl="/caniiobras"
            tech={"Next.js"}
          />
          <div style={{ display: `${hide}` }}>
            <ProjectItem
              title="Secret Word"
              backgroundImg={secretWordImg}
              projectUrl="/secretword"
              tech={"React.js"}
            />
          </div>
          <div style={{ display: `${hide}` }}>
            <ProjectItem
              title="TS ToDo"
              backgroundImg={todoTSImg}
              projectUrl="/tstodo"
              tech={"React.js"}
            />
          </div>
          <div style={{ display: `${hide}` }}></div>
        </div>
        <div className="flex justify-center">
          <button
            className="px-20 mt-10 hover:scale-110 ease-in duration-300"
            onClick={handleCards}
          >
            {hide === "none" ? (
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
