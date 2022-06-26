import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import ReactTyped from "react-typed";
/*
<Typed
                className="md:text-5xl sm:text-4xl text-3xl font-bold md:pl-4 pl-2 text-[#f07d12]"
                strings={[
                  "websites of excellence", 
                  "responsive websites", 
                  "websites to leverage business"
                ]}
                typeSpeed={120}
                backSpeed={140}
                loop
              />{" "}
*/

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-700">
            Lets build<ReactTyped
                className="font-bold md:pl-2 pl-1 text-[#f07d12]"
                strings={[
                  "websites of excellence", 
                  "responsive websites", 
                  "websites to leverage business"
                ]}
                typeSpeed={180}
                backSpeed={160}
                loop
              />{" "}together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, i'm <span className="text-[#f07d12]">João</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Front-End Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I'm a front-end web developer specializing in building (and
            occasionally designing) exceptional digital experiences. Currently,
            I'm focused on bulding responsive fron-end web applications while
            learning back-end technologies
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a href="https://www.linkedin.com/in/jmazeredo/" target="_blank">
              <div className="rounded-full shadow-lg shadow-gray-500 bg-[#f07d12] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn className="text-white"/>
              </div>
            </a>
            <a href="https://github.com/JMAzer-dev" target="_blank">
              <div className="rounded-full shadow-lg shadow-gray-500 bg-[#f07d12] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub className="text-white"/>
              </div>
            </a>
            <a href="mailto:jmaz.dev@gmail.com">
              <div className="rounded-full shadow-lg shadow-gray-500 bg-[#f07d12] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail className="text-white"/>
              </div>
            </a>
            <a href="tel:+55 21 96807 2492">
              <div className="rounded-full shadow-lg bg-[#f07d12] shadow-gray-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill className="text-white"/>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
