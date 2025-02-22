
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
  const { toast } = useToast();
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
        <Button size="lg" className="animate-fade-in bg-[#9b87f5] hover:bg-[#7E69AB] text-white font-semibold shadow-lg transition-all duration-300">
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
          <Button type="submit" className="w-full bg-[#9b87f5] hover:bg-[#7E69AB] text-white">
            Submit Request
          </Button>
        </form>
      </DialogContent>
    </Dialog>;
};

const Index = () => {
  const [mounted, setMounted] = useState(false);
  const { toast } = useToast();

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

  return <div className="min-h-screen flex flex-col bg-white">
      {/* Hero Section */}
      <section className="relative py-12 bg-white">
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

      {/* App Preview Section */}
      <section className="relative bg-white py-0">
        <div className="container mx-auto px-4">
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
        }} className="flex justify-center bg-white">
            <div className="relative w-[240px] h-[480px] rounded-[2.5rem] border-8 border-neutral-800 bg-black overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-5 bg-neutral-800 rounded-b-2xl"></div>
              <img src="/lovable-uploads/80d36686-0d14-4e28-bd1e-f744c2523bdd.png" alt="NoEntry App Preview" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-6 bg-white">
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
