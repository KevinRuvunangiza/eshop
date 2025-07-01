import "./App.css";
import { useState, createContext, useEffect } from "react";
import { CartContext } from "./context/CartContext";
import Header from "./components/Header";
import ShowCaseImage from "./components/ShowCasedImage";
import AddToCartButton from "./components/AddToCartButton";
import AddToFavoriteButton from "./components/AddToFavoriteButton";
import SizeBox from "./components/SizeBox";
import ImageGalery from "./components/ImageGallery";
import Popup from "./components/Popup";

const shoeInfo = {
  name: "Mike Air Force 1",
  price: 23999.95,
  gender: "Men's Shoes",
};

function App() {
  const [image, setImage] = useState();
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [popup, setPopup] = useState({ isVisible: false, message: "" });
  const [quantityToAdd, setQuantityToAdd] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);

  function displayImage(img) {
    setImage(img);
  }

  const addToCart = (shoeToAdd, quantity = 1) => {
    if (!selectedSize) {
      setPopup({ isVisible: true, message: "Please select a size first!" });
      return;
    }

    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.name === shoeToAdd.name && item.size === selectedSize
      );

      if (existingItem) {
        return prevItems.map((item) =>
          item.name === shoeToAdd.name && item.size === selectedSize
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [
          ...prevItems,
          { ...shoeToAdd, quantity: quantity, size: selectedSize },
        ];
      }
    });
    setPopup({
      isVisible: true,
      message: `${quantity} x ${shoeToAdd.name} (Size: ${selectedSize}) added to cart!`,
    });
  };

  const removeFromCart = (shoeToRemove) => {
    setPopup({ isVisible: true, message: `${shoeToRemove.name} removed` });
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.name === shoeToRemove.name && item.size === shoeToRemove.size
      );
      if (existingItem?.quantity === 1) {
        return prevItems.filter(
          (item) => !(item.name === shoeToRemove.name && item.size === shoeToRemove.size)
        );
      }
      return prevItems.map((item) =>
        item.name === shoeToRemove.name && item.size === shoeToRemove.size
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
  };

  const toggleFavorite = (shoeToToggle) => {
    setFavorites((prevFavorites) => {
      const isFavorited = prevFavorites.some(
        (item) => item.name === shoeToToggle.name
      );

      if (isFavorited) {
        setPopup({ isVisible: true, message: "Removed from favorites" });
        return prevFavorites.filter((item) => item.name !== shoeToToggle.name);
      } else {
        setPopup({ isVisible: true, message: "Added to favorites!" });
        return [...prevFavorites, shoeToToggle];
      }
    });
  };

  useEffect(() => {
    if (!popup.isVisible) return;
    const timer = setTimeout(() => {
      setPopup({ isVisible: false, message: "" });
    }, 2500);
    return () => clearTimeout(timer);
  }, [popup]);

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    shoeInfo,
    quantityToAdd,
    setQuantityToAdd,
    selectedSize,
    setSelectedSize,
    favorites,
    toggleFavorite,
  };

  return (
    <>
      <CartContext.Provider value={contextValue}>
        <Header />
        <div className="main-container">
          <div className="images">
            <ImageGalery handleClick={displayImage} />
            <ShowCaseImage shoeImage={image} />
          </div>
          <div className="inputs">
            <div className="titleContainer">
              <p id="title">{shoeInfo.name}</p>
              <p>{shoeInfo.gender}</p>
            </div>
            <p id="priceText">R{shoeInfo.price.toFixed(2)}</p>
            <SizeBox selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
            <div className="inputs-buttons">
              <AddToCartButton />
              <AddToFavoriteButton />
            </div>
          </div>
        </div>
        <Popup message={popup.message} isVisible={popup.isVisible} />
      </CartContext.Provider>
    </>
  );
}

export default App;
