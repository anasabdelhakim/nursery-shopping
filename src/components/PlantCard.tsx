import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectAddedItems } from "@/store/cartSlice";

import { ShoppingBag, Check } from "lucide-react";
export type Plant = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
};

interface PlantCardProps {
  plant: Plant;
}

const PlantCard = ({ plant }: PlantCardProps) => {
  const dispatch = useDispatch();
  const addedItems = useSelector(selectAddedItems) || [];
  const isAdded = addedItems.includes(plant.id);

  const handleAddToCart = () => {
    if (!isAdded) {
      dispatch(
        addToCart({
          id: plant.id,
          name: plant.name,
          price: plant.price,
          image: plant.image,
        })
      );
    }
  };

  return (
    <div className="card-plant group">
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-square">
        <img
          src={plant.image}
          alt={plant.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-5">
        <span className="category-badge mb-2">{plant.category}</span>
        <h3 className="font-display text-xl font-semibold text-foreground mt-2 mb-1">
          {plant.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {plant.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-forest">
            ${plant.price.toFixed(2)}
          </span>
          <button
            onClick={handleAddToCart}
            disabled={isAdded}
            className={`btn-cart flex items-center gap-2 ${
              isAdded ? "bg-leaf" : ""
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-4 h-4" />
                Added
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                Add to Cart
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
