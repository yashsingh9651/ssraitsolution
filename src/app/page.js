import About from "@/components/About";
import Background from "@/components/Background";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Team from "@/components/Team";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <div className="relative">
      <Toaster/>
      <Background/>
      <Hero/>
      <About/>
      <Services/>
      <Team/>
      <Contact/>
    </div>
  );
}
