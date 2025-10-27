import { Target, Heart, Lightbulb, Shield } from 'lucide-react';

const Mission = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Striving for the highest standards in everything we do.',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Building character and ethical leadership in our students.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Embracing creativity and forward-thinking approaches.',
    },
    {
      icon: Shield,
      title: 'Community',
      description: 'Fostering a safe, inclusive, and supportive environment.',
    },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Mission Statement */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Mission & Vision</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                At Jesus Generation Schools, we are committed to providing a world-class education that nurtures not just academic excellence, but also strong moral character and leadership qualities.
              </p>
              <p>
                Our vision is to develop confident, compassionate, and competent individuals who will become positive change-makers in their communities and beyond.
              </p>
              <p className="font-semibold text-primary">
                "Educating minds, nurturing hearts, shaping futures."
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-card p-6 rounded-2xl border border-border/50 card-hover animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
