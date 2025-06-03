import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBasketNote } from "../redux/actions/basketActions";

const BasketPage = () => {
  const { items, note, tableNumber } = useSelector((state) => state.basket);
  const dispatch = useDispatch();

  const totalPrice = Object.values(items).flat().reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalItems = Object.values(items).flat().reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="basket-page p-3 pb-5">
      <h4 className="fw-bold">Checkout</h4>

      {Object.keys(items).map((category) => (
        <div key={category} className="mb-3">
          <h5 className="fw-bold">{category} ({items[category].length})</h5>
          {items[category].map((item, i) => (
            <div className="d-flex justify-content-between mb-2" key={i}>
              <div>
                <strong>{item.quantity} x {item.name}</strong>
                <div className="text-muted">{item.variant}, {item.extras?.join(", ")}</div>
              </div>
              <span>£{(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>
      ))}

      <div className="mt-4">
        <label className="form-label">Add notes:</label>
        <textarea
          className="form-control border-warning"
          value={note}
          onChange={(e) => dispatch(setBasketNote(e.target.value))}
        />
      </div>

      <div className="mt-3 d-flex align-items-center justify-content-between">
        <strong>Table Number</strong>
        <div className="border p-2 rounded border-warning">{tableNumber}</div>
      </div>

      <div className="fixed-bottom p-3 bg-warning text-center">
        <strong>CONFIRM ORDER</strong>
        <div>£{totalPrice.toFixed(2)} / {totalItems} ITEM{totalItems > 1 ? "S" : ""}</div>
      </div>
    </div>
  );
};

export default BasketPage;
