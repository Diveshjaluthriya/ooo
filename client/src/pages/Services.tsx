import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Database, Bot, ShieldCheck, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import teamWorking from "@/assets/images/team-working.jpg";

const services = [
  {
    icon: Database,
    title: "Data Operations & Analytics",
    description: "Turn raw data into actionable insights.",
    features: ["Custom Dashboard Creation", "Data Cleaning & Migration", "KPI Tracking Systems", "Cross-Platform Integration"]
  },
  {
    icon: Bot,
    title: "Intelligent Automation",
    description: "Remove the human bottleneck from repetitive tasks.",
    features: ["Email & Communication Bots", "Automated Invoicing", "Client Onboarding Flows", "Report Generation"]
  },
  {
    icon: Code2,
    title: "Custom Internal Tools",
    description: "Software built specifically for how you work.",
    features: ["Employee Portals", "Inventory Management Systems", "CRM Customization", "Legacy System Wrappers"]
  },
  {
    icon: ShieldCheck,
    title: "Tech Audits & Strategy",
    description: "A comprehensive roadmap for your digital transformation.",
    features: ["Security Vulnerability Assessment", "Stack Optimization", "Cost Reduction Analysis", "Future-Proofing Strategy"]
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background text-foreground grainy-bg">
      <Navbar />
      
      <div className="relative pt-40 pb-20">
        <div className="absolute inset-0 z-0 h-[60vh] overflow-hidden opacity-20 pointer-events-none">
          <img src={teamWorking} alt="Team Working" className="w-full h-full object-cover grayscale brightness-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-7xl font-bold mb-6 tracking-tighter"
            >
              Our Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground font-light leading-relaxed"
            >
              We provide end-to-end operational intelligence. From cleaning your data to building the robots that run your back office.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card/40 backdrop-blur-xl border border-white/5 p-8 rounded-[32px] hover:border-primary/50 transition-all duration-500 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight">{service.title}</h3>
                </div>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">{service.description}</p>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-primary/5 rounded-[40px] p-16 text-center border border-primary/10 backdrop-blur-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -mr-32 -mt-32" />
            <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Not sure what you need?</h3>
            <p className="text-muted-foreground mb-10 max-w-2xl mx-auto text-xl font-light leading-relaxed">
              Most clients start with a general problem: "Everything feels chaotic." We'll diagnose the root cause and build the solution.
            </p>
            <Link href="/contact">
              <Button size="lg" className="rounded-full h-16 px-10 text-lg bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20">Book a Free Audit</Button>
            </Link>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
