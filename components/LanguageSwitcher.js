import { useContext } from "react";
import { I18nContext } from "next-i18next";
import * as Bi from "react-icons/bi";
import { useRouter } from "next/router";

function LanguageSwitcher() {
  const router = useRouter();
  const {
    i18n: { language },
  } = useContext(I18nContext);

  return (
    <>
      <div className="font-medium hover:text-teal-600 duration-300">
        <label className={language === "pt" ? "hidden" : "flex items-center cursor-pointer"}>
          <Bi.BiWorld className="mr-1" />
          
          <input
            type="button"
            onClick={() =>
              language === "en" ? router.push("/pt") : router.push("/en/")
            }
            className="cursor-pointer"
            value="PT"
          />
        </label>
      </div>
      <div className="font-medium hover:text-teal-600 duration-300">
        <label className={language === "en" ? "hidden" : "flex items-center cursor-pointer"}>
          <Bi.BiWorld className="mr-1"/>
          
          <input
            type="button"
            value="EN"
            className="cursor-pointer"
            onClick={() =>
              language === "en" ? router.push("/pt") : router.push("/en/")
            }
          />
        </label>
      </div>
    </>
  );
}

export default LanguageSwitcher;
