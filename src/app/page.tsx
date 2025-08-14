
import DealsSection from "./components/Deals";
import ElectronicsSection from "./components/ElectronicsSection";
import Hero from "./components/Hero";
import HomeDecorSection from "./components/HomeSection";
import InquirySection from "./components/InquirySection";
import RecommendedItems from "./components/Recommended";
import Services from "./components/Services";
import SuppliersSection from "./components/SupplierSection";

export default function Home() {
  return (
    <div className="bg-gray-50">
      
      <Hero/>
      <DealsSection/>
      <HomeDecorSection/>
      <ElectronicsSection/>
      <InquirySection/>
      <RecommendedItems/>
      <Services/>
      <SuppliersSection/>
      

    </div>
  );
}
