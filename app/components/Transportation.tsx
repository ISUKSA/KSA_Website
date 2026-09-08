import { Bus, MapPin, Clock, DollarSign, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

export function Transportation() {
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const routes = [
    { number: '1 Red', name: 'Central Campus [East ↔ West]', nameKr: '중앙 캠퍼스 [동부 ↔ 서부]', color: '#DC2626' },
    { number: '2 Green', name: 'Northen Campus [East ↔ West]', nameKr: '북부 캠퍼스 [동부 ↔ 서부]', color: '#00853E' },
    { number: '3 Blue', name: 'Shopping & Services', nameKr: '쇼핑 및 서비스', color: '#2563EB' },
    { number: '6 Brown', name: 'Campus [North ↔ South]', nameKr: '캠퍼스 [남부 ↔ 북부]', color: '#92400E' },
    { number: '21 Cardinal', name: 'Main Campus Loop', nameKr: '메인 캠퍼스 순환', color: '#C8102E' },
    { number: '23 Orange', name: 'Main Campus ↔ Stadium', nameKr: '메인 캠퍼스 ↔ 스타디움', color: '#EA580C' },
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
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${route.color}20` }}
                  >
                    <Bus className="w-5 h-5" style={{ color: route.color }} />
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: route.color }}>{route.number}</p>
                    <p className="text-sm">{route.name}</p>
                    <p className="text-xs text-muted-foreground">{route.nameKr}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Map Placeholder */}
          <div className="mt-8 bg-muted rounded-lg overflow-hidden">
            <div className="bg-background border-b border-border p-4 flex items-center justify-between">
              <div>
                <h4 className="font-semibold">CyRide Route Map</h4>
                <p className="text-sm text-muted-foreground">
                  Zoom and drag to explore the map
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setZoom(Math.min(zoom + 0.25, 3))}
                  disabled={zoom >= 3}
                  className="p-2 rounded-lg border border-border hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  title="Zoom In"
                >
                  <ZoomIn className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setZoom(Math.max(zoom - 0.25, 0.5))}
                  disabled={zoom <= 0.5}
                  className="p-2 rounded-lg border border-border hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-5 h-5" />
                </button>
                <button
                  onClick={() => {
                    setZoom(1);
                    setPosition({ x: 0, y: 0 });
                  }}
                  className="p-2 rounded-lg border border-border hover:bg-accent transition-colors"
                  title="Reset Zoom"
                >
                  <RotateCcw className="w-5 h-5" />
                </button>
                <div className="ml-2 px-3 py-1 bg-accent rounded text-sm font-medium">
                  {Math.round(zoom * 100)}%
                </div>
              </div>
            </div>
            <div 
              className="relative overflow-auto bg-muted"
              style={{ 
                height: '500px',
                cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'
              }}
              onMouseDown={(e) => {
                if (zoom > 1) {
                  setIsDragging(true);
                  setDragStart({
                    x: e.clientX - position.x,
                    y: e.clientY - position.y
                  });
                }
              }}
              onMouseMove={(e) => {
                if (isDragging && zoom > 1) {
                  setPosition({
                    x: e.clientX - dragStart.x,
                    y: e.clientY - dragStart.y
                  });
                }
              }}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
            >
              <div 
                className="inline-block min-w-full min-h-full"
                style={{
                  transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
                  transformOrigin: 'center center',
                  transition: isDragging ? 'none' : 'transform 0.2s ease-out'
                }}
              >
                <ImageWithFallback
                  src="https://www.cyride.com/home/showpublishedimage/2040/638847339714170000"
                  alt="CyRide Route Map"
                  className="w-full h-auto"
                  style={{ 
                    minHeight: '500px',
                    objectFit: 'cover',
                    userSelect: 'none',
                    pointerEvents: 'none'
                  }}
                />
              </div>
            </div>
            <div className="bg-background border-t border-border p-3 text-center">
              <a
                href="https://www.cyride.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm"
              >
                <MapPin className="w-4 h-4" />
                Visit CyRide.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}