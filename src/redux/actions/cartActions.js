import { ADD_TO_CART, REMOVE_FROM_CART } from "../types/cartTypes";

export const addToCart = (
  product,
  selectedVariant,
  selectedExtras,
  quantity
) => {
  return {
    type: ADD_TO_CART,
    payload: {
      product,
      selectedVariant: product.variants?.length ? selectedVariant : "",
      selectedExtras: product.extras?.length ? selectedExtras : [],
      quantity,
    },
  };
};

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});

export const clearCart = () => ({
  type: "CLEAR_CART",
});
