import HeroSection from "@/components/HeroSection";
import NavigationGrid from "@/components/NavigationGrid";
import CulturalHighlights from "@/components/CulturalHighlights";
import InteractiveMap from "@/components/InteractiveMap";
import MultilingualChat from "@/components/MultilingualChat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MultilingualChat />
      <NavigationGrid />
      <CulturalHighlights />
      <InteractiveMap />
    </div>
  );
};

export default Index;
