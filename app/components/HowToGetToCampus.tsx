import { Plane, Bus, MapPin, CheckCircle } from 'lucide-react';

export function HowToGetToCampus() {
  const steps = [
    {
      icon: <Plane className="w-6 h-6" />,
      title: 'Arrive at Des Moines Airport',
      titleKr: '데스모인 공항 도착',
      description: 'Fly into Des Moines International Airport (DSM), the nearest major airport to Ames.',
      descriptionKr: 'DSM 공항은 Ames에서 가장 가까운 주요 공항입니다.',
    },
    {
      icon: <Bus className="w-6 h-6" />,
      title: 'Take Executive Express',
      titleKr: 'Executive Express 이용',
      description: 'Take the Executive Express shuttle service from the airport to Ames (approx. 1 hour).',
      descriptionKr: '공항에서 Ames까지 약 1시간 소요됩니다.',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Arrive in Ames',
      titleKr: 'Ames 도착',
      description: 'Get dropped off at your residence or the Iowa State campus.',
      descriptionKr: '기숙사 또는 캠퍼스에서 하차하세요.',
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Check In & Settle',
      titleKr: '체크인 및 정착',
      description: 'Complete your housing check-in and start exploring campus!',
      descriptionKr: '주거지 체크인을 완료하고 캠퍼스를 탐험하세요!',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-accent/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How to Get to Campus
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            캠퍼스 도착 방법
          </p>
        </div>

        {/* Timeline for Desktop */}
        <div className="hidden md:block relative">
          {/* Timeline line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-secondary -translate-y-1/2"></div>
          
          <div className="grid grid-cols-4 gap-4 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground shadow-lg z-10">
                  {step.icon}
                </div>
                
                {/* Content card */}
                <div className="pt-24">
                  <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow min-h-[200px]">
                    <h3 className="font-semibold mb-2 text-foreground">{step.title}</h3>
                    <p className="text-sm text-primary mb-3">{step.titleKr}</p>
                    <p className="text-sm text-muted-foreground mb-2">{step.description}</p>
                    <p className="text-sm text-muted-foreground">{step.descriptionKr}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vertical Timeline for Mobile */}
        <div className="md:hidden space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground shadow-lg flex-shrink-0">
                  {step.icon}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-1 h-full bg-secondary mt-2"></div>
                )}
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md flex-1">
                <h3 className="font-semibold mb-2 text-foreground">{step.title}</h3>
                <p className="text-sm text-primary mb-3">{step.titleKr}</p>
                <p className="text-sm text-muted-foreground mb-2">{step.description}</p>
                <p className="text-sm text-muted-foreground">{step.descriptionKr}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
