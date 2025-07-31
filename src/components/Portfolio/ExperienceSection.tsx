import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      icon: "🛡️",
      title: "Cybersecurity Intern",
      company: "BIT Solutions",
      location: "Portharcourt, Rivers State",
      date: "2023",
      description: [
        "Participated in a comprehensive cybersecurity internship program.",
        "Learned foundational cybersecurity concepts, including networking, threat detection, and hands-on labs."
      ]
    },
    {
      icon: "💼",
      title: "Software Engineering Intern",
      company: "Nigeria LNG Limited (NLNG)",
      location: "Rivers State, Nigeria",
      date: "2023",
      description: [
        "Designed, developed, and tested web applications that improved operational efficiency.",
        "Collaborated across departments to gather requirements and ensure software alignment with business goals."
      ]
    },
    {
      icon: "👨‍🏫",
      title: "Cybersecurity Lead",
      company: "GDSC Babcock University",
      location: "Babcock University",
      date: "2023/2024",
      description: [
        "Mentored peers and led cybersecurity study jams, reaching 100+ students.",
        "Organized awareness sessions and workshops on key cybersecurity practices.",
        "Represented the club in campus-wide events and Google-led challenges."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Experience
            </h2>
            <div className="w-24 h-1 bg-hero-gradient mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Building expertise through hands-on experience in cybersecurity, software engineering, and leadership roles.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="shadow-medium hover:shadow-large transition-all duration-300 border-0 bg-card-gradient group hover:scale-[1.02]">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <span className="text-2xl">{exp.icon}</span>
                      </div>
                      <div>
                        <CardTitle className="text-xl text-primary group-hover:text-primary-glow transition-colors">
                          {exp.title}
                        </CardTitle>
                        <p className="text-lg font-semibold text-foreground">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {exp.date}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {exp.description.map((desc, descIndex) => (
                      <li key={descIndex} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{desc}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;