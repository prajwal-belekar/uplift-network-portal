import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";

const Profiles = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Dummy data for demonstration
  const victims = [
    {
      id: 1,
      name: "Sarah M.",
      category: "Domestic Abuse Survivor",
      location: "New York",
      skills: ["Teaching", "Counseling"],
      jobReadiness: "Trained",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      id: 2,
      name: "John D.",
      category: "Veteran",
      location: "Texas",
      skills: ["IT", "Project Management"],
      jobReadiness: "Seeking Support",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F2FCE2]/50 to-[#D3E4FD]/50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-24 pb-12 bg-gradient-to-r from-[#7E69AB]/10 to-[#FEC6A1]/10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-[#7E69AB] mb-4">
            Find a Victim in Need of Help
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Explore, filter, and connect with victims based on their skills, location, and needs.
            Your support can make a difference in someone's life.
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Input
            placeholder="Search by name, skill, or location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="md:col-span-2"
          />
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="orphan">Orphan</SelectItem>
              <SelectItem value="veteran">Veteran</SelectItem>
              <SelectItem value="survivor">Abuse Survivor</SelectItem>
              <SelectItem value="refugee">Refugee</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Job Readiness" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="trained">Trained</SelectItem>
              <SelectItem value="needs-training">Needs Training</SelectItem>
              <SelectItem value="seeking">Seeking Support</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Victim Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {victims.map((victim) => (
            <Card key={victim.id} className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-[#9b87f5]/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={victim.image} />
                    <AvatarFallback className="bg-[#E5DEFF] text-[#7E69AB]">
                      {victim.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-lg text-[#7E69AB]">{victim.name}</h3>
                    <p className="text-sm text-gray-600">{victim.category}</p>
                    <p className="text-sm text-gray-600">{victim.location}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {victim.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-2 py-1 rounded-full bg-[#E5DEFF] text-[#7E69AB]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button 
                  variant="outline" 
                  className="flex-1 border-[#9b87f5] text-[#7E69AB] hover:bg-[#E5DEFF]"
                >
                  Contact NGO
                </Button>
                <Button 
                  className="flex-1 bg-[#7E69AB] hover:bg-[#6E59A5]"
                >
                  Support
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default Profiles;