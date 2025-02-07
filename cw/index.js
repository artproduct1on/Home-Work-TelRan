"use strict";
;
const productsBlock = document.querySelector(".products_block"), button = document.querySelector(".button"), title = document.querySelector(".input-title"), price = document.querySelector(".input-price");
const products = [
    { title: 'Куртка', price: 1000 },
    { title: 'Шапка', price: 500 },
];
function createCard({ title, price }) {
    if (!productsBlock) {
        alert("Block is not defined!");
        return;
    }
    ;
    const cardElem = document.createElement("div"), titleElem = document.createElement("h3"), priceElem = document.createElement("p");
    titleElem.textContent = `Title: ${title}`;
    priceElem.textContent = `Price: ${price}$`;
    ;
    cardElem.append(titleElem, priceElem);
    productsBlock.append(cardElem);
}
;
products.forEach(i => createCard(i));
function addProduct() {
    if (title && price) {
        const productTitle = title.value || "NoName";
        const productPrice = Number(price.value);
        if (isNaN(productPrice) || productPrice <= 0) {
            alert("Please enter a valid price!");
            return;
        }
        ;
        const objProduct = {
            title: productTitle,
            price: productPrice,
        };
        products.push(objProduct);
        createCard(objProduct);
    }
    else {
        alert("Title or Price input is wrong!");
    }
}
;
button === null || button === void 0 ? void 0 : button.addEventListener("click", addProduct);
