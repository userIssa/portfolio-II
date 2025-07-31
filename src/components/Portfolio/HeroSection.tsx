import { Button } from "@/components/ui/button";
import { ArrowDown, Download, FileText, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-hero-gradient-light relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-primary rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-16 h-16 border-2 border-accent rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 border-2 border-primary/50 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 bg-card-gradient rounded-full shadow-large flex items-center justify-center border-4 border-primary/20">
            <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center">
              <span className="text-4xl font-bold text-primary">TO</span>
            </div>
          </div>

          {/* Name and Role */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4 animate-slide-in">
            Toluwanimi Oderinde
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-accent mb-6 animate-slide-in" style={{ animationDelay: '0.2s' }}>
            Cybersecurity Analyst & Full Stack Developer
          </h2>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
            I'm a resilient problem-solver passionate about safeguarding digital assets and building clean, 
            user-focused web applications. With hands-on experience in cybersecurity, software engineering, 
            and leadership, I'm committed to driving secure and scalable tech solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              variant="hero" 
              size="lg" 
              className="min-w-48"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              <FileText className="w-5 h-5" />
              View Resume
            </Button>
            <Button 
              variant="cta" 
              size="lg" 
              className="min-w-48"
              onClick={() => scrollToSection('projects')}
            >
              <Github className="w-5 h-5" />
              See My Projects
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button 
              variant="ghost" 
              size="icon"
              className="rounded-full hover:bg-primary hover:text-primary-foreground"
              onClick={() => window.open('mailto:toluwanimi.oderinde@domain.com')}
            >
              <Mail className="w-5 h-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="rounded-full hover:bg-primary hover:text-primary-foreground"
              onClick={() => window.open('https://linkedin.com/in/toluwanimi-oderinde', '_blank')}
            >
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="rounded-full hover:bg-primary hover:text-primary-foreground"
              onClick={() => window.open('https://github.com/NimiOderinde', '_blank')}
            >
              <Github className="w-5 h-5" />
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <Button 
              variant="ghost" 
              size="icon"
              className="rounded-full"
              onClick={() => scrollToSection('about')}
            >
              <ArrowDown className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;