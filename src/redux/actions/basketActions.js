export const setBasketNote = (note) => ({
  type: "SET_BASKET_NOTE",
  payload: note,
});

export const setRandomTableNumber = () => ({
  type: "SET_RANDOM_TABLE_NUMBER",
});

export const initializeBasketFromCart = (cartItems) => {
  const grouped = {};

  cartItems.forEach((item) => {
    const category = item.product.category || "Others";
    if (!grouped[category]) grouped[category] = [];

    grouped[category].push({
      name: item.product.name,
      quantity: item.quantity,
      variant: item.selectedVariant,
      extras: item.selectedExtras,
      price:
        (item.product.variants?.find((v) => v.name === item.selectedVariant)?.price || 0) +
        item.selectedExtras.reduce((sum, extraName) => {
          const extra = item.product.extras?.find((e) => e.name === extraName);
          return sum + (extra?.price || 0);
        }, 0),
    });
  });

  return {
    type: "INIT_BASKET_FROM_CART",
    payload: grouped,
  };
};
