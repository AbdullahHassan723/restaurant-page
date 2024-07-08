/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/loadMenuPage.js":
/*!*****************************!*\
  !*** ./src/loadMenuPage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenuPage)\n/* harmony export */ });\nfunction loadMenuPage() {\n  var content = document.getElementById(\"content\");\n  content.innerHTML = \"\";\n  var menuItems = [{\n    name: \"Espresso\",\n    description: \"A strong black coffee made by forcing steam through ground coffee beans.\",\n    ingredients: \"Coffee beans\",\n    price: \"$2.50\",\n    type: \"hot\"\n  }, {\n    name: \"Cappuccino\",\n    description: \"An Italian coffee drink that is traditionally prepared with double espresso, hot milk, and steamed milk foam.\",\n    ingredients: \"Espresso, milk, milk foam\",\n    price: \"$3.00\",\n    type: \"hot\"\n  }, {\n    name: \"Iced Latte\",\n    description: \"Chilled espresso with cold milk.\",\n    ingredients: \"Espresso, cold milk, ice\",\n    price: \"$3.75\",\n    type: \"cold\"\n  }, {\n    name: \"Latte\",\n    description: \"A coffee drink made with espresso and steamed milk.\",\n    ingredients: \"Espresso, steamed milk\",\n    price: \"$3.50\",\n    type: \"hot\"\n  }, {\n    name: \"Mocha\",\n    description: \"A chocolate-flavored variant of a caffè latte.\",\n    ingredients: \"Espresso, chocolate syrup, steamed milk, whipped cream\",\n    price: \"$4.00\",\n    type: \"hot\"\n  }, {\n    name: \"Cold Brew\",\n    description: \"Coffee brewed with cold water over a longer period of time.\",\n    ingredients: \"Coffee beans, cold water\",\n    price: \"$4.00\",\n    type: \"cold\"\n  }, {\n    name: \"Iced Americano\",\n    description: \"Diluted espresso served over ice.\",\n    ingredients: \"Espresso, cold water, ice\",\n    price: \"$3.25\",\n    type: \"cold\"\n  }, {\n    name: \"Americano\",\n    description: \"A type of coffee prepared by diluting espresso with hot water.\",\n    ingredients: \"Espresso, hot water\",\n    price: \"$2.75\",\n    type: \"hot\"\n  }, {\n    name: \"Macchiato\",\n    description: \"A coffee drink made with espresso and a small amount of milk.\",\n    ingredients: \"Espresso, milk foam\",\n    price: \"$3.25\",\n    type: \"hot\"\n  }, {\n    name: \"Iced Mocha\",\n    description: \"Chilled chocolate-flavored espresso with cold milk and whipped cream.\",\n    ingredients: \"Espresso, chocolate syrup, cold milk, whipped cream, ice\",\n    price: \"$4.50\",\n    type: \"cold\"\n  }, {\n    name: \"Flat White\",\n    description: \"A coffee drink originating from Australia, made with espresso and steamed milk.\",\n    ingredients: \"Espresso, steamed milk\",\n    price: \"$3.75\",\n    type: \"hot\"\n  }, {\n    name: \"Affogato\",\n    description: \"A dessert consisting of a scoop of vanilla gelato or ice cream topped with a shot of hot espresso.\",\n    ingredients: \"Espresso, vanilla gelato\",\n    price: \"$4.50\",\n    type: \"hot\"\n  }, {\n    name: \"Cold Chocolate\",\n    description: \"Chilled chocolate milkshake.\",\n    ingredients: \"Chocolate syrup, milk, ice cream, ice\",\n    price: \"$4.25\",\n    type: \"cold\"\n  }, {\n    name: \"Iced Chai Latte\",\n    description: \"Chilled spiced tea with cold milk.\",\n    ingredients: \"Chai tea, cold milk, ice\",\n    price: \"$3.50\",\n    type: \"cold\"\n  }, {\n    name: \"Fruit Smoothie\",\n    description: \"Blended mix of assorted fruits and yogurt.\",\n    ingredients: \"Assorted fruits, yogurt, ice\",\n    price: \"$4.25\",\n    type: \"cold\"\n  }, {\n    name: \"Irish Coffee\",\n    description: \"A cocktail consisting of hot coffee, Irish whiskey, and sugar, stirred, and topped with cream.\",\n    ingredients: \"Coffee, Irish whiskey, sugar, cream\",\n    price: \"$5.00\",\n    type: \"hot\"\n  }, {\n    name: \"Turkish Coffee\",\n    description: \"A traditional method of brewing finely ground coffee beans without filtering.\",\n    ingredients: \"Coffee beans\",\n    price: \"$3.50\",\n    type: \"hot\"\n  }, {\n    name: \"Vienna Coffee\",\n    description: \"A cream-based coffee beverage, combining strong black coffee with whipped cream.\",\n    ingredients: \"Coffee, whipped cream\",\n    price: \"$4.25\",\n    type: \"hot\"\n  }, {\n    name: \"Frappuccino\",\n    description: \"A blended coffee drink made with coffee or crème base, blended with ice and other ingredients.\",\n    ingredients: \"Coffee, milk, ice, flavorings\",\n    price: \"$4.25\",\n    type: \"cold\"\n  }, {\n    name: \"Iced Coffee\",\n    description: \"Chilled coffee beverage served over ice cubes.\",\n    ingredients: \"Coffee, ice\",\n    price: \"$3.00\",\n    type: \"cold\"\n  }, {\n    name: \"Hot Chocolate\",\n    description: \"A heated beverage consisting of shaved chocolate, melted chocolate, or cocoa powder, heated milk or water, and sugar.\",\n    ingredients: \"Chocolate, milk, sugar\",\n    price: \"$3.50\",\n    type: \"hot\"\n  }, {\n    name: \"Iced Tea\",\n    description: \"Chilled black or green tea served over ice.\",\n    ingredients: \"Tea leaves, cold water, ice\",\n    price: \"$2.50\",\n    type: \"cold\"\n  }];\n  menuItems.forEach(function (item) {\n    var card = document.createElement(\"div\");\n    card.classList.add(\"menu-item\");\n    var main = document.getElementById(\"content\");\n    main.classList.add(\"menu-container\");\n    if (item.type === \"hot\") {\n      card.classList.add(\"hot\");\n    } else if (item.type === \"cold\") {\n      card.classList.add(\"cold\");\n    }\n    var itemName = document.createElement(\"h2\");\n    itemName.textContent = item.name;\n    var itemDescription = document.createElement(\"p\");\n    itemDescription.textContent = item.description;\n    var itemIngredients = document.createElement(\"p\");\n    itemIngredients.classList.add(\"ingredients\");\n    itemIngredients.textContent = \"Ingredients: \" + item.ingredients;\n    var itemPrice = document.createElement(\"p\");\n    itemPrice.classList.add(\"price\");\n    itemPrice.textContent = \"Price: \" + item.price;\n    card.appendChild(itemName);\n    card.appendChild(itemDescription);\n    card.appendChild(itemIngredients);\n    card.appendChild(itemPrice);\n    content.appendChild(card);\n  });\n}\n\n//# sourceURL=webpack://restaurant-app/./src/loadMenuPage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/loadMenuPage.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;