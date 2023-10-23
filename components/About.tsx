'use client'
import React from "react";
import Image from "next/image";
import IMa from "@/public/computer_light.gif";
import Profile from "@/public/Profile picture.png";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div id="About" className="hero min-h-screen bg-primary">
      <div className="hero-content text-center w-full">
        <div className=" h-fit w-full flex justify-center items-center flex-col flex-wrap">
          <h1 className="text-4xl font-bold from-purple-600 via-primary-focus to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
            About me !
          </h1>
          <div className="  max-md:w-full w-9/12 flex items-center flex-col justify-center mt-20">
            <motion.div
    
    
    initial={{scale: 0,}}
    whileInView={{scale: 1,}}
    transition={{duration: 1,}} className=" h-fit  border-2 border-primary-focus card w-full bg-base-100 shadow-xl ">
              <Image
                src={Profile}
                alt="Computer"
                width={130}
                className=" absolute self-center -translate-y-1/2   rounded-full   "
              />
              <div className="card-body flex flex-col items-center">
                <h2 className=" text-center card-title mt-8 ">Dhanush Prabakaran</h2>

                <p>
                  As a{" "}
                  <span className=" text-primary-focus ">
                    {/*" \""*/} full-stack web developer {/*" \""*/}
                  </span>
                  , I am well-versed in a wide range of programming languages
                  and technologies. Currently, I am pursuing a{" "}
                  <span className=" text-secondary">
                    B.Tech in Computer Science and Business Systems
                  </span>{" "}
                  at KIT- Kalaignarkarunanidhi Institute of Technology, where I have gained a solid foundation in software engineering principles and best practices. I am passionate about collaborating with industry professionals to further develop my skills and knowledge, and I am excited about the opportunities that lie ahead.
                </p>
              </div>
            </ motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
