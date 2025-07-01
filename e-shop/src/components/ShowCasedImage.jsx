import shoeTopView from "../assets/Air_Force_Topview.avif";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ShowCaseImage({ shoeImage }) {
  const { quantityToAdd, setQuantityToAdd } = useContext(CartContext);

  function increaseNumOfItem() {
    setQuantityToAdd((prevQuantity) => prevQuantity + 1);
  }

  function decreaseNumOfItem() {
    setQuantityToAdd((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  }
  return (
    <div className="showcase-image">
      <img
        src={shoeImage || shoeTopView}
        alt="Shoe Top View"
        className="showcase-image"
      />
      <div className="numOfItemContainer">
        <button onClick={increaseNumOfItem}>
          <FontAwesomeIcon icon={faPlus} size="xl" />
        </button>
        <p>{quantityToAdd}</p>
        <button onClick={decreaseNumOfItem}>
          <FontAwesomeIcon icon={faMinus} size="xl" />
        </button>
      </div>
    </div>
  );
}