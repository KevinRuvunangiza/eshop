import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
export default function AddToFavoriteButton() {
  return (
    <>
      <button className="add-to-favourite-btn">
        Favourite <FontAwesomeIcon icon={faHeart} size="xl" />
      </button>
    </>
  );
}
