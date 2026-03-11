import { SmartNavigation } from '@/app/components/SmartNavigation';
import { SmartHero } from '@/app/components/SmartHero';
import { AboutKSASection } from '@/app/components/AboutKSASection';
import { LatestInfoSection } from '@/app/components/LatestInfoSection';
import { CalendarSection } from '@/app/components/CalendarSection';
import { OpportunitiesSection } from '@/app/components/OpportunitiesSection';
import { PhotoGallerySection } from '@/app/components/PhotoGallerySection';
import { SmartFooter } from '@/app/components/SmartFooter';

export function HomePage() {
  return (
    <div className="min-h-screen">
      <SmartNavigation />
      <SmartHero />
      <AboutKSASection />
      <LatestInfoSection />
      <CalendarSection />
      <OpportunitiesSection />
      <PhotoGallerySection />
      <SmartFooter />
    </div>
  );
}