import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navigation } from '@/app/components/Navigation';
import { HomePage } from '@/app/pages/HomePage';
import { GettingHerePage } from '@/app/pages/GettingHerePage';
import { MobilePlansPage } from '@/app/pages/MobilePlansPage';
import { GroceriesPage } from '@/app/pages/GroceriesPage';
import { EssentialAppsPage } from '@/app/pages/EssentialAppsPage';
import { CampusGuidePage } from '@/app/pages/CampusGuidePage';
import { HousingPage } from '@/app/pages/HousingPage';
import { TransportationPage } from '@/app/pages/TransportationPage';
import { LifeHacksPage } from '@/app/pages/LifeHacksPage';
import { ContactPage } from '@/app/pages/ContactPage';

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-background">
      {!isHomePage && <Navigation />}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/getting-here" element={<GettingHerePage />} />
          <Route path="/getting-here/mobile-plans" element={<MobilePlansPage />} />
          <Route path="/getting-here/groceries" element={<GroceriesPage />} />
          <Route path="/getting-here/essential-apps" element={<EssentialAppsPage />} />
          <Route path="/campus-guide" element={<CampusGuidePage />} />
          <Route path="/housing" element={<HousingPage />} />
          <Route path="/transportation" element={<TransportationPage />} />
          <Route path="/life-hacks" element={<LifeHacksPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}