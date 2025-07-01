import "../App.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function AddToCartButton() {
  const { addToCart, shoeInfo, quantityToAdd } = useContext(CartContext);

  return (
    <button
      className="add-to-cart-btn"
      onClick={() => addToCart(shoeInfo, quantityToAdd)}
    >
      Add to Cart
    </button>
  );
}