import { Card, CardContent } from '@/app/components/ui/card';
import { Building2, Utensils, ShoppingBag, GraduationCap } from 'lucide-react';

const sponsors = [
  {
    id: '1',
    name: 'ISU Student Government',
    nameKo: 'ISU 학생회',
    type: 'University Partner',
    icon: GraduationCap,
  },
  {
    id: '2',
    name: 'Korea House Restaurant',
    nameKo: '한국관',
    type: 'Community Partner',
    icon: Utensils,
  },
  {
    id: '3',
    name: 'Asian Market Ames',
    nameKo: '에임스 아시아 마켓',
    type: 'Local Business',
    icon: ShoppingBag,
  },
  {
    id: '4',
    name: 'ISU International Students Office',
    nameKo: 'ISU 유학생 사무실',
    type: 'University Partner',
    icon: Building2,
  },
  {
    id: '5',
    name: 'Campus Dining',
    nameKo: '캠퍼스 다이닝',
    type: 'University Partner',
    icon: Utensils,
  },
  {
    id: '6',
    name: 'Ames Community Center',
    nameKo: '에임스 커뮤니티 센터',
    type: 'Community Partner',
    icon: Building2,
  },
];

export function SponsorsSection() {
  return (
    <section id="sponsors" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Sponsors & Partners
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're grateful to our sponsors and partners who support our mission and community
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sponsors.map((sponsor) => {
            const Icon = sponsor.icon;
            return (
              <Card
                key={sponsor.id}
                className="hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/20 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {sponsor.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {sponsor.nameKo}
                  </p>
                  <p className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full inline-block">
                    {sponsor.type}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-accent/50 border border-accent rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Interested in Sponsoring KSA?
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              후원에 관심이 있으신가요?
            </p>
            <p className="text-muted-foreground mb-6">
              Partner with us to support Korean students at Iowa State and promote cultural exchange. 
              Contact us to learn more about sponsorship opportunities.
            </p>
            <a
              href="mailto:sponsor@isuksa.org"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
            >
              Contact Us About Sponsorship
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
