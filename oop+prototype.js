"use strict";
//name always with first Capital letter
//arrow function can't work in function constructor
//constructor function

const Person = function (firstName, birthYear) {
  //Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};
// Never to this
// this.calcAge = function () {
// console.log(2037 - this.birthYear);}

//以下是建立新物件
const jonas = new Person("Jonas", 1991);
console.log(jonas);

/*
1. New empty object is created.
2. function is called. this ={}
3. {} linked to o prototype
4. function automatically return {}
 */

//以下只是示範而已，並且確認jonas這個物件是否真的存在於Person
const esperanza = new Person("Esperanza", 1996);
const teddy = new Person("Teddy", 1996);
console.log(esperanza, teddy);
console.log(jonas instanceof Person);

//Prototype是一個隱藏屬性，存在於每個物件中，它只能是一個物件或null
console.log(Person.prototype);
//希望建立的新物件都可以有以下function的方法，故要定義Person.prototype.calcAge
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
//也因此jonas已經繼承Person的prototype，這時候calcAge也包含在其中可以被呼叫了
jonas.calcAge();

console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jonas));
//Person.prototype.isPrototypeOf => .protoypeOfLinkedObjects

//以下是除了method(function)以外也可以建立新的properties
Person.prototype.species = "Homo Sapiens";
console.log(jonas.species, esperanza.species);
//新建立的物件只會存在於最原本的物件本身，其他繼承的物件不會顯示於其的properties
//可以透過以下方法確認
console.log(jonas.hasOwnProperty("firstName")); //will be true
console.log(jonas.hasOwnProperty("species")); //will be false

//Prototypal Inhertiance > Prototype chain 最源頭的prototype是Object
console.log(jonas.__proto__.__proto__); //constructor = Object

console.log(jonas.__proto__.__proto__.__proto__); //will be null

//舉例說明

const arr = [3, 6, 6, 5, 6, 9, 8, 10];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());
