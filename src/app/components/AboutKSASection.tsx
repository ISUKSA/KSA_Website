import { Users, Globe, Heart, Award, MapPin, Mail } from 'lucide-react';
import { Card, CardContent } from '@/app/components/ui/card';

const features = [
  {
    icon: Users,
    title: 'Community',
    titleKo: '커뮤니티',
    description: 'Connect with fellow Korean students at ISU',
  },
  {
    icon: Globe,
    title: 'Culture',
    titleKo: '문화',
    description: 'Share and celebrate Korean culture together',
  },
  {
    icon: Heart,
    title: 'Support',
    titleKo: '지원',
    description: 'Get help navigating student life in Ames',
  },
  {
    icon: Award,
    title: 'Leadership',
    titleKo: '리더십',
    description: 'Develop skills through involvement',
  },
];

export function AboutKSASection() {
  return (
    <section id="about-ksa" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About KSA
          </h2>
          <p className="text-lg text-muted-foreground mb-2">
            학생회 소개
          </p>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            The Korean Student Association at Iowa State University provides a welcoming community for 
            Korean and Korean-American students, offering support, cultural activities, and opportunities 
            to connect with fellow Cyclones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {feature.titleKo}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-primary/5 rounded-lg">
            <div className="text-4xl font-bold text-primary mb-2">150+</div>
            <div className="text-sm text-muted-foreground">Active Members</div>
          </div>
          <div className="text-center p-6 bg-secondary/10 rounded-lg">
            <div className="text-4xl font-bold text-secondary-foreground mb-2">20+</div>
            <div className="text-sm text-muted-foreground">Events Per Year</div>
          </div>
          <div className="text-center p-6 bg-primary/5 rounded-lg">
            <div className="text-4xl font-bold text-primary mb-2">10</div>
            <div className="text-sm text-muted-foreground">Years Strong</div>
          </div>
          <div className="text-center p-6 bg-secondary/10 rounded-lg">
            <div className="text-4xl font-bold text-secondary-foreground mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Student Led</div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-muted/50 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Visit Us</h4>
                <p className="text-sm text-muted-foreground">
                  Memorial Union, Room 3536<br />
                  Iowa State University<br />
                  Ames, IA 50011
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Contact Us</h4>
                <p className="text-sm text-muted-foreground mb-1">
                  Email:{' '}
                  <a href="mailto:ksa@iastate.edu" className="text-primary hover:underline">
                    ksa@iastate.edu
                  </a>
                </p>
                <p className="text-sm text-muted-foreground">
                  We typically respond within 1-2 business days
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* About ISU Section */}
        <div id="about-isu" className="mt-16 pt-16 border-t border-border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              About Iowa State University
            </h3>
            <p className="text-muted-foreground">
              학교소개
            </p>
          </div>
          <div className="prose prose-lg max-w-3xl mx-auto text-muted-foreground">
            <p className="mb-4">
              Iowa State University, located in Ames, Iowa, is a public land-grant research university 
              known for its strong programs in engineering, agriculture, and sciences. With over 30,000 
              students from around the world, ISU offers a welcoming and diverse community.
            </p>
            <p>
              As a Korean student at ISU, you'll find excellent academic programs, modern facilities, 
              and a supportive international student community. The KSA is here to help you make the 
              most of your Cyclone experience!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
