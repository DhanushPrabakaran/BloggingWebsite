"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/public/Logo.png";
export default function Header() {
  return (
    <div className="bg-less h-14 w-full flex justify-between">
      <Image
        className="p-0 m-0"
        src={Logo}
        alt={"Dev geek"}
        style={{ width: "160px", height: "80px" }}
      />
      <div 
      className="font-bold text-2xl font-sans">
        Dev Geeks
      </div>
      <div 
      className="font-bold text-2xl font-sans">
      Title</div>
    </div>
  );
}
