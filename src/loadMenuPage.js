export default function loadMenuPage() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const menuItems = [
    {
      name: "Espresso",
      description:
        "A strong black coffee made by forcing steam through ground coffee beans.",
      ingredients: "Coffee beans",
      price: "$2.50",
      type: "hot",
    },
    {
      name: "Cappuccino",
      description:
        "An Italian coffee drink that is traditionally prepared with double espresso, hot milk, and steamed milk foam.",
      ingredients: "Espresso, milk, milk foam",
      price: "$3.00",
      type: "hot",
    },
    {
      name: "Iced Latte",
      description: "Chilled espresso with cold milk.",
      ingredients: "Espresso, cold milk, ice",
      price: "$3.75",
      type: "cold",
    },
    {
      name: "Latte",
      description: "A coffee drink made with espresso and steamed milk.",
      ingredients: "Espresso, steamed milk",
      price: "$3.50",
      type: "hot",
    },
    {
      name: "Mocha",
      description: "A chocolate-flavored variant of a caffè latte.",
      ingredients: "Espresso, chocolate syrup, steamed milk, whipped cream",
      price: "$4.00",
      type: "hot",
    },
    {
      name: "Cold Brew",
      description:
        "Coffee brewed with cold water over a longer period of time.",
      ingredients: "Coffee beans, cold water",
      price: "$4.00",
      type: "cold",
    },
    {
      name: "Iced Americano",
      description: "Diluted espresso served over ice.",
      ingredients: "Espresso, cold water, ice",
      price: "$3.25",
      type: "cold",
    },
    {
      name: "Americano",
      description:
        "A type of coffee prepared by diluting espresso with hot water.",
      ingredients: "Espresso, hot water",
      price: "$2.75",
      type: "hot",
    },
    {
      name: "Macchiato",
      description:
        "A coffee drink made with espresso and a small amount of milk.",
      ingredients: "Espresso, milk foam",
      price: "$3.25",
      type: "hot",
    },
    {
      name: "Iced Mocha",
      description:
        "Chilled chocolate-flavored espresso with cold milk and whipped cream.",
      ingredients: "Espresso, chocolate syrup, cold milk, whipped cream, ice",
      price: "$4.50",
      type: "cold",
    },
    {
      name: "Flat White",
      description:
        "A coffee drink originating from Australia, made with espresso and steamed milk.",
      ingredients: "Espresso, steamed milk",
      price: "$3.75",
      type: "hot",
    },
    {
      name: "Affogato",
      description:
        "A dessert consisting of a scoop of vanilla gelato or ice cream topped with a shot of hot espresso.",
      ingredients: "Espresso, vanilla gelato",
      price: "$4.50",
      type: "hot",
    },
    {
      name: "Cold Chocolate",
      description: "Chilled chocolate milkshake.",
      ingredients: "Chocolate syrup, milk, ice cream, ice",
      price: "$4.25",
      type: "cold",
    },
    {
      name: "Iced Chai Latte",
      description: "Chilled spiced tea with cold milk.",
      ingredients: "Chai tea, cold milk, ice",
      price: "$3.50",
      type: "cold",
    },
    {
      name: "Fruit Smoothie",
      description: "Blended mix of assorted fruits and yogurt.",
      ingredients: "Assorted fruits, yogurt, ice",
      price: "$4.25",
      type: "cold",
    },
    {
      name: "Irish Coffee",
      description:
        "A cocktail consisting of hot coffee, Irish whiskey, and sugar, stirred, and topped with cream.",
      ingredients: "Coffee, Irish whiskey, sugar, cream",
      price: "$5.00",
      type: "hot",
    },
    {
      name: "Turkish Coffee",
      description:
        "A traditional method of brewing finely ground coffee beans without filtering.",
      ingredients: "Coffee beans",
      price: "$3.50",
      type: "hot",
    },
    {
      name: "Vienna Coffee",
      description:
        "A cream-based coffee beverage, combining strong black coffee with whipped cream.",
      ingredients: "Coffee, whipped cream",
      price: "$4.25",
      type: "hot",
    },
    {
      name: "Frappuccino",
      description:
        "A blended coffee drink made with coffee or crème base, blended with ice and other ingredients.",
      ingredients: "Coffee, milk, ice, flavorings",
      price: "$4.25",
      type: "cold",
    },
    {
      name: "Iced Coffee",
      description: "Chilled coffee beverage served over ice cubes.",
      ingredients: "Coffee, ice",
      price: "$3.00",
      type: "cold",
    },
    {
      name: "Hot Chocolate",
      description:
        "A heated beverage consisting of shaved chocolate, melted chocolate, or cocoa powder, heated milk or water, and sugar.",
      ingredients: "Chocolate, milk, sugar",
      price: "$3.50",
      type: "hot",
    },
    {
      name: "Iced Tea",
      description: "Chilled black or green tea served over ice.",
      ingredients: "Tea leaves, cold water, ice",
      price: "$2.50",
      type: "cold",
    },
  ];

  menuItems.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("menu-item");
    const main = document.getElementById("content");
    main.classList.add("menu-container");

    if (item.type === "hot") {
      card.classList.add("hot");
    } else if (item.type === "cold") {
      card.classList.add("cold");
    }

    const itemName = document.createElement("h2");
    itemName.textContent = item.name;

    const itemDescription = document.createElement("p");
    itemDescription.textContent = item.description;

    const itemIngredients = document.createElement("p");
    itemIngredients.classList.add("ingredients");
    itemIngredients.textContent = "Ingredients: " + item.ingredients;

    const itemPrice = document.createElement("p");
    itemPrice.classList.add("price");
    itemPrice.textContent = "Price: " + item.price;

    card.appendChild(itemName);
    card.appendChild(itemDescription);
    card.appendChild(itemIngredients);
    card.appendChild(itemPrice);

    content.appendChild(card);
  });
}
