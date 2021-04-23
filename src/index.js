import productinfo from "./data.js";

const { default: renderContactPage } = require("./contact");
const { default: renderMenuPage } = require("./menu");


// main div
const divnode = document.getElementById("content")

// Heading
const h1 = document.createElement("h1");
h1.id = "home-headline";
divnode.appendChild(h1);
document.getElementById("home-headline").innerHTML = "Chloe's Crazy Ice Cream";

// Subheading
const h2 = document.createElement("h2");
h2.id = "home-subheading";
divnode.appendChild(h2);
document.getElementById("home-subheading").innerHTML = "Make an Ice Cream that's as crazy as you are!";

// Description
const p = document.createElement("p");
p.id = "home-description";
divnode.appendChild(p);
document.getElementById("home-description").innerHTML = "At Chloe's Crazy Ice Cream, you can put 4 of your favourite toppings into our delicious ice cream base. Also, you can make your very own unique flavour of ice cream. You can also put Flakes, Lemons, Waffle Flakes and other fruit. Come to Chloe's Crazy Ice Cream shop. Open now.";

// Contact Page Button
const contactButton = document.getElementById("contact-button");

contactButton.addEventListener("click", function() {
    renderContactPage();
})

// Menu Page Button
const menuButton = document.getElementById("menu-button");

menuButton.addEventListener("click", function() {
    renderMenuPage(productinfo);
})