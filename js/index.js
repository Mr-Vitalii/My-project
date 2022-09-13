
/* const cart =  {
  items: [],
  getItems() {
    return this.items;
  },

  add(product) {
    for (const item of this.items) {
      if (item.name === product.name) {
      item.quantity += 1;
      item.price *= item.quantity;
        return;
    }
  }

    const newProduct = {
    ...product,
    quantity: 1,
  };

    this.items.push(newProduct);
  },
  remove (productName) {},
  clear () {},
  countTotalPrise () {},
  increaseQuantity (productName) {},
  decreaseQuantity () {},
}

console.log(cart.getItems());


cart.add({name: "apple", price: 50});
cart.add({name: "apple", price: 50});
cart.add({name: "orange", price: 60});
cart.add({name: "grape", price: 80});
cart.add({name: "strawberry", price: 150});

console.table(cart.getItems());
 */

/* const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
]; */


/* or (const product of products) { */
  // Об'єкт книги
  /* console.log(product); */
  // Назва
  /* console.log(product.name); */
  // Автор
  /* console.log(product.price); */
  // Рейтинг
  /* console.log(product.quantity);
} */
/* for (const product of products ) {
console.log(product.name);
} */

/* function calculateTotalPrice(productName) {
  // Change code below this line
  let calculate = 0
  for (const product of products ) {
    // console.log(product.name); 
    if (productName === product.name) {
      console.log("FIND");
      console.log("Цена за штуку:", product.price);
      calculate = product.price * product.quantity
      console.log("Цена общая:", calculate);

      return calculate
    }
    return 0
  }
}

console.log(calculateTotalPrice("1")) */






