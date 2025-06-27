export default function CartModal({ cartState }) {
  return (
    <>
      <div className="popup-backdrop">
        <div className="popup-content">
          <h2>Your Cart</h2>
          <p>1x Mike Air Force — R2,399.95</p>
          <button onClick={() => cartState(false)}>Close</button>
        </div>
      </div>
    </>
  );
}
