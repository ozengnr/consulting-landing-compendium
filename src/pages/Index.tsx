import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-secondary">
      <Hero />
      <Services />
      <Contact />
    </div>
  );
};

export default Index;