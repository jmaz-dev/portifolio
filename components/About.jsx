//next
import Image from "next/image";
import Link from "next/link";
//assets
import AboutIMG from "../public/assets/about.jpg";
//i18n
import { useTranslation } from "next-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#f07d12]">
            {t("home:about")}
          </p>
          <h2 className="p-4 capitalize">{t("home:who")}</h2>
          <p className="p-2 text-gray-600">&raquo; {t("home:normal")}</p>
          <p className="p-2 text-gray-600">{t("home:resume")}</p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              {t("home:check")}
            </p>
          </Link>
        </div>
        <div className="w-ful h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image className="rounded-xl" src={AboutIMG} alt="about" />
        </div>
      </div>
    </div>
  );
};

export default About;
