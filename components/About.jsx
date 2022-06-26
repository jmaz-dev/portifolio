import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#f07d12]">About</p>
          <h2 className="p-4">Who I Am</h2>
          <p className="p-2 text-gray-600">// I am not your normal developer</p>
          <p className="p-2 text-gray-600">
            My name is João Marcos A. Azeredo, I was born in 1993 in the city of
            Rio de Janeiro - RJ. I have always been very connected to
            technology, after all, I was born in the decade when the population
            began to have access to computers and the internet. I got to know
            the technology area, more precisely, Web Development, in 2014 when I
            started my BS in Systems Analysis. I worked in other areas and it
            wasn't until 2022 that I got back to working with HTML & CSS to make
            some minor edits on a small business website I was operating. What I
            thought would be a few minor edits turned into love for programming
          </p>
          <Link href="/#projects">
          <p className="py-2 text-gray-600 underline cursor-pointer">Check out some of my latest projects</p>
          </Link>
        </div>
        <div className="w-ful h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <img className="rounded-xl" src="/../assets/about.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
