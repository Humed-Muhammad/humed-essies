import React, { useRef, useState } from "react";
import Head from "next/head";
import NavBar from "../components/NavBar.jsx";
import Home from "../components/Home.jsx";
import About from "../components/About.jsx";
import ScrollToBottom from "react-scroll-to-bottom";
import { FaGit, FaLinkedin, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";
import Skills from "../components/Skills.jsx";
import Work from "../components/Work.jsx";
import Contact from "../components/Contact.jsx";

export default function App() {
  let aboutRef = useRef();
  let skillRef = useRef();
  let workRef = useRef();
  let contactRef = useRef();
  let [fadeIn, setFadeIn] = useState(false);
  return (
    <ScrollToBottom
      style={{
        height: "100vh",
        overflow: "hidden",
      }}
      className="bg-gray-900"
    >
      <Head>
        <title>Humed Muhammed</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar
        workRef={workRef}
        contactRef={contactRef}
        aboutRef={aboutRef}
        skillRef={skillRef}
        setFadeIn={setFadeIn}
      />
      <div className="z-0 invisible sm:visible fixed top-2/4 px-2 h-24 flex flex-col justify-between items-center md:px-20">
        <motion.a
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="cursor-pointer"
        >
          <FaGit className="text-white font-medium" />
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="cursor-pointer"
        >
          <FaLinkedin className="text-white font-medium" />
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="cursor-pointer"
        >
          <FaFacebook className="text-white font-medium" />
        </motion.a>
      </div>
      <motion.p
        animate={{ rotate: 90 }}
        className="text-green-300 fixed top-2/4 right-2 text-center z-0 invisible sm:visible ml-10 h-24"
      >
        hum.dev1203@gmail.com
      </motion.p>
      <div className="flex flex-col justify-around items-ceneter">
        <Home contactRef={contactRef} />
        <About aboutRef={aboutRef} />
        <Skills fadeIn={fadeIn} skillRef={skillRef} />
        <Work workRef={workRef} />
        <Contact contactRef={contactRef} />
      </div>
    </ScrollToBottom>
  );
}
