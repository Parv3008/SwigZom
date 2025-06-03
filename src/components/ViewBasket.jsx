import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { initializeBasketFromCart } from "../redux/actions/basketActions";

const ViewBasket = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  if (items.length === 0) return null;

  const total = items.reduce((sum, item) => {
    const variantPrice = item.product.variants?.find(v => v.name === item.selectedVariant)?.price || 0;
    const extrasPrice = item.selectedExtras.reduce((sum, name) => {
      const extra = item.product.extras?.find((e) => e.name === name);
      return sum + (extra?.price || 0);
    }, 0);
    return sum + (variantPrice + extrasPrice) * item.quantity;
  }, 0);

  const handleClick = () => {
    dispatch(initializeBasketFromCart(items));
    navigate("/basket");
  };

  return (
    <div className="view-basket-bar fixed-bottom bg-warning p-3 d-flex justify-content-between" onClick={handleClick}>
      <span><strong>View Basket</strong></span>
      <span><strong>£{total.toFixed(2)} / {items.length} item(s)</strong></span>
    </div>
  );
};

export default ViewBasket;
