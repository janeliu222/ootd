
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
          <p className="mx-auto max-w-2xl text-base text-muted-foreground mb-6">
            Get started with the OOTD app today on your iOS device.
          </p>
          <div className="flex justify-center">
            <Button 
              onClick={handleAppStoreClick} 
              className="flex items-center gap-2 bg-[#9b87f5] hover:bg-[#7E69AB] text-white px-6 py-2 text-base"
            >
              Download from the App Store
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadSection;
