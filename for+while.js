//For迴圈 與while的差別是知道何時迴圈停止
//for()裡面會有三個分號，第一個是intialization;第二個是條件；第三個final expression

i++; // i = i + 1
for (let i = 5; i < 10; i += 2) {
  console.log("i:", i);
}

//count backwards with a for loop
var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}

console.log(ourArray);

// i < 3迴圈三次
//3個人的班級
// 0 1 2 -> classA的index
let classA = [100, 70, 59];
classA.push(40);
console.log("classA", classA);
console.log(classA[0]);
console.log(classA[1]);
onsole.log(classA[2]);
console.log(classA[3]);
for (let i = 0; i < classA.length; i++) {
  console.log("i:", classA[i]);
}

for (let i = 0; i < classA.length; i++) {
  if (i === 2) {
    //表示不僅值一樣是2，正負數也是一樣
    classA[i] = 999;
  }
}
console.log("classA", classA);
console.log("i:", classA[i]);

//while迴圈 for可以做的while也可以做到 (布林值true/false)
let condition = true;
let target = 10;
let i = 0;

while (condition) {
  if (i === target) {
    condition = false;
  }
  console.log(i);
  i++;
}

//補充其他函數篇
//generate random fractions
function randomFraction() {
  //randomFraction是一個函數

  return Math.random(); //math.random never be 1, but it can be 0
}

console.log(randomFraction());

//random whole number
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);
function randomWholeNum() {
  return Math.floor(Math.random() * 10); //floor rounding down
}

console.log(randomWholeNum());

//use the parseInt function

function convertToInteger(str) {
  return parseInt(str);
}

convertToInteger("58");

//use the ParseInt funciton with a Radix基數

function convertToInteger(str) {
  return parseInt(str, 2);
}

convertToInteger("10011"); //binary

//use the conditional(Ternary)operators
//condition? statement-if-true : false;

function checkEqual(a, b) {
  return a === b ? true : false;
  //一般來說也可以寫成 return a === b;
}

checkEqual(2, 15);

//use multiple conditional(Ternary)operators

function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

checkSign(10);

// const cars = ["BMW", "Benz", "Volovo", "Toyota"]
// let text = " ";
// for (let i=0; i < cars.length; i++){
