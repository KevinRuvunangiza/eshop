import "../App.css";
import MikeLogo from "../assets/Mike_Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import CartButton from "./CartBtn";
import { useState } from "react";
import CartModal from "./CartModal";

export default function Header() {
  const [showCart, setShowCart] = useState();

  function handleCart(cartState) {
    if (cartState === true) {
     setShowCart(cartState);
    } else{
        setShowCart(false)
    }
      
    console.log("Cart State: ", showCart);
  }
  return (
    <header>
      <img src={MikeLogo} alt="" width="100px" />
      <div className="linksContainer">
        <ul>
          <a href="">
            <li>
              <p>About</p>
            </li>
          </a>
          <a href="">
            <li>
              <FontAwesomeIcon icon={faHeart} size="lg" />
            </li>
          </a>

          <li>
            <CartButton showCart={handleCart} />
            {showCart ? <CartModal cartState={handleCart} /> : null}
          </li>
        </ul>
      </div>
    </header>
  );
}
