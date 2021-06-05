import React, { useState, useEffect } from "react";
const About = ({ aboutRef }) => {
  let [isHeight, setIsHeight] = useState();
  useEffect(() => {
    let screenHeight = window.screenY;
    setIsHeight(screenHeight);
  }, [isHeight]);
  console.log(isHeight);

  return (
    <div
      ref={aboutRef}
      className="About h-1.5screen w-full flex flex-col justify-space-between items-center lg:flex-row sm:h-screen"
    >
      <div className="w-full flex flex-col justify-center items-center md:w-10/12 lg:w-9/12 px-20">
        <h className="text-white text-2xl font-bold md:text-5xl">About Me</h>
        <p className="w-full py-5 text-gray-400 65 text-justify text-sm sm:text-base lg:w-3/4">
          <span className="text-green-300">Hello!</span> My name is Humed and I
          love creating things that live on the internet, my interest in web
          development started back in{" "}
          <span className="text-green-300">heigh school</span>, since then
          coding has become my essential part of my life a thing which begin as
          a passion has become a full fladge job.
        </p>
        <p className="w-full text-gray-400 65 text-justify text-sm sm:text-base lg:w-3/4">
          My main focus is building{" "}
          <span className="text-green-300">
            accessible, inclusive products and digital experiences
          </span>
          , for a variety of clients, as much as i could putting on my work my
          full potentials.
        </p>
      </div>
      <div className="w-64 h-64 py-10 lg:py-0">
        <div className="w-64 h-64 rounded relative border-2 border-solid border-green-300 lg:right-24 xl:right-36 lg:absolute">
          <img
            className="w-64 h-64 absolute -top-5 -left-5 rounded"
            src="/pp.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
