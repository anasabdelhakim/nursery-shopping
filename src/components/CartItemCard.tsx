import { useDispatch } from "react-redux";
import {
  type CartItem,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "@/store/cartSlice";
import { Trash2, Plus, Minus } from "lucide-react";

interface CartItemCardProps {
  item: CartItem;
}

const CartItemCard = ({ item }: CartItemCardProps) => {
  const dispatch = useDispatch();
  const itemTotal = item.price * item.quantity;

  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 bg-card rounded-xl border border-border animate-fade-in">
      {/* Image */}
      <div className="w-full sm:w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Details */}
      <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex-1">
          <h3 className="font-display text-lg font-semibold text-foreground">
            {item.name}
          </h3>
          <p className="text-muted-foreground">${item.price.toFixed(2)} each</p>
        </div>

        {/* Quantity Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => dispatch(decrementQuantity(item.id))}
            className="quantity-btn"
            aria-label="Decrease quantity"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="w-8 text-center font-semibold text-lg">
            {item.quantity}
          </span>
          <button
            onClick={() => dispatch(incrementQuantity(item.id))}
            className="quantity-btn"
            aria-label="Increase quantity"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>

        {/* Item Total */}
        <div className="text-right sm:w-24">
          <p className="text-lg font-bold text-forest">
            ${itemTotal.toFixed(2)}
          </p>
        </div>

        {/* Delete Button */}
        <button
          onClick={() => dispatch(removeFromCart(item.id))}
          className="p-2 rounded-lg text-destructive hover:bg-destructive/10 transition-colors self-start sm:self-center"
          aria-label="Remove item"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default CartItemCard;
