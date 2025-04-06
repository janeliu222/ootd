
import { motion } from "framer-motion";

interface FeatureProps {
  icon: React.FC<{ className?: string }>;
  title: string;
  description: string;
}

const Feature = ({ icon: Icon, title, description }: FeatureProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="feature-card"
    >
      <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
        <Icon className="h-5 w-5 text-purple-600" />
      </div>
      <h3 className="mb-1 text-lg font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </motion.div>
  );
};

export default Feature;
