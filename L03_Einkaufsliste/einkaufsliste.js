"use strict";
const form = document.getElementById('add item');
const nameInput = document.getElementById('name');
const quantityInput = document.getElementById('quantity');
const dateInput = document.getElementById('date');
const commentInput = document.getElementById('comment');
const boughtInput = document.getElementById('bought');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const newItem = {
        name: nameInput.value,
        quantity: parseInt(quantityInput.value),
        date: dateInput.value,
        comment: commentInput.value,
        bought: boughtInput.checked,
    };
    console.log("Neue Ware hinzugefügt:");
    console.log("Name:", newItem.name);
    console.log("Menge:", newItem.quantity);
    console.log("Datum:", newItem.date);
    console.log("Kommentar:", newItem.comment);
    console.log("gakauft:", newItem.bought);
});
//# sourceMappingURL=einkaufsliste.js.map