
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Shield, Users, MessageCircle, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Feature = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="feature-card"
  >
    <div className="mb-4 inline-block rounded-xl bg-primary/10 p-3">
      <Icon className="h-6 w-6 text-primary" />
    </div>
    <h3 className="mb-2 text-xl font-semibold">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </motion.div>
);

const Index = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary via-background to-background opacity-50" />
        <div className="container relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Join the exclusive community
            </span>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              Welcome to <span className="gradient-text">No Entry</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
              A private social network where authenticity meets exclusivity. Connect with like-minded individuals in a space
              designed for genuine interactions.
            </p>
            <Button size="lg" className="animate-fade-in">
              Get Started <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Why Choose No Entry?</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Experience social networking reimagined with features designed for meaningful connections.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Feature
              icon={Shield}
              title="Private & Secure"
              description="Your privacy is our priority. Enjoy end-to-end encryption and complete control over your data."
            />
            <Feature
              icon={Users}
              title="Exclusive Community"
              description="Join a carefully curated community of individuals who share your interests and values."
            />
            <Feature
              icon={MessageCircle}
              title="Authentic Conversations"
              description="Engage in meaningful discussions in a space free from spam and artificial engagement."
            />
            <Feature
              icon={Globe}
              title="Global Connections"
              description="Connect with like-minded individuals from around the world while maintaining your privacy."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-primary py-20 text-white">
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-3xl font-bold sm:text-4xl">Ready to Join?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90">
              Be part of an exclusive community where every connection matters.
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-primary hover:bg-white/90 hover:text-primary"
            >
              Request Access
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
