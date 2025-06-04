import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedProduct, clearSelectedProduct } from "../redux/actions/productActions";
import ProductMenu from "./ProductMenu";

const ProductsList = ({ products }) => {
  const dispatch = useDispatch();
  const selectedProduct = useSelector(state => state.product.selectedProduct);
  console.log(products, "asasa");
  const handleProductClick = (product) => {
    dispatch(setSelectedProduct(product));
  };

  const handleCloseMenu = () => {
    dispatch(clearSelectedProduct());
  };

  return (
    <div className="mt-4">
      {products.length === 0 ? (
        <div className="error">There is no product available</div>
      ) : (
        <div className="product-card">
          {products.map((product) => (
            <div
              key={product.id}
              style={{ cursor: "pointer" }}
              onClick={() => handleProductClick(product)}
            >
              <div className="card">
                <div className="card-body">
                  <div className="card-text">
                    <h6 className="card-title">{product.name}</h6>
                    <p className="card-text">{product.description}</p>
                  </div>
                  <div>
                    <span className="price">£{product.price.toFixed(1)}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedProduct && (
        <ProductMenu product={selectedProduct} onClose={handleCloseMenu} />
      )}
    </div>
  );
};

export default ProductsList;
