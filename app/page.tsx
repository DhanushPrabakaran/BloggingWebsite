import Project from "@/components/Project";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import About from "@/components/About"
import Achievements from "@/components/Achievements"
import Contact from "@/components/Contact"
import Expertize from "@/components/Expertize"
export default function page() {

  return (
    <div
    className=" scroll-smooth">
     <Header/>
     <Hero/>
     <About/>
     <Project/>
     <Expertize/>
     <Achievements/>
     <Contact/>

     <Footer/>
    </div>
    
  );
}
