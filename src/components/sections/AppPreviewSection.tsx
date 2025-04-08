import { motion } from "framer-motion";
const AppPreviewSection = () => {
  return <section className="relative py-8 bg-accent-foreground">
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
          <div className="relative w-[180px] h-[360px] rounded-[2rem] border-8 border-neutral-800 bg-black overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-4 bg-neutral-800 rounded-b-2xl"></div>
            <img src="/lovable-uploads/80d36686-0d14-4e28-bd1e-f744c2523bdd.png" alt="OOTD App Preview" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </div>
    </section>;
};
export default AppPreviewSection;