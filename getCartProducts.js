import { updateCartValue } from "./updateCartValue";

export const getCartProductFromLS = () => {
  let cardProducts = localStorage.getItem("cartProductLS");
  if (!cardProducts) {
    return [];
  }

  cardProducts = JSON.parse(cardProducts);
  updateCartValue(cardProducts);
  
  return cardProducts;
};
