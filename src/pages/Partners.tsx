import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, Search } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Partners = () => {
  const ngoPartners = [
    {
      name: "Child Care Foundation",
      logo: "/placeholder.svg",
      focusAreas: ["Child Welfare", "Education", "Healthcare"],
      description: "Dedicated to providing comprehensive care and support for children in need through education and healthcare initiatives.",
    },
    {
      name: "Women Empowerment Network",
      logo: "/placeholder.svg",
      focusAreas: ["Women's Rights", "Education", "Employment"],
      description: "Empowering women through skill development, education, and employment opportunities to build sustainable futures.",
    },
    {
      name: "Healthcare for All",
      logo: "/placeholder.svg",
      focusAreas: ["Healthcare", "Mental Health", "Rehabilitation"],
      description: "Providing accessible healthcare services and mental health support to underserved communities.",
    },
  ];

  const corporatePartners = [
    {
      name: "Tech Solutions Inc",
      logo: "/placeholder.svg",
      industry: "Technology",
      description: "Providing innovative technology solutions and digital skills training to support victim rehabilitation programs.",
    },
    {
      name: "Healthcare Plus",
      logo: "/placeholder.svg",
      industry: "Healthcare",
      description: "Supporting medical care and rehabilitation services for victims through our network of healthcare facilities.",
    },
    {
      name: "Global Finance Group",
      logo: "/placeholder.svg",
      industry: "Finance",
      description: "Offering financial literacy programs and employment opportunities for survivors rebuilding their lives.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center bg-gradient-to-r from-[#7E69AB] to-[#FEC6A1]">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4 font-heading">Our Esteemed Partners</h1>
          <p className="text-xl mb-8 font-light">Together, we create lasting change for victims in need.</p>
          <Button 
            size="lg" 
            className="bg-[#FEC6A1] hover:bg-[#FDB483] text-[#7E69AB]"
          >
            Become a Partner
          </Button>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
          <div className="relative w-full md:w-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input 
              type="search" 
              placeholder="Search partners..." 
              className="pl-10 w-full md:w-[300px]"
            />
          </div>
          <div className="flex flex-wrap gap-4">
            <select className="px-4 py-2 border rounded-md bg-white">
              <option value="">Focus Area</option>
              <option value="education">Education</option>
              <option value="healthcare">Healthcare</option>
              <option value="childcare">Child Care</option>
            </select>
            <select className="px-4 py-2 border rounded-md bg-white">
              <option value="">Location</option>
              <option value="north">North</option>
              <option value="south">South</option>
              <option value="east">East</option>
              <option value="west">West</option>
            </select>
          </div>
        </div>
      </section>

      {/* NGO Partners Section */}
      <section className="container mx-auto py-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Trusted NGO Partners</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ngoPartners.map((partner) => (
            <Card key={partner.name} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="h-32 w-32 mx-auto mb-4 object-contain"
                />
                <CardTitle className="text-center">{partner.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {partner.focusAreas.map((area) => (
                    <span 
                      key={area}
                      className="px-3 py-1 bg-[#E5DEFF] text-[#7E69AB] rounded-full text-sm"
                    >
                      {area}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600">{partner.description}</p>
              </CardContent>
              <CardFooter className="justify-center">
                <Button variant="outline">Learn More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Corporate Partners Section */}
      <section className="container mx-auto py-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Trusted Corporate Partners</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {corporatePartners.map((partner) => (
            <Card key={partner.name} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="h-32 w-32 mx-auto mb-4 object-contain"
                />
                <CardTitle className="text-center">{partner.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <span className="px-3 py-1 bg-[#E5DEFF] text-[#7E69AB] rounded-full text-sm">
                    {partner.industry}
                  </span>
                </div>
                <p className="text-gray-600">{partner.description}</p>
              </CardContent>
              <CardFooter className="justify-center">
                <Button variant="outline">Learn More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer with Social Links */}
      <section className="bg-[#7E69AB] text-white py-12 mt-auto">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="hover:text-[#FEC6A1] transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-[#FEC6A1] transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-[#FEC6A1] transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
          </div>
          <Button 
            size="lg"
            className="bg-[#FEC6A1] hover:bg-[#FDB483] text-[#7E69AB]"
          >
            Become a Partner
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partners;