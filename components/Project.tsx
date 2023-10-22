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
        <h1 className="inline-block text-5xl font-bold text-primary-focus">
          Project
        </h1>
        <div className="flex flex-row flex-wrap justify-around">
          {/*  */}
          <div className=" hover:-translate-x-2 hover:-translate-y-2 duration-150 m-2 ">
            <motion.div
              className="card w-72 glass   drop-shadow-2xl shadow-transparent shadow-xl hover:shadow-primary-focus "
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
          </div>
          {/*  */}
          {/*  */}
          <div className=" hover:-translate-x-2 hover:-translate-y-2 duration-150 m-2 ">
            <motion.div
              className="card w-72 glass   drop-shadow-2xl shadow-transparent shadow-xl hover:shadow-primary-focus "
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
          </div>
          {/*  */}
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
