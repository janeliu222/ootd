
import { motion } from "framer-motion";

const AppBannerSection = () => {
  return (
    <section className="relative bg-black py-16">
      <div className="container relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{
            opacity: 0,
            y: 20
          }} 
          whileInView={{
            opacity: 1,
            y: 0
          }} 
          transition={{
            duration: 0.5
          }} 
          viewport={{
            once: true
          }} 
          className="flex flex-col items-center justify-center text-center"
        >
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-3xl mx-auto">
            <div className="w-32 h-32 rounded-3xl overflow-hidden">
              <img 
                src="/lovable-uploads/bfc6d615-0237-4ab3-a611-846a85d35230.png" 
                alt="OOTD App Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-2">OOTD: Exploring Every Day</h2>
              <p className="text-xl text-gray-300">OOTD Sharing Community</p>
            </div>
          </div>
          
          <div className="mt-8 bg-white p-4 rounded-xl w-[200px] h-[200px] flex items-center justify-center">
            <img 
              src="/lovable-uploads/bfc6d615-0237-4ab3-a611-846a85d35230.png" 
              alt="OOTD QR Code" 
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppBannerSection;
