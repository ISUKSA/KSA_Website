import { Calendar, MapPin, Clock, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';

interface Event {
  id: string;
  title: string;
  titleKo: string;
  date: string;
  time: string;
  location: string;
  locationKo: string;
  attendees: string;
  image: string;
  category: 'Social' | 'Cultural' | 'Academic' | 'Workshop';
}

const upcomingEvents: Event[] = [
  {
    id: '1',
    title: 'Chuseok Celebration Party',
    titleKo: '추석 파티',
    date: 'September 15, 2026',
    time: '6:00 PM - 9:00 PM',
    location: 'Memorial Union, Great Hall',
    locationKo: '메모리얼 유니온, 그레이트 홀',
    attendees: '100+',
    image: 'https://images.unsplash.com/photo-1766466031388-55d6157dbe77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwY2FtcHVzJTIwZXZlbnQlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NzA2NzkzMTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Cultural',
  },
  {
    id: '2',
    title: 'Career Workshop: Resume Building',
    titleKo: '커리어 워크샵: 이력서 작성',
    date: 'February 20, 2026',
    time: '2:00 PM - 4:00 PM',
    location: 'Gerdin Business Building, Room 3210',
    locationKo: '거딘 비즈니스 빌딩, 3210호',
    attendees: '50',
    image: 'https://images.unsplash.com/photo-1758270704025-0e1a1793e1ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwY29sbGVnZSUyMHN0dWRlbnRzJTIwZ3JvdXAlMjBzdHVkeWluZ3xlbnwxfHx8fDE3NzA2NzkzMTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Academic',
  },
  {
    id: '3',
    title: 'Spring Picnic & Sports Day',
    titleKo: '봄 소풍 & 체육대회',
    date: 'April 12, 2026',
    time: '12:00 PM - 5:00 PM',
    location: 'Central Campus, Moore Memorial Park',
    locationKo: '센트럴 캠퍼스, 무어 메모리얼 파크',
    attendees: '80+',
    image: 'https://images.unsplash.com/photo-1766466031388-55d6157dbe77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwY2FtcHVzJTIwZXZlbnQlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NzA2NzkzMTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Social',
  },
  {
    id: '4',
    title: 'K-Pop Dance Workshop',
    titleKo: 'K-Pop 댄스 워크샵',
    date: 'March 5, 2026',
    time: '7:00 PM - 9:00 PM',
    location: 'State Gym, Dance Studio',
    locationKo: '스테이트 짐, 댄스 스튜디오',
    attendees: '60',
    image: 'https://images.unsplash.com/photo-1766466031388-55d6157dbe77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwY2FtcHVzJTIwZXZlbnQlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NzA2NzkzMTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Workshop',
  },
];

const categoryColors = {
  Social: 'bg-blue-100 text-blue-700',
  Cultural: 'bg-purple-100 text-purple-700',
  Academic: 'bg-green-100 text-green-700',
  Workshop: 'bg-orange-100 text-orange-700',
};

export function EventsCalendar() {
  return (
    <section id="events" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Upcoming Events
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join us for exciting events throughout the semester
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {upcomingEvents.map((event) => (
            <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className={categoryColors[event.category]}>
                    {event.category}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">
                  {event.title}
                  <span className="block text-base text-muted-foreground font-normal mt-1">
                    {event.titleKo}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2 text-sm">
                  <Calendar className="w-4 h-4 text-primary mt-0.5" />
                  <div>
                    <div className="text-foreground">{event.date}</div>
                    <div className="text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {event.time}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-primary mt-0.5" />
                  <div>
                    <div className="text-foreground">{event.location}</div>
                    <div className="text-muted-foreground">{event.locationKo}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">
                    {event.attendees} expected attendees
                  </span>
                </div>
                <Button className="w-full mt-4 bg-primary hover:bg-primary/90">
                  Register for Event
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="gap-2">
            <Calendar className="w-5 h-5" />
            View Full Calendar
          </Button>
        </div>
      </div>
    </section>
  );
}
