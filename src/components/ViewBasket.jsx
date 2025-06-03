import React from "react";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ViewBasket = () => {
  const navigate = useNavigate();
  const items = useSelector((state) => state.cart.items);

  if (items.length === 0) return null;

  const total = items.reduce((sum, item) => {
    const variantPrice = item.product.variants?.length
      ? item.product.variants.find((v) => v.name === item.selectedVariant)
          ?.price ||
        item.product.price ||
        0
      : item.product.price || 0;

    const extrasPrice = item.selectedExtras.reduce((extraSum, name) => {
      const extra = item.product.extras?.find((e) => e.name === name);
      return extraSum + (extra?.price || 0);
    }, 0);

    return sum + (variantPrice + extrasPrice) * item.quantity;
  }, 0);

  return (
    <div className="view-basket-bar fixed-bottom bg-warning p-3 d-flex justify-content-between" onClick={() => navigate('/basket')} style={{cursor: "pointer"}}>
      <span>
        <strong><FormattedMessage id="viewBasket"/></strong>
      </span>
      <span>
        <strong>
          £{total.toFixed(2)} / {items.length} item(s)
        </strong>
      </span>
    </div>
  );
};

export default ViewBasket;
