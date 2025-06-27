import shoeTopView from "../assets/Air_Force_Topview.avif";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function ShowCaseImage({ shoeImage }) {
  const [numOfItem, setNumOfItem] = useState(0);

  function increaseNumOfItem() {
    setNumOfItem((prevNumOfItem) => {
      return (prevNumOfItem += 1);
    });
  }

  function decreaseNumOfItem() {
    setNumOfItem((prevNumOfItem) => {
      return prevNumOfItem > 0 ? (prevNumOfItem -= 1) : (prevNumOfItem = 0);
    });
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
        <p>{numOfItem}</p>
        <button onClick={decreaseNumOfItem}>
          <FontAwesomeIcon icon={faMinus} size="xl" />
        </button>
      </div>
    </div>
  );
}
