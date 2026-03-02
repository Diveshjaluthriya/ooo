import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const studies = [
  {
    client: "Logistics Corp",
    title: "From Manual Excel Tracking to Real-Time Dashboards",
    stats: ["40hrs/week saved", "99% error reduction"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop", // dashboard analytics
    description: "A logistics company was managing 500+ weekly shipments using a shared Excel sheet. We built a custom web portal that auto-syncs with their carrier APIs."
  },
  {
    client: "HealthTech Inc",
    title: "Automating Patient Onboarding Compliance",
    stats: ["3x faster onboarding", "100% compliance rate"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop", // medical tech
    description: "Manual document verification was slowing down patient intake. We implemented an OCR-based verification system that processes documents instantly."
  },
  {
    client: "RetailGiant",
    title: "Unifying Inventory Across 5 Marketplaces",
    stats: ["20% revenue increase", "0 overselling incidents"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?w=800&h=500&fit=crop", // e-commerce warehouse
    description: "Selling on Amazon, Shopify, and eBay meant constant inventory mismatches. We built a centralized inventory hub that syncs stock levels in real-time."
  }
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <div className="pt-32 pb-20 container mx-auto px-4 md:px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">Case Studies</h1>
        <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-20">
          Real results from real businesses. See how we transformed their operations.
        </p>

        <div className="grid gap-20">
          {studies.map((study, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
              <div className="lg:w-1/2 overflow-hidden rounded-2xl border border-border shadow-2xl group">
                {/* Descriptive comment for Unsplash usage */}
                {/* {study.title} visual representation */}
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="lg:w-1/2">
                <div className="text-sm font-bold text-primary mb-2 uppercase tracking-widest">{study.client}</div>
                <h2 className="text-3xl font-bold mb-6">{study.title}</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{study.description}</p>
                
                <div className="flex gap-6 mb-8 border-l-2 border-primary/30 pl-6">
                  {study.stats.map((stat, i) => (
                    <div key={i}>
                      <span className="block text-2xl font-bold text-foreground">{stat.split(' ')[0]}</span>
                      <span className="text-sm text-muted-foreground">{stat.split(' ').slice(1).join(' ')}</span>
                    </div>
                  ))}
                </div>
                
                <Link href="/contact">
                  <Button variant="link" className="p-0 text-primary hover:text-primary/80">
                    Start a similar project <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
