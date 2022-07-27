/* eslint-disable react-hooks/rules-of-hooks */
//react_next
import Image from "next/image";
import Link from "next/link";
//assets
import projectImg from "../public/assets/projects/miniblogbg.png";
//icons
import { RiRadioButtonFill } from "react-icons/ri";
//i18n
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { i18n } from "next-i18next";
//aos
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
    },
  };
}

const netflix = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={projectImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <div data-aos="fade-up">
            <h2 className="py-2">Miniblog</h2>
            <h3>React JS / Firebase / Context</h3>
          </div>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <div data-aos="fade-up">
            <h2 className="p-4">{i18n.t("home:over")}</h2>
            <p className="p-2">{i18n.t("home:miniblog")}</p>
          </div>
          <div data-aos="fade-up">
            <button className="px-8 py-2 mt-4 mr-8">
              <a
                href="https://github.com/JMAzer-dev/miniblog-react"
                target="_blank"
                rel="noreferrer"
              >
                {i18n.t("home:code")}
              </a>
            </button>
            <button className="px-8 py-2 mt-4 mr-8">
              <a
                href="https://miniblog-react.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                {i18n.t("home:demo")}
              </a>
            </button>
          </div>
        </div>
        <div
          data-aos="flip-right"
          className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4"
        >
          <div className="p-2">
            <p className="text-center font-bold pb-2">{i18n.t("home:tech")}</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Context
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Firebase
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                API REST
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">{i18n.t("home:back")}</p>
        </Link>
      </div>
    </div>
  );
};

export default netflix;
