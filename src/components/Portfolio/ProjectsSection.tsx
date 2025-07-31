import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Leaf, Globe } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      icon: <Leaf className="w-8 h-8 text-accent" />,
      title: "Plant Disease Detection App",
      description: "Developed a machine learning–powered web app that detects plant diseases from user-uploaded images. Provides instant feedback and recommended actions for farmers.",
      technologies: ["Machine Learning", "React.js", "Python", "Computer Vision"],
      githubLink: "https://github.com/userIssa/AgroX-V-II",
      liveLink: null,
      image: "🌱"
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Portfolio Website",
      description: "Designed with HTML, CSS, Tailwind, and React.js. Highlights career milestones, projects, and certifications with a modern, responsive design.",
      technologies: ["React.js", "Tailwind CSS", "TypeScript", "Responsive Design"],
      githubLink: null,
      liveLink: "#",
      image: "🌐"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Projects
            </h2>
            <div className="w-24 h-1 bg-hero-gradient mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Showcasing innovative solutions that combine cybersecurity expertise with full-stack development skills.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="shadow-large hover:shadow-glow transition-all duration-300 border-0 bg-card-gradient group hover:scale-[1.02]">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <span className="text-3xl">{project.image}</span>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-primary group-hover:text-primary-glow transition-colors">
                        {project.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3 pt-4">
                    {project.githubLink && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open(project.githubLink, '_blank')}
                        className="flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </Button>
                    )}
                    {project.liveLink && (
                      <Button 
                        variant="default" 
                        size="sm"
                        onClick={() => window.open(project.liveLink, '_blank')}
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* More Projects CTA */}
          <div className="text-center mt-12">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => window.open('https://github.com/NimiOderinde', '_blank')}
            >
              <Github className="w-5 h-5" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;