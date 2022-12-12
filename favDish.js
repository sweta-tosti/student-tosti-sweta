
favDish = ["pizza", 
           "pasta",
           "rösti",
           "Naan"];

console.log(favDish[0]);
console.log(favDish[1]);
console.log(favDish[2]);

console.log(favDish.length);
console.log(favDish);


favDish.push("lasagne");

console.log("I have " + favDish.length.toString() + " favorite dishes.");

console.log(favDish);

favDish.splice(1, 1);

console.log(favDish);

favDish.sort();

console.log(favDish);


console.log(favDish.length);
