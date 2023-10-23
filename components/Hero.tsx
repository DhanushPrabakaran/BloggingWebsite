"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import Hello_world from "@/public/hello_world.gif";
import linkden from "@/public/icon/linkden.svg";
import github from "@/public/icon/github.svg";
import medium from "@/public/icon/medium.svg";
import Spotify from '@/public/icon/spotify.svg'
import Dribble from '@/public/icon/dribbl.svg'
import Twitter from '@/public/icon/Twitter.svg'
import Spotif from '@/public/icon/spotify.svg'
import Link from "next/link";
const Hero = () => {
  return (
    <div
    id="Hero"
      className="hero min-h-screen bg-[#0A1817]"
    >
      
      <div className="hero-content w-full  flex-col items-center text-center flex-wrap justify-end">
        <div
        className=" w-full lg:flex-row flex-col flex justify-center items-center  content-center self-center  align-middle ">
        <div className=" flex max-md:items-center  flex-col">
        <motion.div
    initial={{scale: 0,}}
    whileInView={{scale: 1,}}
    transition={{duration: 1,}}
            className="text-5xl max-md:items-center font-bold from-purple-600 via-primary-focus to-blue-600 bg-gradient-to-r bg-clip-text text-transparent my-2"
            
          >
            Dhanush Prabakaran
          </motion.div>
          <motion.p
    
    
    initial={{scale: 0,}}
    whileInView={{scale: 1,}}
    transition={{duration: 1,}}
            className="w-fit max-md:items-center max-md:text-center font-bold text-2xl text-left my-2"
            
          >
            Full Stack Developer, UI/UX Desiger, Blockchain Developer
          </motion.p>
          <motion.div
    
    
    initial={{scale: 0,}}
    whileInView={{scale: 1,}}
    transition={{duration: 1,}}
            className=" divider text-primary-focus w-fit h-fit flex justify-center  align-middle  my-2 "
            
          >
            <a href="https://www.linkedin.com/in/dhanushprabakar/" className="flex">
              <Image src={linkden} width={30} className=" w-24 mr-2" alt={""} />
            </a>
            <a href="https://medium.com/@dhanushprabakaran18" className="flex ">
              <Image src={medium} width={30} className="mr-2 w-24" alt={""} />
            </a>
            <a href="https://github.com/DhanushPrabakaran" className="flex ">
              <Image src={github} width={40}  className="mr-2 w-32 fill-primary-focus" alt={""} />
            </a>
            <a href="https://open.spotify.com/user/3xn4a5w7pqbo94ztkvjlt2m7d" className="flex ">
              <Image src={Spotify} width={30}  className="mr-2 w-24 fill-primary-focus" alt={""} />
            </a>
            <a href="https://dribbble.com/dhanu_sh" className="flex ">
              <Image src={Dribble}  width={30}  className="mr-2 w-24 fill-primary-focus" alt={""} />
            </a>
            <a href="https://twitter.com/sudha_dhanush" className="flex ">
              <Image src={Twitter} width={30}   className="mr-2 w-24 fill-primary-focus" alt={""} />
            </a>
          </motion.div>
          <motion.button
    
    
    initial={{scale: 0,}}
    whileInView={{scale: 1,}}
    transition={{duration: 1,}}
          
            className="btn btn-primary hover:text-black ease-in-out duration-500 w-fit my-2"
            
          >
            Download Resume
          </motion.button>
        </div>
        <motion.div
    
    
    initial={{scale: 0,}}
    whileInView={{scale: 1,}}
    transition={{duration: 1,}}
        >
          <Image
            src={Hello_world}
            width={500}
            alt={""}
            className=" items-center justify-center self-center"
          />
        </motion.div>
        </div>
        <motion.div
    
    
    initial={{scale: 0,}}
    whileInView={{scale: 1,}}
    transition={{duration: 1,}}
           className=" flex flex-col justify-center align-middle items-center bottom-0 animate-pulse p-0 m-2">
          {/* <p
          className=" font-bold text-xl">Scroll Down</p> */}
          <Link
          href="#Project"
          
          className="border flex flex-col border-white py-2 p-1 rounded-full mt-3 justify-center items-center align-middle" >
          <svg
            className="w-5 h-5 text-gray-800 dark:text-white animate-bounce pt-2 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 8"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
            />
          </svg>
          <svg
            className="w-5 h-5 text-gray-800 dark:text-white animate-bounce"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 8"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
            />
          </svg>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
