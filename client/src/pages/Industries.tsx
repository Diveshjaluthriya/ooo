import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ShoppingCart, Truck, Activity, Building2, MonitorSmartphone } from "lucide-react";

const industries = [
  {
    icon: MonitorSmartphone,
    name: "SaaS & Tech",
    problem: "Rapid scaling breaks manual onboarding processes.",
    solution: "We automate user provisioning, churn prediction, and customer success workflows."
  },
  {
    icon: ShoppingCart,
    name: "E-Commerce",
    problem: "Inventory sync issues across multiple marketplaces.",
    solution: "Unified inventory management systems and automated order routing bots."
  },
  {
    icon: Truck,
    name: "Logistics",
    problem: "Dispatch inefficiencies and paper-heavy documentation.",
    solution: "Digital bills of lading, automated route optimization, and fleet tracking dashboards."
  },
  {
    icon: Activity,
    name: "Healthcare",
    problem: "Compliance burdens and slow patient data processing.",
    solution: "HIPAA-compliant data pipelines and automated appointment scheduling."
  },
  {
    icon: Building2,
    name: "Real Estate",
    problem: "Lead leakage and slow document turnaround.",
    solution: "Instant lead qualification bots and automated lease generation."
  }
];

export default function Industries() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <div className="pt-32 pb-20 container mx-auto px-4 md:px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">Industries We Serve</h1>
        <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-20">
          Operational efficiency is universal, but the challenges are specific. We tailor our solutions to your sector.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div key={index} className="bg-card border border-border p-8 rounded-2xl hover:bg-card/80 transition-all">
              <div className="mb-6 inline-flex p-3 rounded-lg bg-primary/10 text-primary">
                <industry.icon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{industry.name}</h3>
              
              <div className="space-y-4">
                <div>
                  <span className="text-xs font-bold text-red-400 uppercase tracking-wider">The Problem</span>
                  <p className="text-sm text-muted-foreground mt-1">{industry.problem}</p>
                </div>
                <div>
                  <span className="text-xs font-bold text-green-400 uppercase tracking-wider">Our Solution</span>
                  <p className="text-sm text-muted-foreground mt-1">{industry.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
