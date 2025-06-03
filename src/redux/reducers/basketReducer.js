const initialState = {
  items: {},
  note: "",
  tableNumber: Math.floor(Math.random() * 20) + 1,
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_BASKET_NOTE":
      return { ...state, note: action.payload };

    case "SET_RANDOM_TABLE_NUMBER":
      return { ...state, tableNumber: Math.floor(Math.random() * 20) + 1 };

    case "INIT_BASKET_FROM_CART":
      return { ...state, items: action.payload };

    default:
      return state;
  }
};

export default basketReducer;
