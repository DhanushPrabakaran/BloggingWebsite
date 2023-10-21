'use client'
import React from "react";
import photo from "@/public/Dark_game.gif";
import Image from "next/image";
import { motion } from "framer-motion";
const Project = () => {
  return (
    <motion.div className="hero min-h-screen bg-primary scroll-smooth"
    initial="hidden"
  whileInView="visible"
  animate={ 
    {
      scale: [0,1], opacity:[0,1]
    }

  }
  transition={{ delay: 1 }}
    >
      <div className="hero-content text-center flex flex-col ">
        <h1 className="inline-block text-5xl font-bold">Project</h1>
        <div className="flex flex-col">
          <div>
            {/*  */}
            <div className="card w-96 glass">
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
            </div>
            {/*  */}
            
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
