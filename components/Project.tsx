"use client";
import React from "react";
import photo from "@/public/Dark_game.gif";
import Image from "next/image";
import { motion } from "framer-motion";
const Project = () => {
  return (
    <motion.div
    id="Project"
      className="hero min-h-screen bg-primary scroll-smooth"
      initial="hidden"
      whileInView="visible"
      animate={{
        scale: [0, 1],
        opacity: [0, 1],
      }}
      transition={{ delay: 1 }}
    >
      <div className="hero-content text-center flex flex-col ">
        <h1 className="inline-block text-4xl font-bold text-primary-focus">
          Project
        </h1>
        <div className="flex flex-row flex-wrap justify-around">
          {/*  */}
          
            <motion.div
              className="card  w-64 glass   drop-shadow-2xl shadow-transparent shadow-xl hover:shadow-primary-focus p-2 "
              initial={{scale: 0,}}
              whileInView={{scale: 1,}}
              transition={{duration: 1,}}
            >
              <figure>
                <Image src={photo} alt="car!" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">PROJECT 1</h2>
                <p className=" line-clamp-3 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  veniam, alias cumque libero modi delectus aut optio nostrum.
                  Autem perferendis commodi ea, nisi amet aperiam fugit
                  exercitationem repudiandae voluptates fuga!
                </p>
                <div className="card-actions justify-center">
                  <button className="btn btn-primary">Learn now!</button>
                </div>
              </div>
            </motion.div>
          
          {/*  */}
          {/*  */}
          
            <motion.div
              className="card w-64 glass p-2   drop-shadow-2xl shadow-transparent shadow-xl hover:shadow-primary-focus "
              initial={{scale: 0,}}
              whileInView={{scale: 1,}}
              transition={{duration: 1,}}
            >
              <figure>
                <Image src={photo} alt="car!" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">PROJECT 1</h2>
                <p className=" line-clamp-3 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  veniam, alias cumque libero modi delectus aut optio nostrum.
                  Autem perferendis commodi ea, nisi amet aperiam fugit
                  exercitationem repudiandae voluptates fuga!
                </p>
                <div className="card-actions justify-center">
                  <button className="btn btn-primary">Learn now!</button>
                </div>
              </div>
            </motion.div>
          
          {/*  */}
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
