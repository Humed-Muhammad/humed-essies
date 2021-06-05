import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Skills = ({ skillRef, fadeIn }) => {
  let parentVa = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0,
        delayChildren: 0.5,
        staggerChildren: 0.3,
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
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      variants={parentVa}
      initial="hidden"
      animate="visible"
      ref={skillRef}
      className="h-2.5screen w-full flex flex-col justify-baseline items-center bg-gray-100 lg:h-1.1screen lg:justify-around"
    >
      <h1 className="font-bold text-3xl text-gray-600 mt-5">My Skills</h1>
      <div className="h-11/12 flex flex-col justify-center items-center px-20 w-full lg:flex-row">
        <div className="flex flex-col justify-around items-center h-4/6 w-96">
          <h1 className="text-2xl text-gray-600 font- mt-5">Back-End</h1>
          <motion.p
            variants={child}
            className="text-base text-gray-600 py-2 mt-3 text-center w-8/12  transition-all duration-300 easeInOuth-10 cursor-pointer bg-white shadow-lg hover:bg-gray-700 hover:text-white"
          >
            Node.js
          </motion.p>
          <motion.p
            variants={child}
            className="text-base text-gray-600 py-2 mt-3 text-center w-8/12  transition-all duration-300 easeInOuth-10 cursor-pointer bg-white shadow-lg hover:bg-gray-700 hover:text-white"
          >
            Next.js
          </motion.p>
          <motion.p
            variants={child}
            className="text-base text-gray-600 py-2 mt-3 text-center w-8/12  transition-all duration-300 easeInOuth-10 cursor-pointer bg-white shadow-lg hover:bg-gray-700 hover:text-white"
          >
            Express.js
          </motion.p>
          <motion.p
            variants={child}
            className="text-base text-gray-600 py-2 mt-3 text-center w-8/12  transition-all duration-300 easeInOuth-10 cursor-pointer bg-white shadow-lg hover:bg-gray-700 hover:text-white"
          >
            Larval
          </motion.p>
          <motion.p
            variants={child}
            className="text-base text-gray-600 py-2 mt-3 text-center w-8/12  transition-all duration-300 easeInOuth-10 cursor-pointer bg-white shadow-lg hover:bg-gray-700 hover:text-white"
          >
            Python
          </motion.p>
        </div>
        <div className="flex flex-col justify-around items-center h-5/6 w-96">
          <h1 className="text-2xl text-blue-400 font-bold mt-5">Front-End</h1>
          <motion.p
            variants={child}
            className="text-base text-gray-600 mt-3 py-2 text-center w-8/12  transition-all duration-300 easeInOuth-10 cursor-pointer bg-white shadow-lg hover:bg-blue-400 hover:text-white"
          >
            Html5
          </motion.p>
          <motion.p
            variants={child}
            className="text-base text-gray-600 mt-3 py-2 text-center w-8/12  transition-all duration-300 easeInOuth-10 cursor-pointer bg-white shadow-lg hover:bg-blue-400 hover:text-white"
          >
            CSS3
          </motion.p>
          <motion.p
            variants={child}
            className="text-base text-gray-600 mt-3 py-2 text-center w-8/12  transition-all duration-300 easeInOuth-10 cursor-pointer bg-white shadow-lg hover:bg-blue-400 hover:text-white"
          >
            SASS
          </motion.p>
          <motion.p
            variants={child}
            className="text-base text-gray-600 mt-3 py-2 text-center w-8/12  transition-all duration-300 easeInOuth-10 cursor-pointer bg-white shadow-lg hover:bg-blue-400 hover:text-white"
          >
            JavaScript
          </motion.p>
          <motion.p
            variants={child}
            className="text-base text-gray-600 mt-3 py-2 text-center w-8/12  transition-all duration-300 easeInOuth-10 cursor-pointer bg-white shadow-lg hover:bg-blue-400 hover:text-white"
          >
            React
          </motion.p>
          <motion.p
            variants={child}
            className="text-base text-gray-600 mt-3 py-2 text-center w-8/12  transition-all duration-300 easeInOuth-10 cursor-pointer bg-white shadow-lg hover:bg-blue-400 hover:text-white"
          >
            Angular
          </motion.p>
          <motion.p
            variants={child}
            className="text-base text-gray-600 mt-3 py-2 text-center w-8/12  transition-all duration-300 easeInOuth-10 cursor-pointer bg-white shadow-lg hover:bg-blue-400 hover:text-white"
          >
            React-Native
          </motion.p>
          <motion.p
            variants={child}
            className="text-base text-gray-600 mt-3 py-2 text-center w-8/12  transition-all duration-300 easeInOuth-10 cursor-pointer bg-white shadow-lg hover:bg-blue-400 hover:text-white"
          >
            Tailwind Ui
          </motion.p>
          <motion.p
            variants={child}
            className="text-base text-gray-600 mt-3 py-2 text-center w-8/12  transition-all duration-300 easeInOuth-10 cursor-pointer bg-white shadow-lg hover:bg-blue-400 hover:text-white"
          >
            Material-Ui
          </motion.p>
          <motion.p
            variants={child}
            className="text-base text-gray-600 mt-3 py-2 text-center w-8/12  transition-all duration-300 easeInOuth-10 cursor-pointer bg-white shadow-lg hover:bg-blue-400 hover:text-white"
          >
            Semantic-Ui
          </motion.p>
        </div>
        <div className="flex flex-col justify-around items-center h-4/6 w-96">
          <h1 className="text-2xl text-red-400 font-bold mt-5">Others</h1>
          <motion.p
            variants={child}
            className="text-base text-gray-600 mt-3 py-2 text-center w-8/12 transition-all duration-300 easeInOut h-10 cursor-pointer bg-white shadow-lg hover:bg-red-400 hover:text-white"
          >
            Git
          </motion.p>
          <motion.p
            variants={child}
            className="text-base text-gray-600 py-2 mt-3 text-center w-8/12 transition-all duration-300 easeInOut h-10 cursor-pointer bg-white shadow-lg hover:bg-red-400 hover:text-white"
          >
            OpenCV
          </motion.p>
          <motion.p
            variants={child}
            className="text-base text-gray-600 py-2 mt-3 text-center w-8/12 transition-all duration-300 easeInOut h-10 cursor-pointer bg-white shadow-lg hover:bg-red-400 hover:text-white"
          >
            Tenserflow
          </motion.p>
          <motion.p
            variants={child}
            className="text-base text-gray-600 py-2 mt-3 text-center w-8/12 transition-all duration-300 easeInOut h-10 cursor-pointer bg-white shadow-lg hover:bg-red-400 hover:text-white"
          >
            Adobe-Photoshop
          </motion.p>
          <motion.p
            variants={child}
            className="text-base text-gray-600 py-2 mt-3 text-center w-8/12 transition-all duration-300 easeInOut h-10 cursor-pointer bg-white shadow-lg hover:bg-red-400 hover:text-white"
          >
            Adobe Illustrator
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
