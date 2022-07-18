//react_next
import React from "react";
import Link from "next/link";
import Image from "next/image";
//i18n
import { useTranslation } from "next-i18next";

const ProjectItem = ({ title, backgroundImg, projectUrl, tech }) => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#da7b23] to-[#f1b073] mx-auto">
        <Image
          className="rounded-xl group-hover:opacity-10 "
          src={backgroundImg}
          alt={title}
        />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className="text-2xl text-white tracking-wider text-center">
            {title}
          </h3>
          <p className="pb-4 pt-2 text-white text-center">{tech}</p>
          <Link href={projectUrl}>
            <p className="text-center p-4 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
              {t("home:more")}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
