'use client'
import React from "react";
import Image from "next/image";
import Imaff from "@/public/computer_light.gif";
import Dev_Geeks from "@/public/Dev_Geeks_Relese.jpeg";
import { motion } from "framer-motion";
const Achievements = () => {
  return (
    <div id="Achievements" className="hero min-h-screen bg-primary">
      <div className="hero-content text-center">
        <div className="">
          <h1 className="text-4xl font-bold from-purple-600 via-primary-focus my-2 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
            Achievements
          </h1>
          <div>

            {/*  */}
            <motion.div
    
    
    initial={{scale: 0,}}
    whileInView={{scale: 1,}}
    transition={{duration: 1,}}
              className={`hero card mb-2 max-w-5xl  shadow-xl    `}
              style={{
                backgroundImage: `url(https://media.licdn.com/dms/image/D5622AQGOKizGwFZyIQ/feedshare-shrink_1280/0/1696958729553?e=1700697600&v=beta&t=Kh_sx-V484zplWNYSFt8uqQ7ywAHHyf7KBaSK8Yns5c)`,
                objectFit: "cover",
              }}
            >
              <div className="hero-overlay  rounded-2xl border-2 border-primary-focus bg-cyan-900 bg-opacity-60"></div>

              <div className="card-body">
                <h1 className=" text-secondary text-2xl font-bold">
                  Dev Geeks Community page
                </h1>
                <p className=" line-clamp-3">
                  I am thrilled to announce {'"'}
                  <span className=" text-primary-focus">Dev Geeks</span>
                  {'"'}, a community specifically designed for college-level
                  tech enthusiasts. Our mission is to foster interactive and
                  informative conversations between college juniors and
                  seniors.The primary goal of Dev Geeks is to encourage juniors
                  and seniors to connect, share their ideas, doubts, and
                  passions, and create a supportive environment for growth and
                  learning.
                </p>
                <div className="card-actions justify-end"></div>
              </div>
            </motion.div>
            {/*  */}

            {/*  */}
            <motion.div
    
    
    initial={{scale: 0,}}
    whileInView={{scale: 1,}}
    transition={{duration: 1,}}
              className={`hero card mb-2 max-w-5xl  shadow-xl    `}
              style={{
                backgroundImage: `url(https://media.licdn.com/dms/image/D4D22AQF7vibDEg7NKw/feedshare-shrink_800/0/1689693559093?e=1700697600&v=beta&t=xBxKOyrMfhyzIJMv0EadjmUkUUbhxuRTkWAl9IBjfek)`,
                objectFit: "cover",
              }}
            >
              <div className="hero-overlay  rounded-2xl border-2 border-primary-focus bg-cyan-900 bg-opacity-60"></div>

              <div className="card-body">
                <h1 className=" text-secondary text-2xl font-bold">
                 WorkShop On Design Thinking
                </h1>
                <p className=" line-clamp-3">
                Hey there, After a long time, I got an opportunity to express my idea before a huge crowd
Last Saturday I got an opportunity to attend a workshop on design thinking, The first part was as usual theoretical but then we all got an opportunity to design our ideas on the real-time problem statement given by the instructor, I got a wonderful team to design the solution for the problem statement.
And finally, I got an opportunity to express the idea in front of a huge audience and prestigious judges.
                </p>
                <div className="card-actions justify-end"></div>
              </div>
            </motion.div>
            {/*  */}

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
