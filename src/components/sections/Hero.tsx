import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const Hero = () => (
  <motion.header 
    className="relative h-screen flex items-center justify-center bg-primary overflow-hidden"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d')] bg-cover bg-center opacity-10" />
    <div className="container mx-auto px-4 relative z-10">
      <motion.div 
        className="max-w-3xl mx-auto text-center"
        variants={fadeIn}
        initial="initial"
        animate="animate"
      >
        <span className="inline-block px-3 py-1 mb-6 text-sm font-medium text-accent-foreground bg-accent rounded-full animate-fade-in">
          Early-Stage Growth Partners
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Accelerate Your Go-to-Market Strategy
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          We help pre-seed to Series A startups build and execute winning go-to-market strategies.
        </p>
        <Button 
          size="lg"
          className="bg-accent hover:bg-accent/90 text-white"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Get Started
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </motion.div>
    </div>
  </motion.header>
);

export default Hero;