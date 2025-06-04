import { ADD_TO_CART, REMOVE_FROM_CART } from "../types/cartTypes";

const initialState = {
  items: [],
};

function checkVarient(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const arr2Copy = [...arr2];
  for (let i = 0; i < arr1.length; i++) {
    const item = arr1[i];
    const index = arr2Copy.indexOf(item);
    if (index === -1) return false;
    arr2Copy.splice(index, 1);
  }

  return arr2Copy.length === 0;
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { product, selectedVariant, selectedExtras, quantity } = action.payload;

      const existingIndex = state.items.findIndex((item) => {
        return (
          item.product.id === product.id &&
          item.selectedVariant === selectedVariant &&
          checkVarient(item.selectedExtras, selectedExtras)
        );
      });
      
      if (existingIndex !== -1) {
        const updatedItems = [...state.items];
        updatedItems[existingIndex].quantity += quantity;

        return {
          ...state,
          items: updatedItems,
        };
      }

      return {
        ...state,
        items: [...state.items, action.payload],
      };
    }

    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((_, index) => index !== action.payload),
      };

    case "CLEAR_CART":
      return { ...state, items: [] };

    default:
      return state;
  }
};

export default cartReducer;
