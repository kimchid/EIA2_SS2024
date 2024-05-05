interface ListItem {
  name: string;
  quantity: number;
  date: string;
  comment: string;
  bought: boolean;
}

const form = document.getElementById('add item') as HTMLFormElement;
const nameInput = document.getElementById('name') as HTMLInputElement;
const quantityInput = document.getElementById('quantity') as HTMLInputElement;
const dateInput = document.getElementById('date') as HTMLInputElement;
const commentInput = document.getElementById('comment') as HTMLInputElement;
const boughtInput = document.getElementById('bought') as HTMLInputElement;

form.addEventListener('submit', (event: Event) => {
  event.preventDefault();

  const newItem: ListItem = {
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

class ShoppingList {
  items: ListItem[];

  constructor() {
    this.items = [];
  }

  addItem(item: ListItem) {
    this.items.push(item);
  }

  toggleBoughtStatus(index: number) {
    this.items[index].bought = !this.items[index].bought;
  }
}


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

