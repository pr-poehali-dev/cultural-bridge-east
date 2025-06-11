import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold font-montserrat mb-6 leading-tight">
          Мост <span className="text-sunset-400">Культуры</span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Откройте богатство и красоту Дальнего Востока — от древних традиций
          коренных народов до современной жизни городов на краю мира
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            className="bg-forest-500 hover:bg-forest-600 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            <Icon name="Compass" size={20} className="mr-2" />
            Начать путешествие
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg backdrop-blur-sm transition-all duration-300"
          >
            <Icon name="Play" size={20} className="mr-2" />
            Смотреть видео
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center animate-scale-in">
            <div className="text-3xl md:text-4xl font-bold text-sunset-400 mb-2">
              10+
            </div>
            <div className="text-sm md:text-base text-gray-300">
              Коренных народов
            </div>
          </div>
          <div
            className="text-center animate-scale-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="text-3xl md:text-4xl font-bold text-ocean-400 mb-2">
              6
            </div>
            <div className="text-sm md:text-base text-gray-300">
              Тематических разделов
            </div>
          </div>
          <div
            className="text-center animate-scale-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="text-3xl md:text-4xl font-bold text-forest-400 mb-2">
              ∞
            </div>
            <div className="text-sm md:text-base text-gray-300">
              Историй для открытий
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-white/70" />
      </div>
    </section>
  );
};

export default HeroSection;
