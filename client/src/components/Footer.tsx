import { Link } from "wouter";
import { Cpu, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary/20 border-t border-border mt-20 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 cursor-pointer">
              <Cpu className="w-6 h-6 text-primary" />
              <span className="font-display font-bold text-xl">OpsIntellect</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transforming chaotic operations into intelligent, automated systems. Scale without the growing pains.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-foreground">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/process" className="hover:text-primary transition-colors">Our Process</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-foreground">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/case-studies" className="hover:text-primary transition-colors">Case Studies</Link></li>
              <li><Link href="/industries" className="hover:text-primary transition-colors">Industries</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog (Coming Soon)</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-foreground">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-secondary rounded-full hover:bg-primary hover:text-white transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-secondary rounded-full hover:bg-primary hover:text-white transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="mailto:hello@opsintellect.ai" className="p-2 bg-secondary rounded-full hover:bg-primary hover:text-white transition-all">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} OpsIntellect Ai. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-foreground">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
