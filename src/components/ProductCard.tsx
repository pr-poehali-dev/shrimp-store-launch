import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
  badgeColor?: "default" | "secondary" | "destructive";
}

const ProductCard = ({
  name,
  description,
  price,
  originalPrice,
  image,
  badge,
  badgeColor = "default",
}: ProductCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 group">
      <CardHeader className="p-0 relative overflow-hidden rounded-t-lg">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {badge && (
          <Badge variant={badgeColor} className="absolute top-2 left-2">
            {badge}
          </Badge>
        )}
      </CardHeader>

      <CardContent className="p-4">
        <h3 className="font-semibold text-lg text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-3">{description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-900">{price} ₽</span>
            {originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                {originalPrice} ₽
              </span>
            )}
          </div>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
            В корзину
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
