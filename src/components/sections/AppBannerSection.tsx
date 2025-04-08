
import { motion } from "framer-motion";
const AppBannerSection = () => {
  return <section className="relative bg-black py-16">
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
      }} className="flex flex-col items-center justify-center">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-32 h-32 rounded-3xl overflow-hidden">
              <img src="/lovable-uploads/c0836107-2e44-4514-91c4-1e9cedb30535.png" alt="OOTD App Icon" className="w-full h-full object-cover" />
            </div>
            <div className="text-white text-center md:text-left">
              
              <p className="text-xl md:text-2xl text-gray-400 text-right">
                OOTD Sharing Community
              </p>
            </div>
          </div>
          
        </motion.div>
      </div>
    </section>;
};
export default AppBannerSection;
