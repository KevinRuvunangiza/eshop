import "../App.css";

// 1. Receive selectedSize and setSelectedSize as props
export default function SizeBox({ selectedSize, setSelectedSize }) {
  const availbleSizes = [8, 8.5, 9, 9.5, 10, 10.5, 11, 12, 12.5, 13, 13.5, 14];

  return (
    <div className="shoeSizeBox">
      <h3>Select Size:</h3>
      <p>Fits large; we recommend ordering half a size down</p>
      {availbleSizes.map((size, index) => {
        // 2. Check if the current button's size is the selected one
        const isActive = size === selectedSize;
        return (
          <button
            // 3. Set a dynamic className
            className={`shoeSizeBtn ${isActive ? "active" : ""}`}
            key={index}
            // 4. Update the state in App.jsx when a button is clicked
            onClick={() => setSelectedSize(size)}
          >
            UK {size}
          </button>
        );
      })}
    </div>
  );
}