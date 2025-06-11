import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const CulturalHighlights = () => {
  const highlights = [
    {
      title: "Нанайские узоры",
      subtitle: "Традиционное искусство коренных народов",
      description:
        "Древние орнаменты нанайцев с реки Амур — спиральные узоры, символизирующие течение жизни и связь с духами природы",
      image:
        "https://images.unsplash.com/photo-1578068140842-7d1ce7762ddb?w=500&q=80",
      tag: "Культура",
    },
    {
      title: "Шаманские традиции эвенков",
      subtitle: "Духовное наследие Севера",
      description:
        "Древние практики и верования эвенков — связь с духами тайги, оленями и предками, сохранившиеся до наших дней",
      image:
        "https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?w=500&q=80",
      tag: "Традиции",
    },
    {
      title: "Владивосток — ворота в Азию",
      subtitle: "Современный мегаполис на берегу океана",
      description:
        "Культурная столица Дальнего Востока, где встречаются русская, китайская, корейская и японская культуры",
      image:
        "https://images.unsplash.com/photo-1555116505-38ab61800975?w=500&q=80",
      tag: "Города",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-4 text-gray-900">
            Культурные сокровища
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Познакомьтесь с уникальными особенностями региона
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {item.tag}
                  </span>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-sm opacity-90 mb-1">{item.subtitle}</p>
                  <h3 className="text-xl font-bold font-montserrat mb-2">
                    {item.title}
                  </h3>
                </div>
              </div>

              <CardContent className="p-6">
                <p className="text-gray-600 leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="flex items-center text-forest-600 font-medium group-hover:text-forest-700 transition-colors cursor-pointer">
                  <Icon name="Eye" size={16} className="mr-2" />
                  Подробнее
                  <Icon
                    name="ArrowUpRight"
                    size={16}
                    className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
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

export default CulturalHighlights;
