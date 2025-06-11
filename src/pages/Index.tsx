import HeroSection from "@/components/HeroSection";
import NavigationGrid from "@/components/NavigationGrid";
import CulturalHighlights from "@/components/CulturalHighlights";
import InteractiveMap from "@/components/InteractiveMap";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <NavigationGrid />
      <CulturalHighlights />
      <InteractiveMap />
    </div>
  );
};

export default Index;
