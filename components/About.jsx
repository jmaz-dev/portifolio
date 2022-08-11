//react_next
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
//assets
import AboutIMG from '../public/assets/about.jpg';
//aos
import Aos from 'aos';
import 'aos/dist/aos.css';
//i18n
import { useTranslation } from 'next-i18next';

const About = () => {
  const { t } = useTranslation();

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <div data-aos="fade-up">
            <p className="uppercase text-xl tracking-widest text-[#f07d12]">
              {t('home:about')}
            </p>
            <h2 className="p-4 capitalize">{t('home:who')}</h2>
          </div>
          <div data-aos="fade-up">
            <p className="p-2 text-gray-600">&raquo; {t('home:normal')}</p>
            <p className="p-2 text-gray-600">{t('home:resume')}</p>
            <Link href="/#projects">
              <p className="py-2 text-gray-600 underline cursor-pointer">
                {t('home:check')}
              </p>
            </Link>
          </div>
        </div>
        <div data-aos="flip-right">
          <div className="w-ful h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 duration-300 ease-in">
            <Image
              className="rounded-xl ease-in duration-300"
              src={AboutIMG}
              alt="about"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
