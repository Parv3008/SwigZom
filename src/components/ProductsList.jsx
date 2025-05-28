import React from 'react';

const ProductsList = ({ products }) => {
  return (
    <div className="mt-4">
      {products.length === 0 ? (
        <div className="error">
          There is no product available
        </div>
      ) : (
        <div className="product-card">
          {products?.map(product => (
            <div key={product?.id} className="">
              <div className="card">
                <div className="card-body">
                  <div className="card-text">
                    <h6 className="card-title">{product?.name}</h6>
                    <p className="card-text">{product?.description}</p>
                  </div>
                  <div>
                    <strong className="fs-4">£{product?.price.toFixed(1)}</strong>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsList;
