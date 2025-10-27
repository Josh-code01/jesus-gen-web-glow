import { Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const News = () => {
  const announcements = [
    {
      title: 'New Science Lab Opening',
      date: 'October 15, 2025',
      category: 'Facilities',
      description: 'State-of-the-art science laboratory equipped with modern technology opens its doors to students.',
      featured: true,
    },
    {
      title: 'Sports Day Championship',
      date: 'October 8, 2025',
      category: 'Events',
      description: 'Annual inter-house sports championship showcasing student talent and sportsmanship.',
      featured: false,
    },
    {
      title: 'Scholarship Program Launch',
      date: 'September 30, 2025',
      category: 'Admissions',
      description: 'New merit-based scholarship program for exceptional students. Applications now open.',
      featured: true,
    },
    {
      title: 'Parent-Teacher Conference',
      date: 'November 2, 2025',
      category: 'Events',
      description: 'Join us for our quarterly parent-teacher conference to discuss student progress.',
      featured: false,
    },
  ];

  return (
    <section id="gallery" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Latest <span className="text-primary">News & Events</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest happenings and announcements from our vibrant school community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {announcements.map((news, index) => (
            <Card
              key={news.title}
              className={`card-hover bg-card border-border/50 animate-fade-in-up ${
                news.featured ? 'md:row-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <Badge
                    variant={news.featured ? 'default' : 'secondary'}
                    className={news.featured ? 'bg-accent text-accent-foreground' : ''}
                  >
                    {news.category}
                  </Badge>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {news.date}
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold">{news.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed mb-4">
                  {news.description}
                </CardDescription>
                <Button variant="link" className="text-primary p-0 h-auto group">
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="hero-button group">
            View All News
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default News;
