import "../App.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

export default function AddToFavoriteButton() {
  const { favorites, toggleFavorite, shoeInfo } = useContext(CartContext);

  const isFavorite = favorites.some((item) => item.name === shoeInfo.name);

  return (
    <button
      className={`add-to-favourite-btn ${isFavorite ? "active" : ""}`}
      onClick={() => toggleFavorite(shoeInfo)}
    >
      <FontAwesomeIcon icon={isFavorite ? faHeartSolid : faHeartRegular} />
      {isFavorite ? "Favorited" : "Add to Favorites"}
    </button>
  );
}
