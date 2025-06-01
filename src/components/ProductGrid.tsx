import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const products = [
    {
      id: 0,
      name: "Креветка в подарок 🎁",
      description: "Королевская креветка бесплатно при заказе от 500₽",
      price: 0,
      originalPrice: 150,
      image:
        "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=400&h=300&fit=crop",
      badge: "БЕСПЛАТНО",
      badgeColor: "destructive" as const,
    },
    {
      id: 1,
      name: "Креветки королевские",
      description: "Крупные тигровые креветки, 16-20 штук на кг",
      price: 1280,
      image:
        "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=400&h=300&fit=crop",
      badge: "Популярное",
      badgeColor: "default" as const,
    },
    {
      id: 2,
      name: "Креветки аргентинские",
      description: "Дикие красные креветки из Атлантики",
      price: 890,
      image:
        "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      name: "Креветки тигровые",
      description: "Черные тигровые креветки, 21-25 штук на кг",
      price: 960,
      originalPrice: 1200,
      image:
        "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop",
      badge: "Скидка -20%",
      badgeColor: "destructive" as const,
    },
    {
      id: 4,
      name: "Креветки северные",
      description: "Мелкие сладкие креветки из Баренцева моря",
      price: 750,
      image:
        "https://images.unsplash.com/photo-1563379091-20eada99c4a5?w=400&h=300&fit=crop",
    },
    {
      id: 5,
      name: "Креветки варёно-мороженые",
      description: "Готовые к употреблению, средний размер",
      price: 680,
      image:
        "https://images.unsplash.com/photo-1607330289382-c9b37fdb6b9c?w=400&h=300&fit=crop",
      badge: "Готово к подаче",
      badgeColor: "secondary" as const,
    },
    {
      id: 6,
      name: "Креветки лангустиновые",
      description: "Элитные крупные креветки премиум класса",
      price: 1850,
      image:
        "https://images.unsplash.com/photo-1597490152672-b7e7ecdbfd03?w=400&h=300&fit=crop",
      badge: "Premium",
      badgeColor: "default" as const,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Наш каталог</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Широкий выбор свежих креветок разных видов и размеров. Все товары
          проходят строгий контроль качества.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
