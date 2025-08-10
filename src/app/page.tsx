
import Header from "./components/Header";
import DealsSection from "./components/Deals";
import ElectronicsSection from "./components/ElectronicsSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HomeDecorSection from "./components/HomeSection";
import InquirySection from "./components/InquirySection";
import RecommendedItems from "./components/Recommended";
import Services from "./components/Services";
import SubscriberSection from "./components/Subscribe";
import SuppliersSection from "./components/SupplierSection";

export default function Home() {
  return (
    <div className="bg-[#E3F0FF]">
      <Header/>
      <Hero/>
      <DealsSection/>
      <HomeDecorSection/>
      <ElectronicsSection/>
      <InquirySection/>
      <RecommendedItems/>
      <Services/>
      <SuppliersSection/>
      <SubscriberSection/>
      <Footer/>

    </div>
  );
}
