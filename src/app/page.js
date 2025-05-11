import About from "@/components/About";
import Background from "@/components/Background";
import ClientLogos from "@/components/ClientLogos";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Team from "@/components/Team";
import { Toaster } from "react-hot-toast";

export default function Home() {
  const clientLogos = [
    {
      src: "/images/memb-1.jpg",
      alt: "Google",
    },
    {
      src: "/images/memb-2.jpg",
      alt: "Amazon",
    },
    {
      src: "/images/memb-3.jpg",
      alt: "Microsoft",
    },
    {
      src: "/images/memb-4.jpg",
      alt: "Apple",
    },
    // Add more client logos as needed
  ];
  return (
    <div className="relative">
      <Toaster />
      <Background />
      <Hero />
      <About />
      <Services />
      <Team />
      <ClientLogos logos={clientLogos} />
      <Contact />
    </div>
  );
}
