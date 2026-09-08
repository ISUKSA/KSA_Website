import { Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';

interface NewsItem {
  id: string;
  title: string;
  description: string;
  date: string;
  badge: string;
  category: string;
}

const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'Fall 2026 Kickoff Meeting',
    description: 'Join us for the first KSA meeting of the semester! Meet new friends, learn about upcoming events, and get involved.',
    date: 'FEB 15',
    badge: 'Upcoming',
    category: 'Event',
  },
  {
    id: '2',
    title: 'Recruiting New Officers',
    description: 'Applications are now open for KSA officer positions. Help lead our community and make a difference!',
    date: 'FEB 28',
    badge: 'Applications Open',
    category: 'Announcement',
  },
  {
    id: '3',
    title: 'Spring 2026 Cultural Night',
    description: 'Save the date for our biggest event of the year! Experience Korean culture through food, music, and performances.',
    date: 'MAR 20',
    badge: 'Save the Date',
    category: 'Event',
  },
  {
    id: '4',
    title: 'New Student Welcome Session',
    description: 'Special orientation for incoming Korean students. Learn about campus resources and connect with mentors.',
    date: 'FEB 12',
    badge: 'New Students',
    category: 'Workshop',
  },
];

export function LatestNews() {
  return (
    <section id="news" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Latest News & Notices
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stay updated with the latest announcements and upcoming events from KSA
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {item.badge}
                  </Badge>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">
                      {item.date.split(' ')[1]}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {item.date.split(' ')[0]}
                    </div>
                  </div>
                </div>
                <CardTitle className="text-lg">{item.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {item.category}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {item.description}
                </p>
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="gap-2">
            <Calendar className="w-5 h-5" />
            View All Announcements
          </Button>
        </div>
      </div>
    </section>
  );
}
