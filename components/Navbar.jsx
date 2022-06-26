import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import * as Ai from "react-icons/ai";
import * as Fa from "react-icons/fa";
import * as Bs from "react-icons/bs";
import { useRouter } from "next/router";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();
  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    if (
      router.asPath === "/netflix" ||
      router.asPath === "/caniiobras" ||
      router.asPath === "/miniblog" ||
      router.asPath === "/secretword"
    ) {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [router]);

  useEffect(() => {
    const handleShaddow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShaddow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image
            src="/../public/assets/logosm.png"
            alt="/"
            width="150"
            height="150"
          />
        </Link>
        <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
          <Link href="/#home">
            <li className="ml-10 text-sm uppercase hover:border-b">home</li>
          </Link>{" "}
          <Link href="/#about">
            <li className="ml-10 text-sm uppercase hover:border-b">About</li>
          </Link>{" "}
          <Link href="/#skills">
            <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
          </Link>{" "}
          <Link href="/#projects">
            <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
          </Link>{" "}
          <Link href="/#contact">
            <li className="ml-10 text-sm uppercase hover:border-b">Contact</li>
          </Link>
        </ul>
        <div
          style={{ color: `${linkColor}` }}
          onClick={handleNav}
          className="md:hidden"
        >
          <Ai.AiOutlineMenu size={25} />
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? ` fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500`
              : "fixed left-[-100%] p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full justify-between items-center">
              <Image
                src="/../public/assets/logosm.png"
                alt="/"
                width="100"
                height="100"
              />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <Ai.AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-0">
              <p className="w-[85%] md:w-[90px] py-4">
                Let's build some legendary together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/#home">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>{" "}
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>{" "}
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>{" "}
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>{" "}
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#f07d12]">
                Let's Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/jmazeredo/"
                  target="_blank"
                >
                  <div className="rounded-full shadow-lg shadow-grat-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <Fa.FaLinkedinIn className="text-[#f07d12]" />
                  </div>
                </a>
                <a href="https://github.com/JMAzer-dev" target="_blank">
                  <div className="rounded-full shadow-lg shadow-grat-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <Fa.FaGithub className="text-[#f07d12]" />
                  </div>
                </a>
                <a href="mailto:jmaz.dev@gmail.com">
                  <div className="rounded-full shadow-lg shadow-grat-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <Ai.AiOutlineMail className="text-[#f07d12]" />
                  </div>
                </a>
                <a href="tel:+55 21 96807 2492">
                  <div className="rounded-full shadow-lg shadow-grat-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <Bs.BsFillPersonLinesFill className="text-[#f07d12]" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
