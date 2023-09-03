

"use client";
import Image from "next/image";
import Header from "@/components/Header";
import Logo from "@/public/Logo.png";
import Profile from "@/public/profile.png";
import ll from "@/public/Design team.gif";
import web from "@/public/Website Creator-bro.svg";
import Link from "next/link";
export default function page() {
  return (
<div className="h-[100vh] w-[100vw] grid grid-flow-col grid-cols-6 max-md:grid-cols-3 overflow-hidden text-teal-100 bg-teal-100 ">
     
     <div className=" bg-teal-800 bg-continer mt-2 h-[98vh] border-special  rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm col-span-1 max-md:col-span-1 shadow-md shadow-black  flex flex-col items-center justify-between border  ">
       <Image
         src={Profile}
         alt="Picture of the author"
         className=" rounded-full h-40 w-40 m-2"
       />
       <div className="w-full p-2 flex justify-center items-center">
       <Link
            href={"/"}
            className=" font-bold font-sans italic border w-full mb-1 rounded-sm text-center  flex-grow  "
          >
            # Home
          </Link>
       </div>
     </div>
     
     <div className=" border-indigo-900 bg-teal-800  rounded  shadow-lg shadow-black  col-span-5 max-md:col-span-2 overflow-scroll flex  lg:flex-col md:flex-row  overflow-y-scroll no-scrollbar scroll-smooth text-gray-50 m-2 bg-opacity-80 border-l-cyan-950 flex-wrap ">
       <div className="  w-full justify-center items-center align-middle  flex md:flex-row  flex-col flex-wrap flex-grow">
         <div className="flex items-center  justify-center flex-col flex-grow mt-2 mx-2 lg:w-4/12">
           <div className="font- text-3xl font-bold text-cyan-900">Hey There 👋,</div>
           <div className=" text-start">My self Dhanush Prabkaran.
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur similique porro laborum molestias perferendis nobis neque quis pariatur quas odio, vero quasi fugit incidunt optio quaerat rerum quibusdam! Delectus, omnis.
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde porro, facilis repudiandae qui, delectus non explicabo aperiam quod, in totam ullam. Vero eos quibusdam error harum nemo atque a natus.
           Quaerat at exercitationem maiores, provident officiis quibusdam dolores illum dolorum tempora et illo sed odit. Officiis, et placeat quasi recusandae expedita magni voluptas tempore doloribus accusamus voluptatu
           </div>
         </div>
         <div className="flex items-center  justify-center flex-col ">
           <Image
             src={web}
             alt="Picture of the author"
             
           />
         </div>
       </div>
       
     </div>
   </div>
    

    
  )
}
