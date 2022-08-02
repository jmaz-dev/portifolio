//react_next
import React, { useEffect } from "react";
import Image from "next/image";
//assets
import CssImg from "../public/assets/skills/css.png";
import FBImg from "../public/assets/skills/firebase.png";
import HTMLImg from "../public/assets/skills/html.png";
import GitImg from "../public/assets/skills/github1.png";
import JSImg from "../public/assets/skills/javascript.png";
import NextImg from "../public/assets/skills/nextjs.png";
import ReactImg from "../public/assets/skills/react.png";
import TWImg from "../public/assets/skills/tailwind.png";
//aos
import Aos from "aos";
import "aos/dist/aos.css";
//i18n
import { useTranslation } from "next-i18next";

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  const { t } = useTranslation();

  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <div data-aos="fade-up">
          <p className="text-xl tracking-widest uppercase text-[#f07d12]">
            {t("home:skills")}
          </p>
          <h2 className="p-4 capitalize">{t("home:i_do")}</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            data-aos="fade-up"
            className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={HTMLImg} alt="HTML" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={CssImg} alt="CSS" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={JSImg}
                  alt="javascript"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Javascript</h3>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={ReactImg}
                  alt="React.js"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React.js</h3>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={NextImg} alt="Next.js" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Next.js</h3>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={GitImg} alt="Github" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>GitHub</h3>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={FBImg} alt="Firebase" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={TWImg} alt="Tailwind" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
