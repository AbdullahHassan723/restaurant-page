import coffeeShopImage from "./assets/images/coffee-shop.jpg";

export default function loadInitialPage() {
  const main = document.getElementById("content");
  main.classList.remove("menu-container");
  const content = document.getElementById("content");
  content.innerHTML = "";

  const img = document.createElement("img");
  img.src = coffeeShopImage;
  img.alt = "Coffee Shop Image";
  img.classList.add("coffee-shop-image");

  const headline = document.createElement("h1");
  headline.textContent = "Welcome to Our Coffee Shop!";

  const paragraph = document.createElement("p");
  paragraph.textContent =
    "Enjoy the finest coffee and pastries in a cozy and welcoming environment. Our coffee shop offers a variety of specialty coffees and delicious treats to start your day right.";

  content.appendChild(headline);
  content.appendChild(paragraph);
  content.appendChild(img);
}
