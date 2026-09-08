import { Users, Globe, Heart, Award, MapPin, Mail, UserCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/app/components/ui/card';

const boardMembers = [
  { name: 'Member Name', role: 'President', roleKo: '회장' },
  { name: 'Member Name', role: 'Vice President', roleKo: '부회장' },
  { name: 'Member Name', role: 'Secretary', roleKo: '총무' },
  { name: 'Member Name', role: 'Treasurer', roleKo: '재무' },
  { name: 'Member Name', role: 'Public Relations', roleKo: '홍보' },
  { name: 'Member Name', role: 'Event Coordinator', roleKo: '행사' },
  { name: 'Member Name', role: 'Social Media', roleKo: '소셜미디어' },
];

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
      <div className="max-w-7xl mx-auto px-[32px] py-[30px] mx-[128px] my-[30px]">
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

        {/* Board Members */}
        <div className="mb-14">
          <h3 className="text-center text-xl font-bold text-foreground mb-1">Board Members</h3>
          <p className="text-center text-sm text-muted-foreground mb-8">임원진</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
            {boardMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center gap-3 text-center">
                <div className="w-40 h-40 rounded-2xl bg-muted flex items-center justify-center overflow-hidden border-2 border-border">
                  <UserCircle2 className="w-24 h-24 text-muted-foreground/40" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{member.name}</p>
                  <p className="text-xs text-primary font-medium">{member.role}</p>
                  <p className="text-xs text-muted-foreground">{member.roleKo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              null
            );
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          
          
          
          
        </div>

        {/* Contact Info */}
        

        {/* About ISU Section */}
        <div id="about-isu" className="border-t border-border mx-[0px] mt-[75px] mb-[0px] px-[0px] pt-[80px] pb-[0px]">
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
