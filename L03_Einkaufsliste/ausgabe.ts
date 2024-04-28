import ShoppingList from './einkaufsliste';

const shoppingList = new ShoppingList();

function displayShoppingList() {
}

function addItemToList(item: ListItem) {
  shoppingList.addItem(item);
  displayShoppingList();
}

form.addEventListener('submit', (event: Event) => {
  event.preventDefault();

  const newItem: ListItem = {
    name: nameInput.value,
    quantity: parseInt(quantityInput.value),
    date: dateInput.value,
    comment: commentInput.value,
    bought: boughtInput.checked,
  };

  addItemToList(newItem);
});

displayShoppingList();
