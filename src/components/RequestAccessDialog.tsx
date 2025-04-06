
import { useState } from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const RequestAccessDialog = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("https://formsubmit.co/eason@flickstudioinc.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          email: email,
          subject: "NoEntry Access Request",
          message: `New access request from: ${email}`,
          timestamp: new Date().toISOString(),
          source: window.location.href
        })
      });
      toast({
        title: "Request received",
        description: "We'll be in touch soon at " + email
      });
      setEmail("");
      setOpen(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission error",
        description: "There was a problem sending your request. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild></DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Request Access</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <Input 
              type="email" 
              placeholder="Enter your email" 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
              required 
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-[#9b87f5] hover:bg-[#7E69AB] text-white" 
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Submit Request"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RequestAccessDialog;
