import { getCartProductFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

// to get the cart data from localStorage
// to update the cart value and also to get the data always ready from localstorage

getCartProductFromLS();

// to add the data into localStorage

export const addToCart = (event, id, stock) => {
  let arrLocalStorageProduct = getCartProductFromLS();
  const currentProductElem = document.querySelector(`#card${id}`);
  console.log(currentProductElem);

  let quantity = currentProductElem.querySelector(".productQuantity").innerText;

  let price = currentProductElem.querySelector(".productPrice").innerText;
  console.log(price, quantity);

  // console.log(arrLocalStorageProduct)

  price = price.replace("₹", "");
  //   console.log(price);

  let existingProd = arrLocalStorageProduct.find(
    (curProd) => curProd.id === id
  );

  if (existingProd && quantity > 1) {
    // console.log( typeof existingProd.quantity)
    quantity = Number(existingProd.quantity) + Number(quantity);
    price = Number(price * quantity);

    let updateCart = { id, quantity, price };
    updateCart = arrLocalStorageProduct.map((curProd) => {
      return curProd.id === id ? updateCart : curProd;
    });

    console.log(updateCart);

    localStorage.setItem("cartProductLS", JSON.stringify(updateCart));

    //show toast when product is added

    showToast("add", id);
  }

  if (existingProd) {
    // alert("Bhai duplicate hai");
    return false;
  }

  price = Number(price * quantity);
  quantity = Number(quantity);
  console.log(price, quantity);

  //   let updateCart = { id, quantity, price };
  //   arrLocalStorageProduct.push(updateCart)

  // let updateCart = ;
  arrLocalStorageProduct.push({ id, quantity, price });
  localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));
  //   console.log(localStorage);
  // console.log(arrLocalStorageProduct.length)

  updateCartValue(arrLocalStorageProduct);

  //show toast when product is added
  showToast("add", id);
};
