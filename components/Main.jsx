//react
import { useContext, useEffect } from "react";
//icons
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
//typed.js
import ReactTyped from "react-typed";
//aos
import Aos from "aos";
import "aos/dist/aos.css";
//i18n
import { I18nContext } from "next-i18next";
import { useTranslation } from "next-i18next";

const Main = () => {
  const {
    i18n: { language },
  } = useContext(I18nContext);

  const { t } = useTranslation();

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <div className="sm:flex sm:text-sm justify-center uppercase text-xs text-gray-700 tracking-widest">
            <div
              className={
                language === "pt" ? "hidden" : "flex text-center justify-center"
              }
            >
              <p className="">{t("home:lets_build")}</p>
              <ReactTyped
                className="font-bold md:pl-2 pl-1 text-[#f07d12]"
                strings={[
                  "websites of excellence",
                  "responsive websites",
                  "websites to leverage business",
                ]}
                typeSpeed={100}
                backSpeed={70}
                loop
              />{" "}
            </div>
            <div
              className={
                language === "pt"
                  ? "sm:flex text-center justify-center"
                  : "hidden"
              }
            >
              <p className="">{t("home:lets_build")}</p>
              <ReactTyped
                className="font-bold md:pl-2 pl-1 text-[#f07d12]"
                strings={[
                  "sites com excelência",
                  "sites responsivos",
                  "sites para alavancar negócios",
                ]}
                typeSpeed={100}
                backSpeed={100}
                loop
              />{" "}
            </div>
            <p className="ml-1">{t("home:together")}</p>
          </div>
          <h1 className="py-4 text-gray-700" data-aos="flip-right">
            {t("home:hi")}
            <span className="text-[#f07d12]"> João</span>
          </h1>
          <h1 className="py-2 text-gray-700"> {t("home:frontend")}</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            {t("home:minindex")}
          </p>
          <div
            data-aos="zoom-in"
            className="flex items-center justify-between max-w-[330px] m-auto py-4"
          >
            <a
              href="https://www.linkedin.com/in/jmazeredo/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-500 bg-[#f07d12] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn className="text-white" />
              </div>
            </a>
            <a
              href="https://github.com/JMAzer-dev"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-500 bg-[#f07d12] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub className="text-white" />
              </div>
            </a>
            <a href="mailto:jmaz.dev@gmail.com">
              <div className="rounded-full shadow-lg shadow-gray-500 bg-[#f07d12] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail className="text-white" />
              </div>
            </a>
            <a href="tel:+55 21 96807 2492">
              <div className="rounded-full shadow-lg bg-[#f07d12] shadow-gray-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill className="text-white" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
