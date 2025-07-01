import { useContext } from "react";
import CartArticle from "./CartArticle";
import { CartContext } from "../context/CartContext";

export default function CartModal({ cartState }) {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const cartTotal = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="popup-backdrop">
      <div className="popup-content">
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <CartArticle
                key={item.name}
                item={item}
                onRemove={() => removeFromCart(item)}
              />
            ))}
            <div className="cart-total">
              <strong>Total: R{cartTotal.toFixed(2)}</strong>
            </div>
          </>
        )}
        <button onClick={() => cartState(false)} className="close-modal-btn">Close</button>
      </div>
    </div>
  );
}