import shoeFrontView from "../assets/Air_Force_Frontview.avif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartCrack } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

export default function FavoriteArticle({ item, onRemove }) {
  return (
    <div className="favoriteArticle">
      <img src={shoeFrontView} alt={item.name} />
      <div className="favoriteArticleText">
        <p id="favoriteArticleTitle">{item.name}</p>
        <p id="favoriteArticlePrice">R{item.price.toFixed(2)}</p>
      </div>
      <button onClick={onRemove} className="remove-favorite-btn" title="Remove from Favorites">
        <FontAwesomeIcon icon={faHeartCrack} />
      </button>
    </div>
  );
}
