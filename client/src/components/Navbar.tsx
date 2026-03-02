import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Services", href: "/services" },
  { name: "Process", href: "/process" },
  { name: "Industries", href: "/industries" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "About", href: "/about" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const { scrollY } = useScroll();
  
  // Header behavior: shrink on scroll down, expand on scroll up
  const height = useTransform(scrollY, [0, 100], [90, 70]);
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(4, 10, 22, 0)", "rgba(4, 10, 22, 0.8)"]
  );
  const filter = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(16px)"]);
  const boxShadow = useTransform(
    scrollY,
    [0, 100],
    ["none", "0 4px 20px rgba(0, 0, 0, 0.3)"]
  );

  return (
    <>
      <motion.nav
        style={{
          height,
          backgroundColor,
          filter,
          boxShadow,
        }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex items-center"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Brand Logo - Left */}
          <Link href="/" className="flex items-center gap-2 group cursor-pointer z-[60]">
            <motion.div 
              whileHover={{ rotate: 180 }}
              className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors"
            >
              <Cpu className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            </motion.div>
            <span className="font-display font-bold text-lg md:text-xl tracking-tight text-white">
              OpsIntellect<span className="text-primary">.ai</span>
            </span>
          </Link>

          {/* Desktop Nav - Centered */}
          <div className="hidden md:flex items-center gap-8 bg-white/5 backdrop-blur-md px-6 py-2 rounded-full border border-white/10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-all hover:text-primary relative group",
                  location === item.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {item.name}
                <motion.span 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
                  initial={false}
                  animate={{ width: location === item.href ? "100%" : "0%" }}
                />
              </Link>
            ))}
            <div className="w-px h-4 bg-white/10 mx-2" />
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-5 h-9 text-xs shadow-lg shadow-primary/20 transition-transform hover:scale-105 active:scale-95">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Desktop Right Spacer (to keep nav centered) */}
          <div className="hidden md:block w-[180px]" />

          {/* Mobile Hamburger - Right */}
          <button
            className="md:hidden z-[60] p-2 text-white bg-white/5 rounded-lg border border-white/10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[55] md:hidden bg-background/95 backdrop-blur-2xl flex flex-col pt-32 px-8"
          >
            <div className="flex flex-col gap-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "text-4xl font-display font-bold transition-colors",
                      location === item.href ? "text-primary" : "text-foreground/60 hover:text-primary"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="pt-8 mt-auto mb-12"
              >
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full py-8 text-xl rounded-2xl bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20">
                    Get Started
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
