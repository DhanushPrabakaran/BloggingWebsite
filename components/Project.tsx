"use client";
import React from "react";
import photo from "@/public/Dark_game.gif";
import Image from "next/image";
import { motion } from "framer-motion";
const Project = () => {
  return (
    <motion.div
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
        <h1 className="inline-block text-5xl font-bold text-primary-focus">Project</h1>
        <div className="flex flex-row flex-wrap justify-center">
          

            {/*  */}
            <motion.div
              className="card w-72 glass m-2 hover:shadow-md hover:shadow-primary-focus  duration-75 hover:w-[19rem] hover:m-0"
              initial={{
                scale: 0,
                x: 10,
              }}
              whileInView={{
                scale: 1,
                x: 0,
              }}
              transition={{
                duration: 1,
              }}
            >
              <figure>
                <Image src={photo} alt="car!" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Life hack</h2>
                <p>How to park your car at your garage?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Learn now!</button>
                </div>
              </div>
            </motion.div>
            {/*  */}

            {/*  */}
            <motion.div
             className="card w-72 glass m-2 hover:shadow-md hover:shadow-primary-focus  duration-75 hover:w-[19rem] hover:m-0"
              initial={{
                scale: 0,
                x: 10,
              }}
              whileInView={{
                scale: 1,
                x: 0,
              }}
              transition={{
                duration: 1,
              }}
            >
              <figure>
                <Image src={photo} alt="car!" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Life hack</h2>
                <p>How to park your car at your garage?</p>
                <div className="card-actions justify-end">
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
