import Project from "@/components/Project";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import About from "@/components/About"
import Achievements from "@/components/Achievements"
import Contact from "@/components/Contact"
import Expertize from "@/components/Expertize"
import Writing from "@/components/Writing";

export default function page() {

  return (
    <div
    className=" scroll-smooth">
    <Header/>
     <Hero/>
     <About/>
     <Project/>
     <Achievements/>
     <Writing/>
     <Contact/>
     <Footer/>
    </div>
    
  );
}
