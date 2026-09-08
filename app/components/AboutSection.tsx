import { Heart, Users, Globe, Award } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Community Building',
    titleKo: '커뮤니티 구축',
    description: 'Connecting Korean students and creating a supportive network at Iowa State University.',
    descriptionKo: '아이오와 주립대학교에서 한국 학생들을 연결하고 지원하는 네트워크를 만듭니다.',
  },
  {
    icon: Globe,
    title: 'Cultural Exchange',
    titleKo: '문화 교류',
    description: 'Sharing Korean culture with the broader ISU community through events and programs.',
    descriptionKo: '이벤트와 프로그램을 통해 더 넓은 ISU 커뮤니티와 한국 문화를 공유합니다.',
  },
  {
    icon: Heart,
    title: 'Student Support',
    titleKo: '학생 지원',
    description: 'Providing resources and guidance to help Korean students thrive academically and socially.',
    descriptionKo: '한국 학생들이 학업적, 사회적으로 성공할 수 있도록 자원과 지침을 제공합니다.',
  },
  {
    icon: Award,
    title: 'Leadership Development',
    titleKo: '리더십 개발',
    description: 'Offering opportunities for students to develop leadership skills and make an impact.',
    descriptionKo: '학생들이 리더십 기술을 개발하고 영향력을 발휘할 수 있는 기회를 제공합니다.',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Us
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8">
            The Korean Student Association (KSA) at Iowa State University is dedicated to fostering a vibrant community 
            for Korean and Korean-American students, while sharing our rich culture with the entire ISU community.
          </p>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            아이오와 주립대학교 한인학생회(KSA)는 한국 및 한국계 미국인 학생들을 위한 활기찬 커뮤니티를 
            조성하고 우리의 풍부한 문화를 전체 ISU 커뮤니티와 공유하는 데 전념하고 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {feature.titleKo}
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  {feature.description}
                </p>
                <p className="text-xs text-muted-foreground">
                  {feature.descriptionKo}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-primary/5 rounded-lg">
            <div className="text-4xl font-bold text-primary mb-2">150+</div>
            <div className="text-sm text-muted-foreground">Active Members</div>
            <div className="text-xs text-muted-foreground">활동 회원</div>
          </div>
          <div className="text-center p-6 bg-primary/5 rounded-lg">
            <div className="text-4xl font-bold text-primary mb-2">20+</div>
            <div className="text-sm text-muted-foreground">Events Per Year</div>
            <div className="text-xs text-muted-foreground">연간 이벤트</div>
          </div>
          <div className="text-center p-6 bg-primary/5 rounded-lg">
            <div className="text-4xl font-bold text-primary mb-2">10</div>
            <div className="text-sm text-muted-foreground">Years Established</div>
            <div className="text-xs text-muted-foreground">설립 연수</div>
          </div>
          <div className="text-center p-6 bg-primary/5 rounded-lg">
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Student Led</div>
            <div className="text-xs text-muted-foreground">학생 주도</div>
          </div>
        </div>
      </div>
    </section>
  );
}
