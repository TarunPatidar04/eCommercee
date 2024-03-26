import { addToCart } from "./addToCart";
import { homeQuantityToggle } from "./homeQuantityToggle";

const productContainer = document.querySelector("#productContainer");
const productTemplate = document.querySelector("#productTemplate");
export const showProductContainer = (products) => {
  //    Step 3: Checking for Valid Input
  if (!products) {
    return false;
  }

  // ## Step 4: Iterating Over Products
  products.forEach((curProd) => {
    // Step 5:Destructuring Product Properties
    const { brand, category, description, id, image, name, price, stock } =
      curProd;

    // ## Step 6: Cloning the Templatez
    const productClone = document.importNode(productTemplate.content, true);

    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

    // ## Step 7: Updating Product Information
    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productImage").alt = name;
    productClone.querySelector(".productDescription").textContent = description;
    productClone.querySelector(".productStock").textContent = stock;
    productClone.querySelector(".productPrice").textContent = `₹ ${price}`;
    productClone.querySelector(".productActualPrice").textContent = `₹ ${
      price * 4
    }`;

    productClone
      .querySelector(".stockElement")
      .addEventListener("click", (event) => {
        homeQuantityToggle(event, id, stock);
      });

    productClone
      .querySelector(".add-to-cart-button")
      .addEventListener("click", (event) => {
       addToCart(event,id,stock);
      });

    // ## Step 9: Appending to Product Container
    productContainer.append(productClone);
  });
};
