import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { motion } from "framer-motion";

let parentVa = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.3,
      delayChildren: 0.1,
    },
  },
};
let child = {
  hidden: {
    opacity: 0,
    y: -40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: "tween",
    },
  },
};

const NavBar = ({ skillRef, aboutRef, workRef, contactRef }) => {
  let [list, setList] = useState(false);

  return (
    <nav
      className={`fixed w-full z-40 h-20 bg-gray-800 bg-opacity-75 flex items-center justify-between`}
    >
      <motion.div className="px-10">
        <img
          className="inline object-cover w-12 h-12 mr-2 rounded-full"
          src="./pp.jpg"
          alt=""
        />
      </motion.div>
      <motion.div
        animate={list ? { rotate: 180 } : { rotate: 0 }}
        className="flex md:hidden w-12 h-12 mr-2 px-2 py-2 rounded-full"
      >
        <MenuIcon
          className={list ? "hidden" : "flex text-green-300 font-small"}
          onClick={() => setList(true)}
        />

        <XIcon
          className={list ? "flex text-green-300 font-small" : "hidden"}
          onClick={() => setList(false)}
        />
      </motion.div>
      <motion.div
        variants={parentVa}
        initial="hidden"
        animate="visible"
        className={`hidden md:flex flex-wrap items-center justify-between w-auto ml-5 space-x-4 px-10`}
      >
        <motion.a
          variants={child}
          onClick={() =>
            aboutRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className="link cursor-pointer text-gray-200 font-medium px-4 hover:text-green-300 transition duration-500 ease"
        >
          About
        </motion.a>
        <motion.a
          variants={child}
          onClick={() =>
            skillRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className="link cursor-pointer text-gray-200 font-medium px-4 hover:text-green-300 transition duration-500 ease"
        >
          Skills
        </motion.a>
        <motion.a
          variants={child}
          onClick={() => workRef.current.scrollIntoView({ behavior: "smooth" })}
          className="link cursor-pointer text-gray-200 font-medium px-4 hover:text-green-300 transition duration-500 ease"
        >
          Work
        </motion.a>
        <motion.a
          variants={child}
          onClick={() =>
            contactRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className="link cursor-pointer text-gray-200 font-medium px-4 hover:text-green-300 transition duration-500 ease"
        >
          Contact
        </motion.a>
        <motion.button
          variants={child}
          className="sm:rounded-lg bg-green-400 py-2"
        >
          <a
            href="#"
            className="link text-gray-200 font-medium px-4 hover:text-gray-900 transition duration-500 ease"
          >
            Resume
          </a>
        </motion.button>
      </motion.div>
      <div
        className={` ${
          list
            ? "h-60 opacity-1 transition-all duration-400 ease-liner"
            : "h-0 opacity-0 z-0"
        } flex flex-col absolute top-20 py-2 items-center justify-between bg-gray-700 w-full space-x-4  md:hidden`}
      >
        <motion.a
          variants={child}
          onClick={() =>
            aboutRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className="link cursor-pointer pl-6 text-gray-200 font-medium px-4 hover:text-green-300 transition duration-500 ease"
        >
          About
        </motion.a>
        <motion.a
          variants={child}
          onClick={() =>
            skillRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className="link cursor-pointer text-gray-200 font-medium px-4 hover:text-green-300 transition duration-500 ease"
        >
          Skills
        </motion.a>
        <motion.a
          variants={child}
          onClick={() => workRef.current.scrollIntoView({ behavior: "smooth" })}
          className="link cursor-pointer text-gray-200 font-medium px-4 hover:text-green-300 transition duration-500 ease"
        >
          Work
        </motion.a>
        <motion.a
          variants={child}
          onClick={() =>
            contactRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className="link cursor-pointer text-gray-200 font-medium px-4 hover:text-green-300 transition duration-500 ease"
        >
          Contact
        </motion.a>
        <button className="sm:rounded-lg bg-green-300 py-2">
          <a
            href="#"
            className="link text-gray-200 font-medium px-4 hover:text-gray-900 transition duration-500 ease"
          >
            Resume
          </a>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
