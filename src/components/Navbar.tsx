import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">
            Hope Connect
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/about" className="hover:text-primary transition-colors">
              About Us
            </Link>
            <Link to="/profiles" className="hover:text-primary transition-colors">
              Find Help
            </Link>
            <Link to="/ngo" className="hover:text-primary transition-colors">
              NGOs
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline">Sign In</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};