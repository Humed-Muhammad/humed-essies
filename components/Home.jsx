import { motion } from "framer-motion";

let parentVa = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
      delayChildren: 0.5,
    },
  },
};
let child = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 1,
      type: "tween",
    },
  },
};

const Home = ({ contactRef }) => {
  return (
    <motion.div
      variants={parentVa}
      initial="hidden"
      animate="visible"
      className="w-auto h-screen px-10 py-20 flex flex-col justify-around items-center sm:justify-center md:px-40 items-baseline"
    >
      <motion.h3
        variants={child}
        className="font-small text-green-300 pt-20 sm:pt-10"
      >
        Hello there, I am
      </motion.h3>
      <motion.h1
        variants={child}
        className="py-3 font-bold text-white text-2xl sm:w-full sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
      >
        Humed Muhammed.
      </motion.h1>
      <motion.h1
        variants={child}
        className="py-3 font-bold text-gray-400 sm: w-full text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
      >
        I build things for the web.
      </motion.h1>
      <motion.p
        variants={child}
        className="w-full text-gray-400 65 sm:w-3/4 md:w-full md:text-lg py-4 lg:w-3/4 xl:w-2/4 "
      >
        I'm a Web developer who specializes in building and designing
        exceptional websites and web applications that can enhance user
        experiences using latest web technologies.
      </motion.p>
      <motion.button
        variants={child}
        onClick={() =>
          contactRef.current.scrollIntoView({ behavior: "smooth" })
        }
        className="text-gray-200 border-solid border-2 border-green-300 rounded py-3 m-10 w-48 transition-all duration-0.5 ease-in-out hover:bg-green-500 hover:bg-opacity-0.5"
      >
        Get In Touch
      </motion.button>
    </motion.div>
  );
};

export default Home;
