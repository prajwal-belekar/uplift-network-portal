import { Card } from "@/components/ui/card";

export const ImpactStats = () => {
  const stats = [
    { number: "1,000+", label: "Lives Impacted" },
    { number: "50+", label: "NGO Partners" },
    { number: "200+", label: "Job Placements" },
    { number: "85%", label: "Success Rate" },
  ];

  return (
    <div className="py-16 bg-gradient-to-r from-[#E5DEFF] to-[#FDE1D3]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Card 
              key={stat.label} 
              className="p-6 text-center animate-fade-in bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-[#9b87f5]/20"
            >
              <div className="text-3xl font-bold text-[#7E69AB] mb-2">{stat.number}</div>
              <div className="text-[#6E59A5]">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};