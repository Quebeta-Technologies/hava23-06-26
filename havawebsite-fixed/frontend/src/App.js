import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ModernHomePage } from "./pages/ModernHomePage";
import { WhyHavaPage } from "./pages/WhyHavaPage";
import { AboutPage } from "./pages/AboutPage";
import { InfraQualityPage } from "./pages/InfraQualityPage";
import { ProductsPage } from "./pages/ProductsPage";
import { ServicesPage } from "./pages/ServicesPage";
import { DealersPage } from "./pages/DealersPage";
import { GalleryPage } from "./pages/GalleryPage";
import { ContactPage } from "./pages/ContactPage";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <div className="pt-20 lg:pt-[88px]">
          <Routes>
            <Route path="/" element={<ModernHomePage />} />
            <Route path="/why-hava" element={<WhyHavaPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/infra-quality" element={<InfraQualityPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/dealers" element={<DealersPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;