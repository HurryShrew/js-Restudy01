function myFirstFunction(input) {
  result = input * input;
  console.log(result);
  let arr = [1, 2, 3];
  return arr;
}
function funcfunc(arr) {
  console.log(myFirstFunction(12));
}
funcfunc();

const add = function (x, y) {
  return x + y;
};

console.log(add(5, 6));
const square = function (x) {
  console.log(Math.pow(x, 2));
};
square(2);

const myMath = {
  PI: 3.14159,
  square: function (num) {
    return num * num;
  },
  cube(num) {
    return num ** 3;
  },
};

const fullNames = [
  { first: "Albus", last: "Dumbledore" },
  { first: "Harry", last: "Potter" },
  { first: "Hermione", last: "Granger" },
  { first: "Ron", last: "Weasley" },
  { first: "Rubeus", last: "Hagrid" },
  { first: "Minerva", last: "McGonagall" },
  { first: "Severus", last: "Snape" },
];

let firstNames = fullNames.map((x) => x.first);
console.log(firstNames);

fullNames.forEach((x) => console.log(x));

setInterval(function () {
  console.log("인터벌 실행중");
}, 3000);

setInterval(() => {
  let i = "화살표함수 실행중";
  return console.log(i);
}, 5000);

let numbers = [12, 24, 6, 8, 2, 100, 18, 14];
let maxNum = numbers.reduce((max, currentNum) => {
  if (currentNum > max) {
    return currentNum;
  }
  return max;
});
console.log(maxNum);
