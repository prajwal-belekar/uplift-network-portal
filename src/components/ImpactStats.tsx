import { Card } from "@/components/ui/card";

export const ImpactStats = () => {
  const stats = [
    { number: "1,000+", label: "Lives Impacted" },
    { number: "50+", label: "NGO Partners" },
    { number: "200+", label: "Job Placements" },
    { number: "85%", label: "Success Rate" },
  ];

  return (
    <div className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Card key={stat.label} className="p-6 text-center animate-fade-in">
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};