import CartArticle from "../components/CartArticle";
import { useCart } from "./CartContext";

export default function CartModal({ cartState }) {
  let cartArticles = [];
  const { cartItems, setIsCartOpen } = useCart();
  return (
    <>
      <div className="popup-backdrop">
        <div className="popup-content">
          <h2>Your Cart</h2>
          {cartArticles.map(() => {
            return <CartArticle />;
          })}
          <button onClick={() => cartState(false)}>Close</button>
        </div>
      </div>
    </>
  );
}
