import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-[#9b87f5]/20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-[#7E69AB]">
            Hope Connect
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/about" className="hover:text-[#7E69AB] transition-colors">
              About Us
            </Link>
            <Link to="/profiles" className="hover:text-[#7E69AB] transition-colors">
              Find Help
            </Link>
            <Link to="/ngo" className="hover:text-[#7E69AB] transition-colors">
              NGOs
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="border-[#9b87f5] text-[#7E69AB] hover:bg-[#E5DEFF]">
              Sign In
            </Button>
            <Button className="bg-[#7E69AB] hover:bg-[#6E59A5]">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};