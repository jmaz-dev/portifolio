/* eslint-disable react-hooks/rules-of-hooks */
//next
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
//assets
import projectImg from '../public/assets/projects/freelancesbg.png';
import caniImg from '../public/assets/frelabgcards/canicard.png';
import caniDesk from '../public/assets/frelabgcards/canidesk.png';
import luanaDesk from '../public/assets/frelabgcards/luanadesk.png';
import glfDesk from '../public/assets/frelabgcards/glfdesk.png';
import luanaImg from '../public/assets/frelabgcards/luanacard2.png';
import glfImg from '../public/assets/frelabgcards/glfcard.png';
//icons
import { RiRadioButtonFill } from 'react-icons/ri';
import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai';
//i18n
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { i18n } from 'next-i18next';
//aos
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home'])),
    },
  };
}

const freelance = (props) => {
  const [project, setProject] = useState('');

  const [open, setOpen] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div>
      <div
        className={
          project !== ''
            ? 'fixed flex items-center justify-center top-0 left-0 bottom-0 right-0 w-full h-full bg-white/40 z-[200] bg-scroll'
            : 'hidden'
        }
        onClick={() => setProject('')}
      >
        <div className="fixed top-0 lg:top-20 right-0 text-4xl cursor-pointer z-[200]">
          <AiOutlineClose onClick={() => setProject('')} />
        </div>
        {/* cani */}
        <div
          className={
            project === 'project1'
              ? 'lg:w-[80%] grid lg:grid-cols-2 xl:grid-cols-3 gap-6 bg-[#ecf0f3] rounded-xl shadow-md p-8 mx-auto transition '
              : 'hidden'
          }
        >
          <Swiper
            style={{
              '--swiper-pagination-color': '#da7b23',
            }}
            pagination={true}
            loop={true}
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            className="mySwiper xl:col-span-2 col"
          >
            <SwiperSlide>
              <Image src={caniImg} alt="canidevices"></Image>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={caniDesk} alt="canidesktop"></Image>
            </SwiperSlide>
          </Swiper>
          <div className="rounded-xl bg-stone-50 flex flex-col p-6 md:p-8 lg:m-auto shadow-md">
            <h3 className="text-3xl mb-6">Canii Obras</h3>
            <hr />
            <p className="mt-6 font-semibold md:text-xl">
              {i18n.t('home:client')}{' '}
              <span className="font-normal md:text-lg">Canii Obras</span>
            </p>
            <p className="mt-2 font-semibold md:text-xl">
              {i18n.t('home:category')}{' '}
              <span className="font-normal md:text-lg">Website</span>
            </p>
            <p className="mt-2 font-semibold md:text-xl">
              {i18n.t('home:technology')}{' '}
              <span className="font-normal md:text-lg">Next.js</span>
            </p>
            <p className="mt-2 font-semibold md:text-xl">
              {i18n.t('home:project-date')}{' '}
              <span className="font-normal md:text-lg">2022-05-10</span>
            </p>
            <div className="flex items-center mt-2 font-semibold md:text-xl">
              <p className="mr-2">{i18n.t('home:project-url')}</p>
              <Link href="https://caniiobras-next.vercel.app/">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="font-normal duration-200 ease-in text-lg text-[#da7b23] hover:text-[#f1ad6e] p-2"
                >
                  Canii Obras
                </a>
              </Link>
            </div>
          </div>
        </div>
        {/* luana */}
        <div
          className={
            project === 'project2'
              ? 'lg:w-[80%] grid lg:grid-cols-2 xl:grid-cols-3 gap-6 bg-[#ecf0f3] rounded-xl shadow-md p-8 mx-auto transition '
              : 'hidden'
          }
        >
          <Swiper
            style={{
              '--swiper-pagination-color': '#da7b23',
            }}
            pagination={true}
            loop={true}
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            className="mySwiper xl:col-span-2 col"
          >
            <SwiperSlide>
              <Image src={luanaImg} alt="luanadevices"></Image>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={luanaDesk} alt="luanadesktop"></Image>
            </SwiperSlide>
          </Swiper>
          <div className="rounded-xl bg-stone-50 flex flex-col p-6 md:p-8 lg:m-auto shadow-md">
            <h3 className="text-3xl mb-6">Luana Rogues</h3>
            <hr />
            <p className="mt-6 font-semibold md:text-xl">
              {i18n.t('home:client')}{' '}
              <span className="font-normal md:text-lg">Luana Rogues</span>
            </p>
            <p className="mt-2 font-semibold md:text-xl">
              {i18n.t('home:category')}{' '}
              <span className="font-normal md:text-lg">Website</span>
            </p>
            <p className="mt-2 font-semibold md:text-xl">
              {i18n.t('home:technology')}{' '}
              <span className="font-normal md:text-lg">Wordpress</span>
            </p>
            <p className="mt-2 font-semibold md:text-xl">
              {i18n.t('home:project-date')}{' '}
              <span className="font-normal md:text-lg">2022-07-20</span>
            </p>
            <div className="flex items-center mt-2 font-semibold md:text-xl">
              <p className="mr-2">{i18n.t('home:project-url')}</p>
              <Link href="https://luanarogues.epizy.com/">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="font-normal duration-200 ease-in text-lg text-[#da7b23] hover:text-[#f1ad6e] p-2"
                >
                  Luana Rogues
                </a>
              </Link>
            </div>
          </div>
        </div>
        {/* glf */}
        <div
          className={
            project === 'project3'
              ? 'lg:w-[80%] grid lg:grid-cols-2 xl:grid-cols-3 gap-6 bg-[#ecf0f3] rounded-xl shadow-md p-8 mx-auto transition '
              : 'hidden'
          }
        >
          <Swiper
            style={{
              '--swiper-pagination-color': '#da7b23',
            }}
            pagination={true}
            loop={true}
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            className="mySwiper xl:col-span-2 col"
          >
            <SwiperSlide>
              <Image src={glfImg} alt="glfdevices"></Image>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={glfDesk} alt="glfdesktop"></Image>
            </SwiperSlide>
          </Swiper>
          <div className="rounded-xl bg-stone-50 flex flex-col p-6 md:p-8 lg:m-auto shadow-md">
            <h3 className="text-3xl mb-6">Grupo Liderforte</h3>
            <hr />
            <p className="mt-6 font-semibold md:text-xl">
              {i18n.t('home:client')}{' '}
              <span className="font-normal md:text-lg">Grupo Liderforte</span>
            </p>
            <p className="mt-2 font-semibold md:text-xl">
              {i18n.t('home:category')}{' '}
              <span className="font-normal md:text-lg">Website</span>
            </p>
            <p className="mt-2 font-semibold md:text-xl">
              {i18n.t('home:technology')}{' '}
              <span className="font-normal md:text-lg">Next.js</span>
            </p>
            <p className="mt-2 font-semibold md:text-xl">
              {i18n.t('home:project-date')}{' '}
              <span className="font-normal md:text-lg">2022-08-10</span>
            </p>
            <div className="flex items-center mt-2 font-semibold md:text-xl">
              <p className="mr-2">{i18n.t('home:project-url')}</p>
              <Link href="https://grupo-liderforte.vercel.app/">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="font-normal duration-200 ease-in text-lg text-[#da7b23] hover:text-[#f1ad6e] p-2"
                >
                  Grupo Liderforte
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
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
                data-aos="zoom-in"
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {/* cani */}
              <div
                data-aos="zoom-in"
                className="h-64 rounded-xl  bg-canii bg-opacity-80 bg-cover p-2"
                onClick={() => setProject('project1')}
              >
                <div className="lg:opacity-0 hover:opacity-100 ease-in  motion-reduce:opacity-100 duration-300 flex flex-col items-center rounded-xl justify-center text-2xl w-full h-full bg-white/40">
                  <h3>Canii Obras</h3>
                  <i className="hover:text-slate-600 cursor-pointer">
                    <AiOutlinePlus size={25} />
                  </i>
                </div>
              </div>

              {/* luana */}
              <div
                data-aos="zoom-in"
                className="shadow-slg h-64 shadow-gray-400 rounded-xl  bg-luana bg-opacity-80 bg-cover p-2"
                onClick={() => setProject('project2')}
              >
                <div className="motion-reduce:opacity-100 lg:opacity-0 hover:opacity-100 target:opacity-100 ease-in duration-300 flex flex-col items-center rounded-xl justify-center text-2xl w-full h-full bg-white/40">
                  <h3>Luana Rogues</h3>
                  <i className="hover:text-slate-600 cursor-pointer">
                    <AiOutlinePlus size={25} />
                  </i>
                </div>
              </div>
              {/* glf */}
              <div
                data-aos="zoom-in"
                className="h-64 rounded-xl bg-glf bg-opacity-80 bg-cover hover:opacity-100"
                onClick={() => setProject('project3')}
              >
                <div className="motion-reduce:opacity-100 lg:opacity-0  hover:opacity-100 ease-in duration-300 flex flex-col items-center rounded-xl justify-center text-2xl w-full h-full bg-white/40">
                  <h3>Grupo Liderforte</h3>
                  <i className="hover:text-slate-600 cursor-pointer">
                    <AiOutlinePlus size={25} />
                  </i>
                </div>
              </div>
            </div>
          </div>
          {/* tech */}
          <div
            data-aos="zoom-in"
            className="shadow-xl shadow-gray-400 rounded-xl p-4 block md:hidden"
          >
            <div className="p-2">
              <p className="text-center font-bold pb-2">
                {i18n.t('home:tech')}
              </p>
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
    </div>
  );
};

export default freelance;
