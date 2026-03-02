import { useState, useEffect, useRef } from "react";
  import { motion, AnimatePresence } from "framer-motion";
  import { MessageSquare, X, Send, Bot, User, Loader2 } from "lucide-react";
  import { Button } from "@/components/ui/button";
  import { Input } from "@/components/ui/input";
  import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
  import { ScrollArea } from "@/components/ui/scroll-area";

  type Message = {
    id: string;
    role: "user" | "bot";
    content: string;
    timestamp: Date;
  };

  export function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
      {
        id: "1",
        role: "bot",
        content: "Hello! I'm the OpsIntellect AI assistant. How can I help you optimize your business operations today?",
        timestamp: new Date(),
      },
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    }, [messages, isOpen]);

    const handleSend = async () => {
      if (!input.trim() || isLoading) return;

      const userMessage: Message = {
        id: Date.now().toString(),
        role: "user",
        content: input,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMessage]);
      setInput("");
      setIsLoading(true);

      // Simulate AI response logic
      setTimeout(() => {
        let botResponse = "That's a great question about our automation services. Would you like to schedule a free workflow audit to discuss this further?";
        
        const lowerInput = input.toLowerCase();
        if (lowerInput.includes("service") || lowerInput.includes("what do you do")) {
          botResponse = "We specialize in Data Operations, Workflow Automation, and Custom Internal Tools. Our goal is to turn your messy ops into intelligent systems.";
        } else if (lowerInput.includes("price") || lowerInput.includes("cost")) {
          botResponse = "Our pricing is tailored to the complexity of your systems. Most clients start with a Free Workflow Audit to identify high-ROI automation opportunities.";
        } else if (lowerInput.includes("contact") || lowerInput.includes("email")) {
          botResponse = "You can reach us at opsintellect.ai@gmail.com or via the contact form on our Contact page.";
        }

        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: "bot",
          content: botResponse,
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, botMessage]);
        setIsLoading(false);
      }, 1000);
    };

    return (
      <div className="fixed bottom-6 right-6 z-[100]">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="mb-4"
            >
              <Card className="w-[350px] sm:w-[400px] h-[500px] flex flex-col shadow-2xl border-primary/20 bg-background/95 backdrop-blur-xl">
                <CardHeader className="bg-primary p-4 rounded-t-xl flex flex-row items-center justify-between space-y-0">
                  <CardTitle className="text-white text-lg flex items-center gap-2">
                    <Bot className="w-5 h-5" />
                    OpsIntellect Assistant
                  </CardTitle>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-white hover:bg-white/20 h-8 w-8"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </CardHeader>
                <CardContent className="flex-1 p-0 overflow-hidden">
                  <ScrollArea ref={scrollRef} className="h-full p-4">
                    <div className="space-y-4">
                      {messages.map((msg) => (
                        <div
                          key={msg.id}
                          className={cn(
                            "flex w-max max-w-[80%] flex-col gap-2 rounded-lg px-3 py-2 text-sm",
                            msg.role === "user"
                              ? "ml-auto bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                          )}
                        >
                          {msg.content}
                        </div>
                      ))}
                      {isLoading && (
                        <div className="flex w-max max-w-[80%] items-center gap-2 rounded-lg bg-muted px-3 py-2 text-sm text-muted-foreground">
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Thinking...
                        </div>
                      )}
                    </div>
                  </ScrollArea>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <form 
                    onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                    className="flex w-full items-center space-x-2"
                  >
                    <Input
                      placeholder="Type your message..."
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      className="flex-1 bg-white/5 border-white/10"
                    />
                    <Button type="submit" size="icon" className="shrink-0" disabled={isLoading}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </form>
                </CardFooter>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="icon"
          className="h-14 w-14 rounded-full shadow-2xl transition-transform hover:scale-110 active:scale-95 bg-primary"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
        </Button>
      </div>
    );
  }

  const cn = (...inputs: any[]) => inputs.filter(Boolean).join(" ");
  