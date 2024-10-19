import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";


export default function Home() {
  return (
   <div className="w-full  h-full">
    <Navbar/>
    <Hero/>
   <Marquee/>
   <About/>
   <Offer/>
   <Footer/>
   </div>
  );
}
