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

const WhatsAppButton = () => {
  const phone = "919XXXXXXXX";
  const message = encodeURIComponent("Hello! I'm interested in HAVA rock drilling equipment. Please share more details.");
  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 w-11 h-11 bg-[#25D366] hover:bg-[#20ba5a] rounded-full flex items-center justify-center shadow-xl transition-all hover:scale-110 animate-bounce"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="w-6 h-6 fill-white">
        <path d="M16 .04C7.164.04.04 7.164.04 16c0 2.82.736 5.46 2.02 7.756L.04 31.96l8.392-2.196A15.92 15.92 0 0 0 16 31.96C24.836 31.96 31.96 24.836 31.96 16S24.836.04 16 .04zm0 29.12a13.1 13.1 0 0 1-6.68-1.824l-.48-.284-4.972 1.304 1.324-4.848-.312-.496A13.08 13.08 0 0 1 2.84 16C2.84 8.708 8.708 2.84 16 2.84S29.16 8.708 29.16 16 23.292 29.16 16 29.16zm7.18-9.8c-.392-.196-2.324-1.148-2.684-1.276-.36-.132-.624-.196-.888.196-.264.392-1.02 1.276-1.252 1.54-.228.26-.46.296-.852.1-.392-.196-1.656-.612-3.156-1.944-1.164-1.04-1.952-2.324-2.18-2.716-.228-.392-.024-.604.172-.8.176-.176.392-.46.588-.688.196-.228.26-.392.392-.656.132-.264.064-.492-.032-.688-.1-.196-.888-2.14-1.216-2.928-.32-.768-.644-.664-.888-.676l-.756-.012c-.264 0-.692.1-1.056.492-.36.392-1.38 1.348-1.38 3.288s1.412 3.816 1.608 4.08c.196.264 2.78 4.244 6.736 5.952.94.408 1.676.648 2.248.832.944.3 1.804.256 2.484.156.756-.112 2.324-.952 2.652-1.868.328-.916.328-1.704.228-1.868-.096-.164-.36-.264-.752-.46z"/>
      </svg>
    </a>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <WhatsAppButton />
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