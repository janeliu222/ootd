
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative py-16 bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary via-background to-background opacity-50" />
      <div className="container relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="text-center space-y-6"
        >
          <h1 className="font-bold tracking-tight text-3xl sm:text-5xl md:text-6xl text-zinc-950">
            Welcome to OOTD
          </h1>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground">
            A private social network where authenticity meets exclusivity.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
