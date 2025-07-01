import shoeFrontView from "../assets/Air_Force_Frontview.avif";

export default function CartArticle({ item, onRemove }) {
  const lineItemTotal = item.price * item.quantity;

  return (
    <div className="cartArticle">
      <img src={shoeFrontView} alt="" width="100px" />
      <div className="cartArticleText">
        <p id="articleTitle">{item.name}</p>
        {/* Replace the hardcoded size with the item's actual size */}
        <p>Size: {item.size}</p>
        <p id="articlePrice">
          Qty: {item.quantity} - R{lineItemTotal.toFixed(2)}
        </p>
      </div>
      <button onClick={onRemove} className="remove-btn">
        &times;
      </button>
    </div>
  );
}