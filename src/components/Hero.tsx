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

        <div className="mt-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg p-6 max-w-lg mx-auto text-white shadow-2xl animate-pulse">
          <p className="text-2xl font-bold mb-2">🦐 АКЦИЯ!</p>
          <p className="text-xl font-semibold mb-1">
            ПЕРВАЯ КРЕВЕТКА БЕСПЛАТНО
          </p>
          <p className="text-sm opacity-90">при заказе от 500₽</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
