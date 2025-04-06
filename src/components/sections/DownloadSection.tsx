
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface DownloadSectionProps {
  handleAppStoreClick: () => void;
}

const DownloadSection = ({ handleAppStoreClick }: DownloadSectionProps) => {
  return (
    <section className="relative bg-gray-50 py-8">
      <div className="container relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex justify-center">
            <Button 
              onClick={handleAppStoreClick} 
              className="flex items-center justify-center bg-black hover:bg-gray-900 text-white w-[180px] h-[180px] text-base font-medium p-4 leading-tight text-center rounded-xl"
            >
              <span className="mx-auto flex flex-col items-center">
                <span className="block text-sm mb-2 text-gray-300">Download</span>
                <img 
                  src="/lovable-uploads/7515c51c-8397-4cf8-8e2a-58d2d53f26bf.png" 
                  alt="OOTD" 
                  className="w-24 h-auto my-1"
                />
                <span className="block text-sm text-gray-300">from iOS App Store</span>
              </span>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadSection;
