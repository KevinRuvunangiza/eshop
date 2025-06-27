import "../App.css";
import shoeTopView from "../assets/Air_Force_Topview.avif";
import shoeSideView from "../assets/Air_Force_Sideview.avif";
import shoeFrontView from "../assets/Air_Force_Frontview.avif";
import shoeBottomView from "../assets/Air_Force_Bottomview.avif"
import shoeCloseUp from "../assets/Air_Force_closeup.avif"
const galleryImages = [shoeTopView, shoeSideView, shoeFrontView,shoeBottomView,shoeCloseUp];

export default function ImageGalery({handleClick}) {
  
  return (
    <div className="galleryContainer">
      {galleryImages.map((image, index) => {
        return (
          <img
            src={image}
            alt=""
            key={index}
            onClick={() => {
              handleClick(image);
            }}
          />
        );
      })}
    </div>
  );
}
