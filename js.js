let fruits = ["Яблуко", "Банан", "Груша"];
let result = "";

for (let i = 0; i < fruits.length; i++) {
  result = result + fruits[i];

  if (i < fruits.length - 1) {
    result = result + ",";
  }
}

console.log(result);



let fruits1 = ["Яблуко", "Банан", "Груша"];

let result1 = fruits.join(",");

console.log(result);


let cards = [
  "1",
  "2",
  "3"
];

console.log(cards);

cards.splice(1, 1);

console.log(cards);

cards[0] = "Повторити HTML";

console.log(cards);

cards.splice(1, 0, "Вивчити Git");

console.log(cards);