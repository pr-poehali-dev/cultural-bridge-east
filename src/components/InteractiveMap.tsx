import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const InteractiveMap = () => {
  const regions = [
    {
      name: "Приморский край",
      description: "Дом амурского тигра и морские пейзажи",
      icon: "Trees",
      color: "bg-forest-500",
    },
    {
      name: "Хабаровский край",
      description: "Культурный центр и река Амур",
      icon: "Waves",
      color: "bg-ocean-500",
    },
    {
      name: "Камчатский край",
      description: "Вулканы, гейзеры и нетронутая природа",
      icon: "Mountain",
      color: "bg-sunset-500",
    },
    {
      name: "Сахалинская область",
      description: "Остров с уникальной историей",
      icon: "MapPin",
      color: "bg-warm-500",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-forest-50 to-ocean-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-4 text-gray-900">
            География культуры
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Каждый регион Дальнего Востока имеет свою уникальную историю и
            традиции
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {regions.map((region, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border border-gray-200 bg-white/80 backdrop-blur-sm hover:-translate-y-1 cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader className="text-center pb-2">
                <div
                  className={`w-16 h-16 ${region.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon
                    name={region.icon as any}
                    size={28}
                    className="text-white"
                  />
                </div>
                <CardTitle className="text-lg font-montserrat text-gray-800 group-hover:text-forest-600 transition-colors">
                  {region.name}
                </CardTitle>
              </CardHeader>

              <CardContent className="text-center">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {region.description}
                </p>

                <div className="mt-4 flex items-center justify-center text-forest-600 text-sm font-medium group-hover:text-forest-700 transition-colors">
                  <Icon name="Compass" size={16} className="mr-2" />
                  Исследовать регион
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Interactive Elements */}
        <div className="mt-16 bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-3xl font-bold text-forest-600 mb-2">12+</div>
              <div className="text-gray-600">Регионов для изучения</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-3xl font-bold text-ocean-600 mb-2">50+</div>
              <div className="text-gray-600">Исторических мест</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="text-3xl font-bold text-sunset-600 mb-2">
                100+
              </div>
              <div className="text-gray-600">Культурных объектов</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;
