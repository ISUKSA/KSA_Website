import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Navigation } from "@/app/components/Navigation";
import { HomePage } from "@/app/pages/HomePage";
import { GettingHerePage } from "@/app/pages/GettingHerePage";
import { MobilePlansPage } from "@/app/pages/MobilePlansPage";
import { GroceriesPage } from "@/app/pages/GroceriesPage";
import { EssentialAppsPage } from "@/app/pages/EssentialAppsPage";
import { CampusGuidePage } from "@/app/pages/CampusGuidePage";
import { HousingPage } from "@/app/pages/HousingPage";
import { TransportationPage } from "@/app/pages/TransportationPage";
import { LifeHacksPage } from "@/app/pages/LifeHacksPage";
import { ContactPage } from "@/app/pages/ContactPage";
import { BankingPage } from "@/app/pages/BankingPage";
import { EmergencyPage } from "@/app/pages/EmergencyPage";
import { RestaurantsPage } from "@/app/pages/RestaurantsPage";
import { DocumentationPage } from "@/app/pages/DocumentationPage";
import { AdminManualPage } from "@/app/pages/AdminManualPage";

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const hideNav = isHomePage || location.pathname === "/admin" || location.pathname === "/documentation";

  return (
    <div className="min-h-screen bg-background">
      {!hideNav && <Navigation />}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/getting-here"
            element={<GettingHerePage />}
          />
          <Route
            path="/getting-here/mobile-plans"
            element={<MobilePlansPage />}
          />
          <Route
            path="/getting-here/groceries"
            element={<GroceriesPage />}
          />
          <Route
            path="/getting-here/essential-apps"
            element={<EssentialAppsPage />}
          />
          <Route
            path="/campus-guide"
            element={<CampusGuidePage />}
          />
          <Route path="/housing" element={<HousingPage />} />
          <Route
            path="/transportation"
            element={<TransportationPage />}
          />
          <Route path="/banking" element={<BankingPage />} />
          <Route
            path="/emergency"
            element={<EmergencyPage />}
          />
          <Route
            path="/restaurants"
            element={<RestaurantsPage />}
          />
          <Route
            path="/documentation"
            element={<DocumentationPage />}
          />
          <Route
            path="/life-hacks"
            element={<LifeHacksPage />}
          />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admin" element={<AdminManualPage />} />
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