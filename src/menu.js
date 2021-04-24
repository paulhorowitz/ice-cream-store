import 'bootstrap';

// Removes current content from page and renders the menu page

function renderMenuPage(productinfo) {
    const maindiv = document.getElementById("content");

    // removes current content
    while (maindiv.firstChild) {
        maindiv.removeChild(maindiv.firstChild);
    }

    // render main page
    const menu = document.createElement("div")
    const h1el = document.createElement("h1");
    maindiv.appendChild(h1el);
    maindiv.appendChild(menu);
    menu.classList.add("menu");
    menu.id = "menu";
    h1el.innerHTML = "Menu";
    console.log(productinfo)

    // gets product info from data.js and runs card creation function until end of array
    for (var i = 0; i < productinfo.length; i++) {
        renderMenuCard(productinfo[i]);
    }
}

// creates each card and populates with information
function renderMenuCard(productinfo) {
    const maindiv = document.getElementById("content");
    const menu = document.getElementById("menu");
    const card = document.createElement("div");
    const cardbody = document.createElement("div");
    menu.appendChild(card);

    card.style = "width: 18rem;";

    const imgel = document.createElement("img");
    imgel.classList.add("card-img-top");
    imgel.src = productinfo.imagelink;
    card.appendChild(imgel)
    card.appendChild(cardbody);
    cardbody.classList.add("card-body")
    card.classList.add("card");
    const cardTitleEl = document.createElement("h5")
    cardTitleEl.classList.add("card-title");
    cardTitleEl.innerHTML = productinfo.title;
    const cardbodyEl = document.createElement("div");
    cardbody.classList.add("card-body")
    cardbody.appendChild(cardTitleEl);
    const cardText = document.createElement("p");
    cardText.classList.add("card-text")
    cardbody.appendChild(cardText)
    cardText.classList.add("card-text")
    cardText.innerHTML = (productinfo.description)
}

export default renderMenuPage;