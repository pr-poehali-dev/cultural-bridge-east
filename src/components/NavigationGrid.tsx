import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const NavigationGrid = () => {
  const sections = [
    {
      title: "Культура и традиции",
      description: "Мифы, легенды и обычаи коренных народов Дальнего Востока",
      icon: "Users",
      color: "from-forest-500 to-forest-600",
      image:
        "https://images.unsplash.com/photo-1578068140842-7d1ce7762ddb?w=400&q=80",
    },
    {
      title: "Искусство и творчество",
      description: "Современные художники, музыканты и литература региона",
      icon: "Palette",
      color: "from-sunset-500 to-sunset-600",
      image:
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&q=80",
    },
    {
      title: "Природа и этнотуризм",
      description: "Заповедники, экотуры и уникальные места Дальнего Востока",
      icon: "Mountain",
      color: "from-ocean-500 to-ocean-600",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
    },
    {
      title: "История и археология",
      description: "От древних государств до русских первопроходцев",
      icon: "History",
      color: "from-warm-600 to-warm-700",
      image:
        "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&q=80",
    },
    {
      title: "Современная жизнь",
      description: "Города, молодёжь и международные проекты",
      icon: "Building2",
      color: "from-purple-500 to-purple-600",
      image:
        "https://images.unsplash.com/photo-1555116505-38ab61800975?w=400&q=80",
    },
    {
      title: "Мультимедийный контент",
      description: "VR-туры, подкасты и интерактивные материалы",
      icon: "Camera",
      color: "from-indigo-500 to-indigo-600",
      image:
        "https://images.unsplash.com/photo-1516962126636-27ad087061cc?w=400&q=80",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-4 bg-gradient-to-r from-forest-600 to-ocean-600 bg-clip-text text-transparent">
            Исследуйте культуру
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Шесть тематических разделов откроют вам все грани жизни и культуры
            Дальнего Востока
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden bg-white hover:-translate-y-2 cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundImage: `url(${section.image})` }}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-80`}
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <Icon
                      name={section.icon as any}
                      size={24}
                      className="text-white"
                    />
                  </div>
                </div>
              </div>

              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-montserrat text-gray-800 group-hover:text-forest-600 transition-colors">
                  {section.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {section.description}
                </CardDescription>

                <div className="mt-4 flex items-center text-forest-600 text-sm font-medium group-hover:text-forest-700 transition-colors">
                  Узнать больше
                  <Icon
                    name="ArrowRight"
                    size={16}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NavigationGrid;
