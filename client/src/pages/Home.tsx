import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Database, Bot, Zap, CheckCircle2, TrendingUp, Cpu, Users, BarChart3, Coffee } from "lucide-react";
import { MagneticButton, SplitText } from "@/components/Interactive";
import { useRef } from "react";
import officeTeam from "@/assets/images/office-team.jpg";
import cafeMeeting from "@/assets/images/cafe-meeting.jpg";
import dataCharts from "@/assets/images/data-charts.jpg";
import heroProfessional from "@/assets/images/hero-professional.jpg";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground grainy-bg selection:bg-primary/20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-60 md:pb-48 container mx-auto px-4 md:px-6 overflow-hidden min-h-[90vh] flex flex-col justify-center">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-b-[60px] md:rounded-[80px]">
          <img 
            src={heroProfessional} 
            alt="Professional Working" 
            className="w-full h-full object-cover opacity-60 grayscale contrast-125 brightness-50 scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block py-2 px-4 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-semibold mb-8 tracking-wider uppercase"
            >
              Operations Intelligence for Modern Business
            </motion.span>
            
            <h1 className="text-6xl md:text-8xl lg:text-[140px] font-bold leading-[0.9] mb-10 tracking-tighter">
              <SplitText text="Turn Messy Ops" /> <br />
              <span className="text-gradient">
                <SplitText text="Into Systems" />
              </span>
            </h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="text-xl md:text-3xl text-muted-foreground mb-14 max-w-3xl mx-auto leading-tight font-light"
            >
              We automate your busywork, unify your data, and build the custom internal tools your business needs to scale.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <MagneticButton>
                <Link href="/contact">
                  <Button size="lg" className="rounded-full h-20 px-12 text-xl bg-primary hover:bg-primary/90 shadow-2xl shadow-primary/40 group">
                    Book Strategy Call 
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <ArrowRight className="ml-3 w-6 h-6" />
                    </motion.span>
                  </Button>
                </Link>
              </MagneticButton>
              
              <MagneticButton>
                <Link href="/process">
                  <Button variant="outline" size="lg" className="rounded-full h-20 px-12 text-xl border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm">
                    Free Workflow Audit
                  </Button>
                </Link>
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust & Human Experience Section */}
      <section className="py-24 bg-secondary/5 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl aspect-[4/5]"
            >
              <img src={officeTeam} alt="Team Collaboration" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Boutique Partnership</h3>
                <p className="text-white/70">Not a faceless agency. We integrate directly with your team.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative overflow-hidden rounded-3xl aspect-[4/5]"
            >
              <img src={cafeMeeting} alt="Collaborative Discussion" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <Coffee className="w-10 h-10 text-indigo-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Strategic Clarity</h3>
                <p className="text-white/70">Turning complex problems into conversational solutions.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative overflow-hidden rounded-3xl aspect-[4/5]"
            >
              <img src={dataCharts} alt="Data Analysis" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <BarChart3 className="w-10 h-10 text-purple-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Data-Driven Results</h3>
                <p className="text-white/70">Excel dashboards and automated reporting that scale.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section with Scroll Reactive Timeline */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">Why Work With Us?</h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">We don't just write code. We build the operational backbone of your company, transforming chaos into intelligent, automated systems.</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-32">
            {[
              {
                step: "01",
                title: "Deep Audit",
                desc: "We dive into your messy spreadsheets and fragmented tools to map every single operational bottleneck.",
                icon: <Database className="w-8 h-8" />,
                color: "blue"
              },
              {
                step: "02",
                title: "Custom Diagnosis",
                desc: "We design a tailored intelligent system architecture that unifies your data and eliminates manual work.",
                icon: <Zap className="w-8 h-8" />,
                color: "indigo"
              },
              {
                step: "03",
                title: "Scale & Automate",
                desc: "We deploy custom internal tools and bots that run 24/7, allowing you to grow without adding headcount.",
                icon: <Bot className="w-8 h-8" />,
                color: "purple"
              }
            ].map((item, i) => (
              <ProcessStep key={i} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* ROI Impact Section */}
      <section className="py-32 bg-secondary/10 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">Operational Intelligence <br /> That Scales.</h2>
              <div className="space-y-12">
                <div className="p-8 rounded-3xl bg-card border border-border/50 relative group">
                  <div className="text-6xl font-bold text-primary mb-2">40hrs+</div>
                  <div className="text-xl font-medium">Saved per week per ops manager</div>
                  <div className="mt-4 text-muted-foreground">Manual reporting and Excel data entry eliminated through intelligent automation.</div>
                </div>
                <div className="p-8 rounded-3xl bg-card border border-border/50 relative group">
                  <div className="text-6xl font-bold text-indigo-400 mb-2">70%</div>
                  <div className="text-xl font-medium">Reduction in manual workload</div>
                  <div className="mt-4 text-muted-foreground">Automated validation layers across all internal CRM and logistics workflows.</div>
                </div>
              </div>
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative aspect-square rounded-[60px] overflow-hidden bg-gradient-to-br from-primary/20 to-indigo-500/20 border border-white/10 group"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-12">
                  <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                    <TrendingUp className="w-16 h-16 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Scalability Unlocked</h3>
                  <p className="text-muted-foreground text-lg">Our clients typically see a 30% reduction in operational overhead within 90 days. Stop managing chaos. Start building systems.</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32 container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">Ready to scale?</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Book a free 30-minute strategy call. We'll audit your current workflow and propose a roadmap for high-energy automation.
            </p>
            <div className="flex gap-8">
              <div className="flex flex-col gap-2">
                <span className="text-5xl font-bold text-primary">30%</span>
                <span className="text-muted-foreground uppercase tracking-widest text-xs font-bold">Cost Reduction</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="flex flex-col gap-2">
                <span className="text-5xl font-bold text-indigo-400">20hr+</span>
                <span className="text-muted-foreground uppercase tracking-widest text-xs font-bold">Weekly Savings</span>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ProcessStep({ step, title, desc, icon, color }: { step: string; title: string; desc: string; icon: React.ReactNode; color: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]));
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]));

  return (
    <motion.div 
      ref={ref}
      style={{ opacity, scale }}
      className="flex flex-col md:flex-row gap-12 items-center"
    >
      <div className="flex-shrink-0 w-32 h-32 rounded-full border-2 border-primary/20 flex items-center justify-center text-4xl font-bold font-display relative">
        <span className="z-10">{step}</span>
        <motion.div 
          style={{ scale: scrollYProgress }}
          className={`absolute inset-0 bg-${color}-500/10 rounded-full`}
        />
      </div>
      <div>
        <div className={`mb-4 text-${color}-400`}>{icon}</div>
        <h3 className="text-3xl font-bold mb-4">{title}</h3>
        <p className="text-xl text-muted-foreground leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}
