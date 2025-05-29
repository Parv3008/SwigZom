import React, { useState, useEffect } from "react";
import "../styles/ProductMenu.scss";

const ProductMenu = ({ product, onClose }) => {
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (product?.variants?.length > 0) {
      setSelectedVariant(product.variants[0].name);
    }
    setSelectedExtras([]);
    setQuantity(1);
  }, [product]);

  if (!product) return null;

  const handleVariantSelect = (variant) => {
    setSelectedVariant(variant.name);
  };

  const handleExtraToggle = (extraName) => {
    setSelectedExtras((prev) =>
      prev.includes(extraName)
        ? prev.filter((e) => e !== extraName)
        : [...prev, extraName]
    );
  };

  const incrementQty = () => setQuantity((prev) => prev + 1);
  const decrementQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="bottom-modal" onClick={onClose}>
      <div className="bottom-container" onClick={(e) => e.stopPropagation()}>
        <div className="bottom-header">
          <h5>{product.name}</h5>
          <button onClick={onClose}>X</button>
        </div>
        <div className="bottom-body">
          {product.variants && (
            <>
              <h6>Size</h6>
              <div className="price-btn">
                {product.variants.map((v, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`${selectedVariant === v.name ? "isActive" : "notActive"}`}
                    onClick={() => handleVariantSelect(v)}
                  >
                    <span>{v.name}</span> <span>(£{v.price})</span>
                  </button>
                ))}
              </div>
            </>
          )}

          {product.extras && (
            <div className="mt-3">
              <h6>Select Options</h6>
              <div className="extra">
              {product.extras.map((e, idx) => (
                <div className="extras d-flex justify-content-between align-items-center mb-2" key={idx}>
                  <label htmlFor={`extra-${idx}`} className="mb-0">
                    {e.name} (+ £{e.price})
                  </label>
                  <div className="d-flex align-items-center">
                    <input
                      className="form-check-input ms-2"
                      type="checkbox"
                      id={`extra-${idx}`}
                      checked={selectedExtras.includes(e.name)}
                      onChange={() => handleExtraToggle(e.name)}
                    />
                  </div>
                </div>
              ))}
              </div>
            </div>
          )}

          <div className="mt-4">
            <div className="quantity d-flex justify-content-center align-items-center gap-3">
              <button className="qty-btn" onClick={decrementQty}> - </button>
              <span className="fs-5">{quantity}</span>
              <button className="qty-btn" onClick={incrementQty}>+</button>
            </div>
          </div>

          <div className="mt-4">
            <button className="Add-cart w-100">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductMenu;
