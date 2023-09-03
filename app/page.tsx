
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
<div className=" h-[100vh] w-[100vw] grid grid-flow-col grid-cols-6 max-md:grid-cols-3 overflow-hidden border-slate-900">
     
     <div className=" border-4 border-slate-900 bg-continer mt-2 h-[98vh] border-special  rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm col-span-1 max-md:col-span-1 shadow-md shadow-black  flex flex-col items-center justify-between">
       <Image
         src={Profile}
         alt="Picture of the author"
         className=" rounded-full h-40 w-40 m-2 border-slate-900 border-2"
       />
       {/* background-color: #ffffff;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='%23015f77' fill-opacity='1'%3E%3Cpolygon fill-rule='evenodd' points='8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4'/%3E%3C/g%3E%3C/svg%3E"); */}
       <div
       className="w-full">
       <div className="w-full p-2 flex justify-center items-center">
       <Link
            href={"/Contact"}
            className=" font-bold font-sans italic  w-full mb-1 rounded-md text-center  flex-grow border-2 border-slate-900 "
          >
            #Home
          </Link>
       </div>
       <div className="w-full p-2 flex justify-center items-center">
       <Link
            href={"/Contact"}
            className=" font-bold font-sans italic  w-full mb-1 rounded-md text-center  flex-grow border-2 border-slate-900 "
          >
            #Home
          </Link>
       </div>
       <div className="w-full p-2 flex justify-center items-center">
       <Link
            href={"/Contact"}
            className=" font-bold font-sans italic  w-full  rounded-md text-center  flex-grow border-2 border-slate-900 "
          >
            #Home
          </Link>
       </div>
       <div className="w-full p-2 flex justify-center items-center">
       <Link
            href={"/Contact"}
            className=" font-bold font-sans italic  w-full mb-1 rounded-md text-center  flex-grow border-2 border-slate-900 "
          >
            #Home
          </Link>
       </div>
       </div>
       
     </div>
     
     <div className="  border-4 border-slate-900 text-slate-950 rounded  shadow-lg shadow-black  col-span-5 max-md:col-span-2 overflow-scroll flex  lg:flex-col md:flex-row  overflow-y-scroll no-scrollbar scroll-smooth  m-2  border-l-cyan-950 flex-wrap ">
       <div className="  w-full justify-center items-center align-middle  flex md:flex-row  flex-col flex-wrap flex-grow">
         <div className="flex items-center  justify-center flex-col flex-grow mt-2 mx-2 lg:w-4/12">
           <div className=" lg:text-6xl text-4xl font-bold text-cyan-900  my-4">Hey There 👋,</div>
           <div className=" text-start">My self Dhanush Prabkaran.
           Lorem ipsum, dolor sit<div className="inline-block bg-slate-200 rounded-lg px-2 text-s mx-2"> perfero,quaerat</div> rerum quibusdam! Delectus, omnis.
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
