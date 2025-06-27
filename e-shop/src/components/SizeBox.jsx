import "../App.css";

export default function SizeBox() {
  const availbleSizes = [8, 8.5, 9, 9.5, 10, 10.5, 11, 12, 12.5, 13, 13.5, 14];
  return (
    <div className="shoeSizeBox">
      <h3>Select Size:</h3>
      <p>Fits large; we recommend ordering half a size down</p>
      {availbleSizes.map((size,index) => {
        return <button className="shoeSizeBtn" key={index}>UK {size}</button>;
      })}
    </div>
  );
}
