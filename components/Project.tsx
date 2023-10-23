"use client";
import React from "react";
import photo from "@/public/Dark_game.gif";
import Image from "next/image";
import { motion } from "framer-motion";
import Lin from "@/public/icon/link.svg";
import Github from "@/public/icon/github.svg";
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
        <h1 className="inline-block text-4xl font-bold text-primary-focus from-purple-600 via-primary-focus to-blue-600 bg-gradient-to-r bg-clip-text text-transparent  ">
          Project
        </h1>
        <div className="flex flex-row flex-wrap justify-around">

          {/*  */}
          <motion.div
            className="card  w-72 glass  m-2 drop-shadow-2xl shadow-transparent shadow-xl hover:shadow-primary-focus  "
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1 }}
          >
            <figure>
              <Image src={photo} alt="car!" />
            </figure>
            <div className="card-body flex flex-col justify-center align-middle">
              <h2 className="card-title justify-center">Dev Geeks Community</h2>
              <p className="line-clamp-5 ">
              Dev geeks platform is a vibrant hub for developers of all backgrounds and expertise levels to come together and create, learn, and grow. Whether you are a seasoned coder or just starting your programming journey, you will find a welcoming and supportive community eager to help you achieve your goals
              </p>
              <div className="card-actions justify-center items-center flex align-middle">
                <a href="https://dev-geeks.vercel.app/">
                  <Image src={Lin} alt="" className=" w-7" />
                </a>
                <a href="https://github.com/DhanushPrabakaran/dev_geeks">
                  <Image src={Github} alt="" className=" w-10" />
                </a>
              </div>
            </div>
          </motion.div>
          {/*  */}

          {/*  */}
          <motion.div
            className="card  w-72 glass  m-2 drop-shadow-2xl shadow-transparent shadow-xl hover:shadow-primary-focus  "
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1 }}
          >
            <figure>
              <Image src={photo} alt="car!" />
            </figure>
            <div className="card-body flex flex-col justify-center align-middle">
              <h2 className="card-title justify-center">Community Invite</h2>
              <p className="line-clamp-5 ">
              Dev geeks platform is a vibrant hub for developers of all backgrounds and expertise levels to come together and create, learn, and grow. Whether you are a seasoned coder or just starting your programming journey, you will find a welcoming and supportive community eager to help you achieve your goals
              </p>
              <div className="card-actions justify-center items-center flex align-middle">
                <a href="https://dev-geeks-intro.vercel.app/">
                  <Image src={Lin} alt="" className=" w-7" />
                </a>
                <a href="https://github.com/DhanushPrabakaran/dev_geeks_intro">
                  <Image src={Github} alt="" className=" w-10" />
                </a>
              </div>
            </div>
          </motion.div>
          {/*  */}

          {/*  */}
          <motion.div
            className="card  w-72 glass  m-2 drop-shadow-2xl shadow-transparent shadow-xl hover:shadow-primary-focus  "
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1 }}
          >
            <figure>
              <Image src={photo} alt="car!" />
            </figure>
            <div className="card-body flex flex-col justify-center align-middle">
              <h2 className="card-title justify-center">TechWitz</h2>
              <p className="line-clamp-5 ">
              Techwitz 2023 is not just an event; it{"'"}s a celebration of the boundless potential of technology and innovation.
The Inauguration of Techwitz 2023 will commence with an inspiring inaugural speech that will set the stage for the exciting events to come.
              </p>
              <div className="card-actions justify-center items-center flex align-middle">
                <a href="https://techwitz.netlify.app/">
                  <Image src={Lin} alt="" className=" w-7" />
                </a>
                <a href="https://github.com/DhanushPrabakaran/techwitz-csbs">
                  <Image src={Github} alt="" className=" w-10" />
                </a>
              </div>
            </div>
          </motion.div>
          {/*  */}

          {/*  */}
          <motion.div
            className="card  w-72 glass  m-2 drop-shadow-2xl shadow-transparent shadow-xl hover:shadow-primary-focus  "
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1 }}
          >
            <figure>
              <Image src={photo} alt="car!" />
            </figure>
            <div className="card-body flex flex-col justify-center align-middle">
              <h2 className="card-title justify-center">Image Gallery</h2>
              <p className="line-clamp-5 ">
                A website for artists and photographers where they can share
                images and Artwork in the form of images with detailed
                descriptions and others can use those images
              </p>
              <div className="card-actions justify-center items-center flex align-middle">
                <a href="https://unique-heliotrope-111350.netlify.app/">
                  <Image src={Lin} alt="" className=" w-7" />
                </a>
                <a href="https://github.com/DhanushPrabakaran/image-gallery">
                  <Image src={Github} alt="" className=" w-10" />
                </a>
              </div>
            </div>
          </motion.div>
          {/*  */}

          {/*  */}
          <motion.div
            className="card  w-72 glass  m-2 drop-shadow-2xl shadow-transparent shadow-xl hover:shadow-primary-focus  "
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1 }}
          >
            <figure>
              <Image src={photo} alt="car!" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-center justify-center">Stress Calculator</h2>
              <p className="line-clamp-5 ">
              A Platform where people can check their stress levels by answering a few questions and as Result suggestions will be provided according to the stress level of the user
              </p>
              <div className="card-actions justify-center items-center flex align-middle">
                <a href="https://deluxe-torte-61fc90.netlify.app/">
                  <Image src={Lin} alt="" className=" w-7" />
                </a>
                <a href="https://github.com/DhanushPrabakaran/drepessionrate">
                  <Image src={Github} alt="" className=" w-10" />
                </a>
              </div>
            </div>
          </motion.div>
          {/*  */}

          {/*  */}
          <motion.div
            className="card w-72 glass  m-2 drop-shadow-2xl shadow-transparent shadow-xl hover:shadow-primary-focus  "
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1 }}
          >
            <figure>
              <Image src={photo} alt="car!" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-center justify-center">Image Generator</h2>
              <p className="line-clamp-5 ">
              A platform for users to generate images by giving prompts and downloading images previously developed by other users
              </p>
              <div className="card-actions justify-center items-center flex align-middle">
                <a href="https://tangerine-salmiakki-f19187.netlify.app/">
                  <Image src={Lin} alt="" className=" w-7" />
                </a>
                <a href="https://github.com/DhanushPrabakaran/image-generator">
                  <Image src={Github} alt="" className=" w-10" />
                </a>
              </div>
            </div>
          </motion.div>
          {/*  */}

          {/*  */}
          <motion.div
            className="card w-72 glass  m-2 drop-shadow-2xl shadow-transparent shadow-xl hover:shadow-primary-focus  "
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1 }}
          >
            <figure>
              <Image src={photo} alt="car!" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-center justify-center">QR Code Generator</h2>
              <p className="line-clamp-5 ">
             QR code Generating website
              </p>
              <div className="card-actions justify-center items-center flex align-middle">
                <a href="https://astounding-semifreddo-a71253.netlify.app/">
                  <Image src={Lin} alt="" className=" w-7" />
                </a>
                <a href="https://github.com/DhanushPrabakaran/QR-CODE-GENERATOR">
                  <Image src={Github} alt="" className=" w-10" />
                </a>
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
