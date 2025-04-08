import { motion } from "framer-motion";
const AppBannerSection = () => {
  return <section className="relative bg-white py-0">
      <div className="container relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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
      }} className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-32 h-32 rounded-3xl overflow-hidden">
              
            </div>
            
          </div>
          
        </motion.div>
      </div>
    </section>;
};
export default AppBannerSection;