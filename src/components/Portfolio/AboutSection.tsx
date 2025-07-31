import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-hero-gradient mx-auto rounded-full"></div>
          </div>

          {/* About Content */}
          <Card className="shadow-large border-0 bg-card-gradient">
            <CardContent className="p-8 md:p-12">
              <div className="text-lg leading-relaxed space-y-6 text-foreground">
                <p className="text-xl font-medium text-primary mb-6">
                  Hi, I'm Toluwanimi Oderinde — a curious mind with a BSc in Software Engineering (2024) from Babcock University, Nigeria.
                </p>
                
                <p>
                  I've cultivated skills in cybersecurity, frontend development, and data analysis, and I enjoy applying them in practical, real-world environments. My journey has been shaped by a passion for technology and a deep commitment to creating secure, efficient solutions.
                </p>
                
                <p>
                  I've served as the Cybersecurity Lead for GDSC Babcock and interned at Nigeria LNG Limited and BIT2 Africa. These experiences have given me invaluable insights into both the technical and collaborative aspects of the tech industry.
                </p>
                
                <p className="text-primary font-medium">
                  I bring a can-do attitude, a love for learning, and a strong desire to help people and businesses stay safe online.
                </p>
              </div>

              {/* Skills Highlight */}
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-primary">🛡️</span>
                  </div>
                  <h3 className="font-semibold text-primary">Cybersecurity</h3>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-primary">💻</span>
                  </div>
                  <h3 className="font-semibold text-primary">Full Stack Dev</h3>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-primary">📊</span>
                  </div>
                  <h3 className="font-semibold text-primary">Data Analysis</h3>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-primary">👥</span>
                  </div>
                  <h3 className="font-semibold text-primary">Leadership</h3>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;