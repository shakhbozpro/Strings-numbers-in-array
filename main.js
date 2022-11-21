let array = [1, "A", 5, 2, "D", "B", "C", 3, 4];

let strArray = [];
let numArray = [];

array.forEach(element => {
   if (typeof (element) === "string") {
      strArray.push(element);
   }

   if (typeof (element) === "number") {
      numArray.push(element);
   }
});

let srStrArray = strArray.sort();
let srNumArray = numArray.sort();
let newArray = strArray.concat(numArray);

console.log(strArray);
console.log(numArray);
console.log(newArray);