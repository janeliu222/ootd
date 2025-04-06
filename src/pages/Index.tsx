import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import HeroSection from "@/components/sections/HeroSection";
import AppPreviewSection from "@/components/sections/AppPreviewSection";
import DownloadSection from "@/components/sections/DownloadSection";
import ContactSection from "@/components/sections/ContactSection";
import RequestAccessDialog from "@/components/RequestAccessDialog";
const Index = () => {
  const [mounted, setMounted] = useState(false);
  const {
    toast
  } = useToast();
  useEffect(() => {
    setMounted(true);
  }, []);
  const handleAppStoreClick = () => {
    window.open("https://apps.apple.com/ca/app/ootd-exploring-every-day/id6742367628", "_blank");
  };
  const handleContactClick = () => {
    window.location.href = "mailto:eason@flickstudio.com";
  };
  if (!mounted) return null;
  return <div className="min-h-screen flex flex-col bg-white">
      <HeroSection />
      <AppPreviewSection />
      
      
      
      <DownloadSection handleAppStoreClick={handleAppStoreClick} />
      <ContactSection handleContactClick={handleContactClick} />
    </div>;
};
export default Index;