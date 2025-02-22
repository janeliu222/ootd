
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Shield, Users, MessageCircle, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

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

const Index = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
              Welcome to <span className="text-black">No Entry</span>
            </h1>
            <p className="mx-auto mb-6 max-w-2xl text-base text-muted-foreground">A private social network where authenticity meets exclusivity. </p>
            <Button size="lg" className="animate-fade-in text-violet-50 bg-purple-500 hover:bg-purple-400">
              Request Access <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      

      {/* CTA Section */}
      <section className="relative py-6 text-white bg-violet-500 hover:bg-violet-400">
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
            <h2 className="mb-3 text-2xl font-bold sm:text-3xl">Ready to Join?</h2>
            <p className="mx-auto mb-4 max-w-2xl text-sm opacity-90">
              Be part of an exclusive community where every connection matters.
            </p>
            <Button variant="secondary" size="lg" className="bg-white hover:bg-white/90 text-zinc-950">
              Contact Us
            </Button>
          </motion.div>
        </div>
      </section>
    </div>;
};

export default Index;
