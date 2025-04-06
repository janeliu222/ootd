
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
              className="flex items-center justify-center bg-[#9b87f5] hover:bg-[#7E69AB] text-white w-[180px] h-[180px] text-base font-medium p-4 leading-tight text-center"
            >
              <span className="mx-auto flex flex-col items-center">
                <span className="block mb-1">Download</span>
                <span className="block mb-1">OOTD</span>
                <span className="block">from iOS</span>
                <span className="block">App Store</span>
              </span>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadSection;
