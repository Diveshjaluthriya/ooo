import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <div className="pt-32 pb-20 container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center">We Are System Builders.</h1>
          
          <div className="prose prose-invert prose-lg max-w-none mb-20">
            <p className="text-2xl font-light leading-relaxed text-muted-foreground mb-8">
              We believe that <span className="text-foreground font-medium">chaos is a choice</span>. In the modern age, no business should be held back by manual data entry, disconnected tools, or processes that live entirely in one person's head.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 my-16">
              <div>
                <h3 className="text-xl font-bold mb-4 text-foreground">Our Mission</h3>
                <p className="text-muted-foreground">
                  To democratize operational intelligence. We bring enterprise-grade automation and data systems to growing businesses, allowing them to compete with giants without the bloat.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-foreground">Our Philosophy</h3>
                <p className="text-muted-foreground">
                  Build it once, run it forever. We don't do quick fixes. We build robust, scalable infrastructure that grows with you. If a task can be automated, it should be.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 mt-16 text-foreground">Why OpsIntellect?</h2>
            <p className="text-muted-foreground">
              We aren't just developers. We are operations experts who know how to code. We understand that technology is useless if it doesn't solve a business problem. We bridge the gap between "technical possibility" and "business reality."
            </p>
          </div>

          <div className="bg-secondary/10 rounded-3xl p-8 md:p-12 border border-border">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold">Join the Automation Revolution</h2>
              <p className="text-muted-foreground mt-2">Let's build something great together.</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
