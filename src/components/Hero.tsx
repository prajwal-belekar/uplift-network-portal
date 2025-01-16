import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5 pt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Empowering Lives,
            <span className="text-primary"> Building Futures</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Connecting vulnerable individuals with organizations and opportunities
            for a better tomorrow. Join us in making a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => navigate("/profiles")}
              className="bg-primary hover:bg-primary-hover"
            >
              Find Help
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/ngo")}
            >
              Partner with Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};