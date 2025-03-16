import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Banner from "../components/home/Banner";
import WorkSection from "../components/home/WorkSection";
import ServicesSection from "../components/home/ServicesSection";
import TestimonialsSection from "../components/home/TestimonialsSection";

const Index = () => {
  return (
    <div className="bg-neutral-50 flex flex-col overflow-hidden items-stretch">
      <Navbar />
      <Banner />
      <WorkSection />
      <ServicesSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
