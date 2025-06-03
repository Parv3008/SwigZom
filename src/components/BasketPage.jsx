import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setNotes } from "../redux/actions/basketActions";
import { clearCart } from "../redux/actions/cartActions";
import ConfirmOrderModal from "../components/ConfirmOrderModal";
import categoriesData from "../data/categories.json";
import "../styles/BasketPage.scss";
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";


const BasketPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector((state) => state.cart.items);
  const { notes, tableNumber } = useSelector((state) => state.basket);

  const [showModal, setShowModal] = useState(false);

  const getMainCategoryName = (parentId) => {
    const subcategory = categoriesData.categories.find(
      (cat) => cat.id === parentId
    );
    if (!subcategory) return "Others";
    const mainCategory = categoriesData.categories.find(
      (cat) => cat.id === subcategory.parent
    );
    return mainCategory ? mainCategory.name : "Others";
  };

  const groupedItems = items.reduce((acc, item) => {
    const category = getMainCategoryName(item.product.parentId);
    if (!acc[category]) acc[category] = [];
    acc[category].push(item);
    return acc;
  }, {});

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

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const handleNoteChange = (e) => dispatch(setNotes(e.target.value));
  const handleConfirmClick = () => setShowModal(true);
  const handleCancel = () => setShowModal(false);

  const handlePlaceOrder = () => {
    dispatch(clearCart());
    setShowModal(false);
    navigate("/");
  };

  return (
    <div className="basket-wrapper">
      <h3>Checkout</h3>
      <div className="scroll">
        <div className="basket-header">
          <h4 className="location-title">
            Kempston Hammers Sports & Social Club
          </h4>
          <p className="location-address">
            134 High Street, Kempston, Bedford, <br /> Bedfordshire, MK42 7BN
          </p>
        </div>

        <div className="basket-content">
          {Object.entries(groupedItems).map(([category, items]) => (
            <div key={category} className="basket-category">
              <h3 className="category-title">
                {category} ({items.length})
              </h3>
              {items.map((item, idx) => {
                const variant = item.selectedVariant;
                const variantLabel = variant ? variant : "";
                const extras = item.selectedExtras.join(", ");
                const variantPrice = item.product.variants?.length
                  ? item.product.variants.find(
                      (v) => v.name === item.selectedVariant
                    )?.price ||
                    item.product.price ||
                    0
                  : item.product.price || 0;

                const extrasPrice = item.selectedExtras.reduce((sum, name) => {
                  const extra = item.product.extras?.find(
                    (e) => e.name === name
                  );
                  return sum + (extra?.price || 0);
                }, 0);

                const itemTotal = (variantPrice + extrasPrice) * item.quantity;

                return (
                  <div className="basket-item" key={idx}>
                    <div className="item-left">
                      <h5>
                        {item.quantity} x {item.product.name}
                      </h5>
                      <p className="variant-extras">
                        {[variantLabel, extras].filter(Boolean).join(", ")}
                      </p>
                    </div>
                    <div className="item-right">
                      <h5>£{itemTotal.toFixed(2)}</h5>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}

          <hr />
          <div className="basket-notes">
            <label>Add notes :</label>
            <textarea
              className="form-control"
              value={notes}
              onChange={handleNoteChange}
              placeholder="e.g. No ice in drinks"
              rows={6}
            />
          </div>
        </div>
      </div>

      <div className="bottom-cart" onClick={handleConfirmClick}>
        <div>
          <div className="table-number">
            <h2><FormattedMessage id="tableNumber"/></h2>
            <div className="table-badge">{tableNumber}</div>
          </div>
        </div>

        <div className="confirm-bar" style={{cursor: "pointer"}}>
          <h4><FormattedMessage id="confirmOrder"/></h4>
          <span>
            £{total.toFixed(2)} / {totalItems} ITEM
          </span>
        </div>
      </div>

      {showModal && (
        <ConfirmOrderModal onCancel={handleCancel} onConfirm={handlePlaceOrder} />
      )}
    </div>
  );
};

export default BasketPage;
