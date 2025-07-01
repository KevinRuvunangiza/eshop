import { useState } from "react";
import MikeLogo from "../assets/Mike_Logo.png"; // Using your logo
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";
import CartModal from "./CartModal";
import FavoritesModal from "./FavoriteModal";
import "../App.css";

export default function Header() {
  // State for each modal, keeping them separate
  const [isCartOpen, setCartOpen] = useState(false);
  const [isFavoritesOpen, setFavoritesOpen] = useState(false);

  return (
    <>
      <header>
        <img src={MikeLogo} alt="Mike Logo" width="80px" />

        

        <div className="header-icons">
          {/* Favorites Button: Opens the favorites modal */}
          <button className="header-icon-btn" onClick={() => setFavoritesOpen(true)}>
            <FontAwesomeIcon icon={faHeart} size="lg" />
          </button>

          {/* Cart Button: Opens the cart modal */}
          <button className="header-icon-btn" onClick={() => setCartOpen(true)}>
            <FontAwesomeIcon icon={faShoppingCart} size="lg" />
          </button>
        </div>
      </header>

      {/* These modals will only appear when their respective state is true */}
      {isCartOpen && <CartModal cartState={setCartOpen} />}
      {isFavoritesOpen && <FavoritesModal closeModal={() => setFavoritesOpen(false)} />}
    </>
  );
}
