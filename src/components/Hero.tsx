import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-cyan-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Свежие креветки
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Премиальные морепродукты с доставкой в день заказа. Только лучшие
          креветки со всего мира.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Смотреть каталог
          </Button>
          <Button variant="outline" size="lg">
            Узнать о доставке
          </Button>
        </div>

        <div className="mt-12 bg-orange-100 rounded-lg p-6 max-w-md mx-auto">
          <p className="text-orange-800 font-semibold">🔥 Акция дня</p>
          <p className="text-orange-700">Скидка 20% на креветки тигровые</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
