// import Background from "@/components/Background"
import Image from "next/image";
import Header from "@/components/Header";

export default function Home() {
  return <div
  className=" bg-cyan-900 h-[100vh] w-[100vw] grid grid-flow-col grid-cols-6 max-md:grid-cols-3 gap-x-2 gap-y-2">
    <div
    className="bg-white col-span-1 max-md:col-span-1   rounded shadow p-5 m-2 ">
     I

    </div>
    <div
    className=" bg-slate-500 rounded shadow p-5 col-span-5 max-md:col-span-2 ">
    </div>
  </div>;
}
