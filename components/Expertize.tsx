"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Twitter from "@/public/icon/Twitter.svg";
import lii from "@/public/icon/link.svg";
const Expertize = () => {
  return (
    <div id="Expertize" className="hero min-h-screen bg-primary">
      <div className="hero-content text-center">
        <div className="w-full max-w-4xl">
          <div className="text-4xl font-bold from-purple-600 via-primary-focus to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
            Expertize
          </div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.2 }}
            className="my-6 w=full h-full border-2 rounded-md flex flex-wrap"
          >
            <Image src={lii} className=" w-14" alt={""} />
            <Image src={Twitter} className=" w-14" alt={""} />
            <Image src={Twitter} className=" w-14" alt={""} />
            <Image src={Twitter} className=" w-14" alt={""} />
          </motion.div>
          
        </div>
      </div>
    </div>
  );
};

export default Expertize;
