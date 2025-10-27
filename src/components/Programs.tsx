import { Book, Microscope, Palette, Music, Trophy, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Programs = () => {
  const programs = [
    {
      icon: Book,
      title: 'Core Academics',
      description: 'Rigorous curriculum aligned with international standards, fostering critical thinking and analytical skills.',
      color: 'text-primary',
    },
    {
      icon: Microscope,
      title: 'STEM Excellence',
      description: 'State-of-the-art laboratories and innovative programs in Science, Technology, Engineering, and Mathematics.',
      color: 'text-primary',
    },
    {
      icon: Palette,
      title: 'Creative Arts',
      description: 'Nurturing creativity through visual arts, drama, and design thinking workshops.',
      color: 'text-accent',
    },
    {
      icon: Music,
      title: 'Music & Performance',
      description: 'Comprehensive music education with instruments, vocals, and regular performances.',
      color: 'text-primary',
    },
    {
      icon: Trophy,
      title: 'Sports & Athletics',
      description: 'Professional coaching in various sports, promoting teamwork, discipline, and physical wellness.',
      color: 'text-accent',
    },
    {
      icon: Globe,
      title: 'Global Citizenship',
      description: 'International programs, exchange opportunities, and cultural awareness initiatives.',
      color: 'text-primary',
    },
  ];

  return (
    <section id="academics" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Academic Programs</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive education designed to develop well-rounded individuals prepared for global success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <Card
                key={program.title}
                className="card-hover bg-card border-border/50 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className={`w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 ${program.color}`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <CardTitle className="text-xl font-bold">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {program.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;
