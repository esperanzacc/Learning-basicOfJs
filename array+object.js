//Array 陣列要用[] 沒有長度限制
let classA = ["apple", "banana", "peach"];
console.log("轉學前：", classA);

//如果要增加元素使用push
classA.push("grape");
console.log("轉學後:", classA);

//manipulate arrays with pop() removed最後一個元素
var ourArray = [1, 2, 3];
var removedFromOurArray = ourArray.pop();
console.log(ourArray); //will be[1, 2]

//Manipulate Arrays with shift() removed第一個元素
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
console.log(ourArray); //will be ["J", ["cat"]]

//Manipulate Arrays with unshift()
// add elements at the beginning
var ourArray = ["Stimpson", "J", ["cat"]];
ourArray.shift();
ourArray.unshift("Happpy");
console.log(ourArray); //will be ["Happpy", "J", ["cat"]]

//Modify Array Data with Indexes
var ourArray = [18, 64, 99];
outrArray[1] = 45; //result will be = [45, 64, 99]

let igPhotos = [
  "https://xx.img.com/a1.png",
  "https://xx.img.com/a2.png",
  "https://xx.img.com/a3.png",
];

console.log("NO.1", igPhotos[0]); //index = 0
console.log("NO.2", igPhotos[1]);
console.log("NO.3", igPhotos[2]);

console.log("igPhotos", igPhotos);
console.log("igPhotos", igPhotos.length);

// 物件 object 給它屬性 使用{} 可以是number,array,strings
const card = {
  name: "CC's card",
  address: "Taiwan",
  age: 25,
};
console.log("名字", card.name);

const post = {
  image: "https://xx.img.com/a1.png",
  date: "2022/02/10",
  comment: ["beauty", "pretty", "enjoy"],
};

const post2 = {
  image: "https://xx.img.com/a2.png",
  date: "2022/02/11",
  comment: ["beauty", "pretty", "enjoy", "happy", "awesome"],
};

const wall = [post, post2];
//console.log("wall", wall);

//change object properties
var ourDog = {
  name: "Camper",
  legs: 4,
  tails: 1,
  friends: ["everything!"],
};

ourDog.name = "Happy Camper";

//add new properties
var ourDog = {
  name: "Camper",
  legs: 4,
  tails: 1,
  friends: ["everything!"],
};

ourDog.bar = "woof!";
//you can also write
//ourDog["bark"] = "woof!"

//delete properties
var ourDog = {
  name: "Camper",
  legs: 4,
  tails: 1,
  friends: ["everything!"],
  bark: "woof!",
};

delete ourDog.bark;
