import React from "react";
import netflixImg from "../public/assets/projects/netflix.jpg";
import miniBlogImg from "../public/assets/projects/miniblog.png";
import secretWordImg from "../public/assets/projects/secretword.png";
import caniObrasImg from "../public/assets/projects/caniobras.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div  id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#f07d12]">
          Projects
        </p>
        <h2 className="py-4">What I've Build</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Netflix"
            backgroundImg={netflixImg}
            projectUrl="/netflix"
          />
          <ProjectItem
            title="MiniBlog"
            backgroundImg={miniBlogImg}
            projectUrl="/miniblog"
          />
          <ProjectItem
            title="Secret Word"
            backgroundImg={secretWordImg}
            projectUrl="/secretword"
          />
          <ProjectItem
            title="Cani Obras"
            backgroundImg={caniObrasImg}
            projectUrl="/caniiobras"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
