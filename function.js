//function只有這個詞
//set up
function hello() {
  console.log("hi");
}
hello(); //will be hi

//說明區
//hello means fuction name
// ( ) pass information into the parenthesis
// Function parameters are listed inside the parentheses () in the function definition.
// console.log('hi')每次喚醒這個function要顯示的資訊

function addMoney(a, b, c) {
  var result = a + b - c;
  console.log(result);
}
addMoney(100, 200, 50);

//有參數的function接受傳入2個參數
function addMoney(price1, price2, discount) {
  console.log("price1", price1);
  console.log("price2", price2);
  console.log("discount", discount);
  console.log(price1 + price2 - discount);
}

//Return a value from a Function with Return
//set up
function minusSeven(num) {
  return num - 7;
}
console.log(minusSeven(10)); //answer is 3

//Returning Boolean Values from Functions
function isLess(a, b) {
  return a < b;
}

console.log(isLess(20, 15)); //answer is False

//加總數學function
function getSum(num1, num2) {
  // process
  const sum = num1 + num2;
  return sum;
}

function getSumWithoutReturn(num1, num2) {
  // process
  const sum = num1 + num2;
}

// 10
let resultNum = 5 + 5;
console.log("resultNum", resultNum);

//
resultNum = getSum(5, 5);
// what happens here is...
// resultNum = 10;
console.log("resultNum", resultNum);

resultNum = getSumWithoutReturn(5, 5);
// what happens here is...
// resultNum = undefined;
console.log("resultNum", resultNum);

//practice for arrow function
//arrow function
//normal one
function hello(name, id) {
  return `Hello, ${name} . Your user id is, ${id}.`;
}

//covert arrow function
hello = (name, id) => {
  return `Hello, ${name} . Your user name is ${id}.`;
};
