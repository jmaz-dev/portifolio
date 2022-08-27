/* eslint-disable react-hooks/rules-of-hooks */
//next
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
//assets
import projectImg from '../public/assets/projects/freelancesbg.png';
//icons
import { RiRadioButtonFill } from 'react-icons/ri';
//i18n
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { i18n } from 'next-i18next';
//aos
import 'aos/dist/aos.css';
import Aos from 'aos';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home'])),
    },
  };
}

const netflix = (props) => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className="w-full overflow-hidden">
      {/* background image container */}
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute max-w-screen top-0 left-0 w-screen h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          layout="fill"
          priority
          objectPosition="top"
          objectFit="cover"
          src={projectImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <div data-aos="fade-up">
            <h2 className="py-2">{i18n.t('home:freelance')}</h2>
          </div>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid gap-8 pt-8">
        {/* Resume */}
        <div>
          <div className="grid  md:grid-cols-3">
            <div data-aos="fade-up" className="md:col-span-2">
              <h2 className="p-4">{i18n.t('home:over')}</h2>
              <p className="p-2">{i18n.t('home:frelaresume')}</p>
            </div>
            {/* Tech */}
            <div
              data-aos="flip-right"
              className="shadow-xl shadow-gray-400 rounded-xl p-4 hidden md:block"
            >
              <div className="p-2">
                <p className="text-center font-bold pb-2">
                  {i18n.t('home:tech')}
                </p>
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:text-xl">
                  <p className="text-gray-600 py-2 flex items-center">
                    <RiRadioButtonFill className="pr-1" />
                    Next
                  </p>
                  <p className="text-gray-600 py-2 flex items-center">
                    <RiRadioButtonFill className="pr-1" />
                    Tailwind
                  </p>
                  <p className="text-gray-600 py-2 flex items-center">
                    <RiRadioButtonFill className="pr-1" />
                    Javascript
                  </p>
                  <p className="text-gray-600 py-2 flex items-center">
                    <RiRadioButtonFill className="pr-1" />
                    EmailJs
                  </p>
                  <p className="text-gray-600 py-2 flex items-center">
                    <RiRadioButtonFill className="pr-1" />
                    Swiper
                  </p>
                  <p className="text-gray-600 py-2 flex items-center">
                    <RiRadioButtonFill className="pr-1" />
                    Wordpress
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 ">
            <div>
              <div
                data-aos="flip-right"
                className="shadow-xl h-64 shadow-gray-400 rounded-xl  bg-canii bg-opacity-80 bg-cover"
              ></div>
              <div data-aos="fade-up">
                <button className="py-2 mt-4 hover:scale-105 active:scale-95 ease-in duration-200">
                  <a
                    href="https://caniiobras-next.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="px-8 py-2"
                  >
                    {i18n.t('home:demo')}
                  </a>
                </button>
              </div>
            </div>
            <div>
              <div
                data-aos="flip-right"
                className="shadow-xl h-64 shadow-gray-400 rounded-xl  bg-luana bg-opacity-80 bg-cover"
              ></div>
              <div data-aos="fade-up">
                <button className="py-2 mt-4 hover:scale-105 active:scale-95 ease-in duration-200">
                  <a
                    href="https://luanarogues.epizy.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="px-8 py-2"
                  >
                    {i18n.t('home:demo')}
                  </a>
                </button>
              </div>
            </div>

            <div className="">
              <div
                data-aos="flip-right"
                className="shadow-xl h-64 shadow-gray-400 rounded-xl bg-glf bg-opacity-80 bg-cover hover:opacity-100"
              ></div>
              <div data-aos="fade-up">
                <button className="py-2 mt-4 hover:scale-105 active:scale-95 ease-in duration-200">
                  <a
                    href="https://grupo-liderforte.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="px-8 py-2"
                  >
                    {i18n.t('home:demo')}
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* tech */}
        <div
          data-aos="flip-right"
          className="shadow-xl shadow-gray-400 rounded-xl p-4 block md:hidden"
        >
          <div className="p-2">
            <p className="text-center font-bold pb-2">{i18n.t('home:tech')}</p>
            <div className="grid grid-cols-2 text-xl">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Next
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                EmailJs
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Swiper
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Wordpress
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer mb-8 ml-2">
            {i18n.t('home:back')}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default netflix;
