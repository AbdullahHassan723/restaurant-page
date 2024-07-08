import loadInitialPage from "./loadInitialPage";
import loadMenuPage from "./loadMenuPage";
import loadContactPage from "./loadContactPage";
import "./styles.css"; // Import CSS file

document.addEventListener("DOMContentLoaded", () => {
  loadInitialPage();

  document
    .getElementById("home-button")
    .addEventListener("click", loadInitialPage);
  document
    .getElementById("menu-button")
    .addEventListener("click", loadMenuPage);
  document
    .getElementById("contact-button")
    .addEventListener("click", loadContactPage);
});
