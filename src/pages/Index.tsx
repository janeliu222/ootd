import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Shield, Users, MessageCircle, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
const Feature = ({
  icon: Icon,
  title,
  description
}: {
  icon: any;
  title: string;
  description: string;
}) => {
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5
  }} viewport={{
    once: true
  }} className="feature-card">
      <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
        <Icon className="h-5 w-5 text-purple-600" />
      </div>
      <h3 className="mb-1 text-lg font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </motion.div>;
};
const RequestAccessDialog = () => {
  const [email, setEmail] = useState("");
  const {
    toast
  } = useToast();
  const [open, setOpen] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request received",
      description: "We'll be in touch soon at " + email
    });
    setEmail("");
    setOpen(false);
  };
  return <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="animate-fade-in text-violet-50 bg-violet-600 hover:bg-violet-500 font-semibold">
          Request Access <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Request Access</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <Input type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>
          <Button type="submit" className="w-full text-violet-50 bg-purple-500 hover:bg-purple-400">
            Submit Request
          </Button>
        </form>
      </DialogContent>
    </Dialog>;
};
const Index = () => {
  const [mounted, setMounted] = useState(false);
  const {
    toast
  } = useToast();
  useEffect(() => {
    setMounted(true);
  }, []);
  const handleContactClick = () => {
    toast({
      title: "Contact Email",
      description: "eason@flickstudioinc.com"
    });
  };
  if (!mounted) return null;
  return <div className="h-screen overflow-hidden flex flex-col">
      {/* Hero Section */}
      <section className="relative flex-1 flex items-center justify-center px-4 py-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary via-background to-background opacity-50" />
        <div className="container relative z-10 mx-auto max-w-6xl">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} className="text-center">
            <h1 className="mb-4 font-bold tracking-tight sm:text-5xl md:text-6xl text-zinc-950 text-center text-3xl">
              Welcome to <span className="text-black">NoEntry</span>
            </h1>
            <p className="mx-auto mb-6 max-w-2xl text-base text-muted-foreground font-thin">A private social network where authenticity meets exclusivity. </p>
            <RequestAccessDialog />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      

      {/* CTA Section */}
      <section className="relative py-6 text-white bg-neutral-50">
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} viewport={{
          once: true
        }}>
            
            
            <Button variant="secondary" size="lg" onClick={handleContactClick} className="bg-white hover:bg-white/90 text-zinc-950 font-semibold">
              Contact Us
            </Button>
          </motion.div>
        </div>
      </section>
    </div>;
};
export default Index;