
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface DownloadSectionProps {
  handleAppStoreClick: () => void;
}

const DownloadSection = ({ handleAppStoreClick }: DownloadSectionProps) => {
  return (
    <section className="relative bg-gray-50 py-16">
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
              className="flex items-center justify-center bg-black hover:bg-gray-900 text-white w-[200px] h-[200px] text-base font-medium leading-tight text-center rounded-xl shadow-lg"
            >
              <span className="mx-auto flex flex-col items-center justify-between h-full py-6">
                <span className="block text-sm font-medium text-gray-300">Download</span>
                <div className="flex items-center justify-center h-28">
                  <img 
                    src="/lovable-uploads/32b76c0c-b90a-4a46-85ee-f6b8c5c60b6c.png" 
                    alt="OOTD" 
                    className="w-28 object-contain"
                  />
                </div>
                <span className="block text-sm font-medium text-gray-300">from iOS App Store</span>
              </span>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadSection;
