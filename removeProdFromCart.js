import { getCartProductFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

export const removeProdFromCart = (id) => {
  let cartProducts = getCartProductFromLS();
  cartProducts = cartProducts.filter((curProd) => curProd.id !== id);
  console.log(cartProducts);
  localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));

  let removeDiv = document.getElementById(`card${id}`);
  console.log(removeDiv);
  if (removeDiv) {
    removeDiv.remove();
    showToast("delete", id);
  }

  updateCartValue(cartProducts);
};
