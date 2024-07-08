export default function loadContactPage() {
  const main = document.getElementById("content");
  main.classList.remove("menu-container");
  const content = document.getElementById("content");
  content.innerHTML = "";

  const headline = document.createElement("h1");
  headline.textContent = "Contact Us";

  const contactInfo = document.createElement("div");
  contactInfo.innerHTML = `
    <p>Address: 123 Coffee Street, Bean Town</p>
    <p>Phone: (123) 456-7890</p>
    <p>Email: contact@coffeeshop.com</p>
  `;

  content.appendChild(headline);
  content.appendChild(contactInfo);
}
