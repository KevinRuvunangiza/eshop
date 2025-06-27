import "../App.css";
import { useCart } from "./CartContext";

export default function AddToCartButton() {
  
  const {addToCart} = useCart()
  return (
    <>
      <button className="add-to-cart-btn" onClick={()=>addToCart}>
        Add to Cart
      </button>
    </>
  );
}
