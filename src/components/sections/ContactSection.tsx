import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
interface ContactSectionProps {
  handleContactClick: () => void;
}
const ContactSection = ({
  handleContactClick
}: ContactSectionProps) => {
  return <section className="relative bg-gray-50 py-8">
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
      }} className="text-center">
          <div className="flex justify-center">
            <Button onClick={handleContactClick} className="flex items-center gap-2 px-5 py-2 text-sm sm:text-base text-zinc-700 bg-transparent">
              <Mail className="h-4 w-4" />
              Contact Support
            </Button>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default ContactSection;