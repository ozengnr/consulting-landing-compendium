import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BarChart, Users, Rocket } from "lucide-react";

const services = [
  {
    title: "Go-to-Market Strategy",
    description: "Develop comprehensive GTM strategies tailored for early-stage startups",
    icon: Rocket,
  },
  {
    title: "Market Analysis",
    description: "In-depth market research and competitive analysis",
    icon: BarChart,
  },
  {
    title: "Customer Development",
    description: "Identify and validate your target customer segments",
    icon: Users,
  },
];

const Services = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-4">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Comprehensive go-to-market solutions tailored for early-stage companies.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <service.icon className="h-12 w-12 text-accent mb-4" />
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;