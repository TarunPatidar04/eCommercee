import products from "./api/products.json";
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS";
import { getCartProductFromLS } from "./getCartProducts";
import { incrementDecrement } from "./incrementDecrement";
import { removeProdFromCart } from "./removeProdFromCart";
import { updateCartProductTotal } from "./updateCartProductTotal";

let cartProducts = getCartProductFromLS();

let filterProducts = products.filter((curProd) => {
  //   console.log(curProd.id);
  return cartProducts.some((curElem) => curElem.id === curProd.id);
});

// console.log(filterProducts);

//to update the addToCart page

const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");

const showCartProduct = () => {
  filterProducts.forEach((curdProd) => {
    const { category, id, image, name, stock, price } = curdProd;

    let productClone = document.importNode(templateContainer.content, true);

    const lSActualData = fetchQuantityFromCartLS(id, price);

    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productImage").src = image;

    productClone.querySelector(".productQuantity").textContent =
      lSActualData.quantity;
    productClone.querySelector(".productPrice").textContent =
      lSActualData.price;

    productClone
      .querySelector(".stockElement")
      .addEventListener("click", (event) => {
        incrementDecrement(event, id, stock, price);
      });

    productClone
      .querySelector(".remove-to-cart-button")
      .addEventListener("click", () => {
        removeProdFromCart(id);
      });

    cartElement.appendChild(productClone);
  });
};

showCartProduct();

updateCartProductTotal();

// const removeCartButton = document.querySelector(".remove-to-cart-button");
// const information = document.querySelector(".information ");
// removeCartButton.addEventListener("click", () => {
//   console.log(information);
// });
