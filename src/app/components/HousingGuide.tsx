import { Building2, Home, Check } from 'lucide-react';

export function HousingGuide() {
  const onCampus = {
    title: 'On-Campus Housing',
    titleKr: '교내 기숙사',
    icon: <Building2 className="w-8 h-8" />,
    benefits: [
      { text: 'Walking distance to classes', textKr: '강의실까지 도보 거리' },
      { text: 'Meal plans included', textKr: '식사 계획 포함' },
      { text: 'Community events and activities', textKr: '커뮤니티 이벤트 및 활동' },
      { text: 'Utilities included in rent', textKr: '공과금 포함' },
      { text: 'Easy access to campus resources', textKr: '캠퍼스 자원 쉽게 이용' },
    ],
    considerations: [
      { text: 'Limited privacy', textKr: '제한된 사생활' },
      { text: 'Shared facilities', textKr: '공유 시설' },
      { text: 'Housing lottery system', textKr: '추첨 시스템' },
    ],
  };

  const offCampus = {
    title: 'Off-Campus Housing',
    titleKr: '교외 거주',
    icon: <Home className="w-8 h-8" />,
    benefits: [
      { text: 'More independence', textKr: '더 많은 독립성' },
      { text: 'Choose your roommates', textKr: '룸메이트 선택 가능' },
      { text: 'More space and privacy', textKr: '더 넓은 공간과 사생활' },
      { text: 'Pet-friendly options available', textKr: '애완동물 가능 옵션' },
      { text: 'Variety of locations', textKr: '다양한 위치' },
    ],
    considerations: [
      { text: 'Need transportation', textKr: '교통수단 필요' },
      { text: 'Separate utility bills', textKr: '별도 공과금' },
      { text: 'Lease agreements', textKr: '임대 계약서' },
    ],
  };

  return (
    <section id="housing" className="py-20 bg-gradient-to-b from-accent/30 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Housing Guide
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            주거 가이드 - 어디서 살 것인가
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* On-Campus */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-primary text-primary-foreground p-6">
              <div className="flex items-center gap-4 mb-2">
                {onCampus.icon}
                <div>
                  <h3 className="text-2xl font-semibold">{onCampus.title}</h3>
                  <p className="text-primary-foreground/90">{onCampus.titleKr}</p>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <h4 className="font-semibold mb-4 text-foreground">Benefits / 장점</h4>
              <ul className="space-y-3 mb-6">
                {onCampus.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm">{benefit.text}</p>
                      <p className="text-sm text-muted-foreground">{benefit.textKr}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <h4 className="font-semibold mb-4 text-foreground">Considerations / 고려사항</h4>
              <ul className="space-y-3">
                {onCampus.considerations.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-secondary">•</span>
                    <div>
                      <p className="text-sm">{item.text}</p>
                      <p className="text-sm text-muted-foreground">{item.textKr}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Off-Campus */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-secondary text-secondary-foreground p-6">
              <div className="flex items-center gap-4 mb-2">
                {offCampus.icon}
                <div>
                  <h3 className="text-2xl font-semibold">{offCampus.title}</h3>
                  <p className="text-secondary-foreground/80">{offCampus.titleKr}</p>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <h4 className="font-semibold mb-4 text-foreground">Benefits / 장점</h4>
              <ul className="space-y-3 mb-6">
                {offCampus.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm">{benefit.text}</p>
                      <p className="text-sm text-muted-foreground">{benefit.textKr}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <h4 className="font-semibold mb-4 text-foreground">Considerations / 고려사항</h4>
              <ul className="space-y-3">
                {offCampus.considerations.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-secondary">•</span>
                    <div>
                      <p className="text-sm">{item.text}</p>
                      <p className="text-sm text-muted-foreground">{item.textKr}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
