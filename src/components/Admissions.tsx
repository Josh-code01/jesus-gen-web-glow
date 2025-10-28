import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { GraduationCap, FileText, Calendar, CheckCircle } from 'lucide-react';

const Admissions = () => {
  const steps = [
    {
      icon: FileText,
      title: 'Submit Application',
      description: 'Complete the online application form with required documents',
    },
    {
      icon: Calendar,
      title: 'Schedule Interview',
      description: 'Attend an interview with our admissions team',
    },
    {
      icon: CheckCircle,
      title: 'Receive Decision',
      description: 'Get your admission decision within 2 weeks',
    },
    {
      icon: GraduationCap,
      title: 'Enrollment',
      description: 'Complete enrollment and join our community',
    },
  ];

  const requirements = [
    'Birth certificate',
    'Recent passport-size photographs',
    'Previous school report cards',
    'Completed application form',
    'Medical records',
  ];

  return (
    <section id="admissions" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Admissions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our community of learners. We welcome students who are eager to grow
            and excel in heart, head, and hand.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 card-hover">
            <h3 className="text-2xl font-bold text-foreground mb-6">Application Process</h3>
            <div className="space-y-6">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>

          <Card className="p-8 card-hover">
            <h3 className="text-2xl font-bold text-foreground mb-6">Required Documents</h3>
            <ul className="space-y-3 mb-8">
              {requirements.map((req, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{req}</span>
                </li>
              ))}
            </ul>

            <div className="bg-primary/5 rounded-lg p-6">
              <h4 className="font-semibold text-foreground mb-2">Contact Admissions</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Have questions? Our admissions team is here to help.
              </p>
              <div className="space-y-2 text-sm">
                <p className="text-foreground">
                  <span className="font-medium">Phone:</span> 0592 221 898
                </p>
                <p className="text-foreground">
                  <span className="font-medium">Email:</span> jesusgenerationschools@gmail.com
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center">
          <Button 
            className="accent-button text-lg px-8 py-6"
            asChild
          >
            <a href="/application-form.pdf" download="Jesus-Generation-School-Application-Form.pdf">
              Download Application Form
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Admissions;
