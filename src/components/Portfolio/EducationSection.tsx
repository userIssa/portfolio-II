import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const EducationSection = () => {
  const education = {
    degree: "BSc. Software Engineering",
    institution: "Babcock University, Nigeria",
    years: "2020 – 2024 (Graduated)",
    status: "Graduated"
  };

  const certifications = [
    {
      name: "Google Cybersecurity Certificate",
      issuer: "Google",
      type: "Professional Certificate"
    },
    {
      name: "Mastercard Cybersecurity Job Simulation",
      issuer: "Mastercard",
      type: "Simulation"
    },
    {
      name: "OPSWAT Introduction to Critical Infrastructure Protection",
      issuer: "OPSWAT",
      type: "Certification"
    },
    {
      name: "Cybersecurity for Beginners",
      issuer: "LinkedIn Learning",
      type: "Course"
    },
    {
      name: "Python for Security Automation",
      issuer: "LinkedIn Learning",
      type: "Course"
    },
    {
      name: "Intro to Pentesting Labs",
      issuer: "TryHackMe",
      type: "Labs"
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Education & Certifications
            </h2>
            <div className="w-24 h-1 bg-hero-gradient mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Continuous learning and professional development in cybersecurity and software engineering.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Education */}
            <Card className="shadow-large border-0 bg-card-gradient">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-primary">Education</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-6 bg-primary/5 rounded-lg border border-primary/10">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {education.degree}
                  </h3>
                  <p className="text-lg font-semibold text-foreground mb-2">
                    {education.institution}
                  </p>
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="default" className="bg-accent">
                      {education.years}
                    </Badge>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {education.status}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">
                    Comprehensive program covering software development, cybersecurity fundamentals, 
                    data structures, algorithms, and project management.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="shadow-large border-0 bg-card-gradient">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                    <Award className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-primary">Certifications</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="p-4 bg-accent/5 rounded-lg border border-accent/10 hover:bg-accent/10 transition-colors">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h4 className="font-semibold text-primary mb-1">
                            {cert.name}
                          </h4>
                          <p className="text-sm text-muted-foreground mb-2">
                            {cert.issuer}
                          </p>
                          <Badge variant="outline" className="text-xs">
                            {cert.type}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open('https://linkedin.com/in/toluwanimi-oderinde', '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View All Certifications
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;