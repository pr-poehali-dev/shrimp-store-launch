const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="text-2xl">🦐</span>
            <span className="text-lg font-semibold">Креветка</span>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-300 text-sm">
              Создатель магазина:{" "}
              <span className="font-semibold text-white">Иван Андреевич</span>
            </p>
            <p className="text-gray-400 text-xs mt-1">
              © 2024 Магазин морепродуктов
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
