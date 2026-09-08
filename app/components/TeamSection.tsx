import { Mail, Linkedin } from 'lucide-react';
import { Card, CardContent } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';

interface TeamMember {
  id: string;
  name: string;
  nameKo: string;
  position: string;
  positionKo: string;
  major: string;
  majorKo: string;
  email: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Sarah Kim',
    nameKo: '김서아',
    position: 'President',
    positionKo: '회장',
    major: 'Computer Science',
    majorKo: '컴퓨터 공학',
    email: 'president@isuksa.org',
    image: 'https://images.unsplash.com/photo-1740153204804-200310378f2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhc2lhbiUyMHN0dWRlbnQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzA2NzkzMTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '2',
    name: 'David Park',
    nameKo: '박준영',
    position: 'Vice President',
    positionKo: '부회장',
    major: 'Business Administration',
    majorKo: '경영학',
    email: 'vp@isuksa.org',
    image: 'https://images.unsplash.com/photo-1740153204804-200310378f2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhc2lhbiUyMHN0dWRlbnQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzA2NzkzMTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '3',
    name: 'Emily Lee',
    nameKo: '이지은',
    position: 'Treasurer',
    positionKo: '재무',
    major: 'Finance',
    majorKo: '재무학',
    email: 'treasurer@isuksa.org',
    image: 'https://images.unsplash.com/photo-1740153204804-200310378f2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhc2lhbiUyMHN0dWRlbnQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzA2NzkzMTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '4',
    name: 'Michael Choi',
    nameKo: '최민수',
    position: 'Secretary',
    positionKo: '총무',
    major: 'Mechanical Engineering',
    majorKo: '기계공학',
    email: 'secretary@isuksa.org',
    image: 'https://images.unsplash.com/photo-1740153204804-200310378f2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhc2lhbiUyMHN0dWRlbnQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzA2NzkzMTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function TeamSection() {
  return (
    <section id="team" className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet the Team
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our dedicated executive board working to serve the Korean student community
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <Card key={member.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {member.nameKo}
                  </p>
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3">
                    {member.position}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {member.major}
                  </p>
                </div>
                <div className="flex justify-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-1"
                    onClick={() => window.location.href = `mailto:${member.email}`}
                  >
                    <Mail className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-1"
                  >
                    <Linkedin className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
