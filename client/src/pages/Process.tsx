import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Search, FileText, Code, Rocket, RefreshCcw } from "lucide-react";
import { motion } from "framer-motion";
import teamWorking from "@/assets/images/team-working.jpg";

const steps = [
  {
    icon: Search,
    title: "1. Audit & Discovery",
    description: "We dive deep into your current workflows. We interview your team, map out your processes, and identify the biggest bottlenecks."
  },
  {
    icon: FileText,
    title: "2. Strategy & Roadmap",
    description: "We present a detailed plan. You get a clear timeline, cost analysis, and expected ROI for every automation we propose."
  },
  {
    icon: Code,
    title: "3. Build & Integrate",
    description: "Our engineers get to work. We build the bots, connect the APIs, and develop the dashboards without disrupting your daily operations."
  },
  {
    icon: Rocket,
    title: "4. Training & Launch",
    description: "We don't just hand over the keys. We train your team on the new systems, ensuring adoption and comfort with the new tools."
  },
  {
    icon: RefreshCcw,
    title: "5. Support & Optimize",
    description: "Your business evolves, and so should your systems. We provide ongoing support and tweaks to keep everything running smoothly."
  }
];

export default function Process() {
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
              Our Process
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground font-light"
            >
              A proven methodology to take you from chaos to clarity in weeks, not months.
            </motion.p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line connecting steps */}
            <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/10 md:-translate-x-1/2" />

            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${
                    index % 2 === 0 ? "md:text-right" : "md:flex-row-reverse md:text-left"
                  }`}
                >
                  {/* Content */}
                  <div className="md:w-1/2 md:px-12 pt-2 ml-16 md:ml-0 group">
                    <h3 className="text-3xl font-bold mb-4 text-primary tracking-tight transition-transform group-hover:scale-105">{step.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed font-light">{step.description}</p>
                  </div>

                  {/* Icon Marker */}
                  <div className="absolute left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 w-14 h-14 rounded-full bg-background border-4 border-primary/10 flex items-center justify-center z-10 shadow-2xl">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/40">
                      <step.icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Empty side for layout balance */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
