import "./App.css";
import Header from "./components/Header";
import ShowCaseImage from "./components/ShowCasedImage";
import AddToCartButton from "./components/AddToCartButton";
import AddToFavoriteButton from "./components/AddToFavoriteButton";
import SizeBox from "./components/SizeBox";
import ImageGalery from "./components/ImageGallery";
import { useState } from "react";





function App() {
  const [image, setImage] = useState();

  function displayImage(img) {
    setImage(img);
  }

  return (
    <>
   
      <Header />
      <div className="main-container">
        <div className="images">
          <ImageGalery handleClick={displayImage}/>

          <ShowCaseImage shoeImage={image} />

        </div>
        <div className="inputs">
          <div className="titleContainer">
            <p id="title">Mike Air Force 1</p>
            <p>Men's Shoes</p>
          </div>

          <p id="priceText">R2,3999.95</p>
          <SizeBox />
          <div className="inputs-buttons">
            <AddToCartButton />
            <AddToFavoriteButton />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
