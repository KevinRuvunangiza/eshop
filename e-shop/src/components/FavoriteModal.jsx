import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import FavoriteArticle from "./FavoriteArticle";
import "../App.css";

export default function FavoritesModal({ closeModal }) {
  const { favorites, toggleFavorite } = useContext(CartContext);

  return (
    <div className="popup-backdrop" onClick={closeModal}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <h2>Your Favorites</h2>
        {favorites.length === 0 ? (
          <p>You haven't added any favorites yet.</p>
        ) : (
          <div className="favorites-list">
            {favorites.map((item) => (
              <FavoriteArticle
                key={item.name}
                item={item}
                onRemove={() => toggleFavorite(item)}
              />
            ))}
          </div>
        )}
        <button className="close-modal-btn" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
}
