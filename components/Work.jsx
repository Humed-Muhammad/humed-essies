import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
const Work = ({ workRef }) => {
  let childRef = useRef();
  let [scroll, setScroll] = useState(false);
  let [y, setYpos] = useState(1400);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let syncing = async () => {
        let scrolling = (await window.scrollY) >= y;
        setScroll(scrolling);
      };
      syncing();
    });
  }, [scroll]);
  let parentVa = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0,
        delayChildren: 0.6,
        staggerChildren: 0.5,
      },
    },
  };
  let child = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: "tween",
        ease: "easeIn",
      },
    },
  };

  return (
    <motion.div
      variants={parentVa}
      initial="hidden"
      animate={scroll ? "visible" : "hidden"}
      ref={workRef}
      className="h-4.5screen flex flex-col justify-baseline items-center md:h-2.5screen lg:h-2screen xl:h-1.5screen"
    >
      <h1 className="text-3xl font-bold text-white m-10">My Works</h1>
      <div className="flex flex-wrap justify-around items-center">
        <motion.div
          variants={child}
          className="flex flex-col justify-between m-3 items-center bg-white text-center w-80 h-96 text-center rounded overflow-hidden border-2 border-white border-solid"
        >
          <img
            className="w-full object-cover h-2/4"
            src="/HID-APP (1).png"
            alt=""
          />
          <h1 className="text-2xl text-gray-600 font-bold px-3">
            Covid-19 Tracker
          </h1>
          <p className="text-gray-600 px-3 pb-3">
            Build using React, axios, Semantic-Ui, Chart.js, Leaflet-map
          </p>
          <button className="mb-3 py-2 w-24 bg-gray-600 rounded hover:bg-green-400">
            <a
              target="blank"
              href="https://covid-19-hid-app.netlify.app"
              className="text-white"
            >
              Open
            </a>
          </button>
        </motion.div>
        <motion.div
          variants={child}
          className="flex flex-col justify-between m-3 items-center bg-white text-center w-80 h-96 text-center rounded overflow-hidden border-2 border-white border-solid"
        >
          <img
            className="w-full object-cover h-2/4"
            src="/Movie Search App.png"
            alt=""
          />
          <h1 className="text-2xl text-gray-600 font-bold px-3">
            Movies Search App
          </h1>
          <p className="text-gray-600 px-3 pb-3">
            React, Hooks Semantic-Ui, Api
          </p>
          <button className="mb-3 py-2 w-24 bg-gray-600 rounded hover:bg-green-400">
            <a
              target="blank"
              href="https://awsome-movie.netlify.app"
              className="text-white"
            >
              Open
            </a>
          </button>
        </motion.div>
        <motion.div
          variants={child}
          className="flex flex-col justify-between m-3 items-center bg-white text-center w-80 h-96 text-center rounded overflow-hidden border-2 border-white border-solid"
        >
          <img
            className="w-full object-cover h-2/4"
            src="/Open-Weathers.png"
            alt=""
          />
          <h1 className="text-2xl text-gray-600 font-bold px-3">
            Open-Weathers
          </h1>
          <p className="text-gray-600 px-3 pb-3">
            Built using React, leaflet-map, Semantic-Ui, SASS, axios, Chart.js,
            Framer-motion
          </p>
          <button className="mb-3 py-2 w-24 bg-gray-600 rounded hover:bg-green-400">
            <a
              target="blank"
              href="https://humed-weather.netlify.app/"
              className="text-white"
            >
              Open
            </a>
          </button>
        </motion.div>
        <motion.div
          variants={child}
          className="flex flex-col justify-between m-3 items-center bg-white text-center w-80 h-96 text-center rounded overflow-hidden border-2 border-white border-solid"
        >
          <img
            className="w-full object-cover h-2/4"
            src="/React App.png"
            alt=""
          />
          <h1 className="text-2xl text-gray-600 font-bold px-3">Chat-App</h1>
          <p className="text-gray-600 px-3 pb-3">
            Built using React, React-Hooks, socket.io, Node.js, Express.js
          </p>
          <button className="mb-3 py-2 w-24 bg-gray-600 rounded hover:bg-green-400">
            <a
              target="blank"
              href="https://hum-dev.netlify.app/"
              className="text-white"
            >
              Open
            </a>
          </button>
        </motion.div>
        <motion.div
          variants={child}
          className="flex flex-col justify-between m-3 items-center bg-white text-center w-80 h-96 text-center rounded overflow-hidden border-2 border-white border-solid"
        >
          <img className="w-full object-cover h-2/4" src="/AppKit.png" alt="" />
          <h1 className="text-2xl text-gray-600 font-bold px-3">
            AppKit Landing Page
          </h1>
          <p className="text-gray-600 px-3 pb-3">
            Built using React, SASS, Framer-motion
          </p>
          <button className="mb-3 py-2 w-24 bg-gray-600 rounded hover:bg-green-400">
            <a
              target="blank"
              href="https://appkit-landding.netlify.app/"
              className="text-white"
            >
              Open
            </a>
          </button>
        </motion.div>
        <motion.div
          variants={child}
          className="flex flex-col justify-between m-3 items-center bg-white text-center w-80 h-96 text-center rounded overflow-hidden border-2 border-white border-solid"
        >
          <img
            className="w-full object-cover h-2/4"
            src="/Humed-Portfolio.png"
            alt=""
          />
          <h1 className="text-2xl text-gray-600 font-bold px-3">
            My Old Portfolio
          </h1>
          <p className="text-gray-600 px-3 pb-3">
            Built Using Html5, CSS3, JavaScript, SASS, Jquery
          </p>
          <button className="mb-3 py-2 w-24 bg-gray-600 rounded hover:bg-green-400">
            <a
              target="blank"
              href="https://hum-portfolio.netlify.app/"
              className="text-white"
            >
              Open
            </a>
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Work;
