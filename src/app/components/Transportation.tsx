import { Bus, MapPin, Clock, DollarSign } from 'lucide-react';

export function Transportation() {
  const routes = [
    { number: '1 Red', name: 'Main Campus Loop', nameKr: '메인 캠퍼스 순환' },
    { number: '2 Blue', name: 'South Campus Route', nameKr: '남부 캠퍼스 노선' },
    { number: '3 Orange', name: 'Towers & Apartments', nameKr: '타워 및 아파트' },
    { number: '6 Brown', name: 'West Ames', nameKr: '웨스트 에임스' },
    { number: '11 Cardinal', name: 'Shopping & Services', nameKr: '쇼핑 및 서비스' },
    { number: '23 Gold', name: 'ISU Research Park', nameKr: 'ISU 연구 단지' },
  ];

  return (
    <section id="transportation" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Public Transportation
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            대중교통 - CyRide 버스 시스템
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* CyRide Info Cards */}
          <div className="bg-accent rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-semibold mb-2">Free for Students</h3>
            <p className="text-sm text-muted-foreground mb-1">학생 무료</p>
            <p className="text-sm text-muted-foreground">
              Show your ISU ID card to ride for free
            </p>
          </div>

          <div className="bg-accent rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-semibold mb-2">Frequent Service</h3>
            <p className="text-sm text-muted-foreground mb-1">자주 운행</p>
            <p className="text-sm text-muted-foreground">
              Buses run every 10-30 minutes during peak hours
            </p>
          </div>

          <div className="bg-accent rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-semibold mb-2">Wide Coverage</h3>
            <p className="text-sm text-muted-foreground mb-1">넓은 범위</p>
            <p className="text-sm text-muted-foreground">
              Routes cover campus and all of Ames
            </p>
          </div>
        </div>

        {/* Routes */}
        <div className="bg-card rounded-lg shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <Bus className="w-8 h-8 text-primary" />
            <div>
              <h3 className="text-2xl font-semibold">Popular CyRide Routes</h3>
              <p className="text-muted-foreground">주요 버스 노선</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {routes.map((route, index) => (
              <div key={index} className="border border-border rounded-lg p-4 hover:border-primary transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bus className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">{route.number}</p>
                    <p className="text-sm">{route.name}</p>
                    <p className="text-xs text-muted-foreground">{route.nameKr}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Map Placeholder */}
          <div className="mt-8 bg-muted rounded-lg p-8 text-center">
            <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h4 className="font-semibold mb-2">CyRide Route Map</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Interactive route map will be displayed here
            </p>
            <a
              href="https://www.cyride.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              View Full Map on CyRide.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
