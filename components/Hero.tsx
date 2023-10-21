"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import Hello_world from "@/public/hello_world.gif";
import linkden from "@/public/icon/linkden.svg";
import github from "@/public/icon/github.svg";
import medium from "@/public/icon/medium.svg";
const Hero = () => {
  return (
    <div
      className="hero min-h-screen bg-[#0A1817]"
      //   style={{
      //     backgroundImage:
      //       "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
      //   }}
    >
      {/* <div className="hero-overlay bg-opacity-60"></div> */}
      <div className="hero-content flex-col lg:flex-row items-center text-center flex-wrap">
        <div className=" flex md:justify-center  flex-col">
          <motion.div
            className="text-5xl  w-fit text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent mb-2"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Dhanush Prabakaran
          </motion.div>
          <motion.p
            className="w-fit font-bold text-2xl text-left mb-2"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            Full Stack Developer, UI/UX Desiger, Blockchain Developer
          </motion.p>
          <motion.div
            className=" w-fit flex justify-center h-fit "
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <a href="">
              <Image src={linkden} className=" mr-2" alt={""} />
            </a>
            <a href="">
              <Image src={medium} className="mr-2" alt={""} />
            </a>
            <a href="">
              <Image src={github} className="mr-2" alt={""} />
            </a>
          </motion.div>
          <motion.button
            className="btn btn-primary w-fit"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            Download Resume
          </motion.button>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Image src={Hello_world} className="rounded-lg" width={400} alt={""} />
        </motion.div>
        <div className="md:absolute bottom-0 animate-pulse p-0 m-2">Scroll Down</div>
      </div>
    </div>
  );
};

export default Hero;
