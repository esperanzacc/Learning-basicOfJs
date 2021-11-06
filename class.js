//class expression
// const PersonCl = class {};

//class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  //just like what we do in prototype inheritance
  //outside the constructor, but inside the class
  //Method will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const jessica = new PersonCl("jessica", 1996);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);

jessica.greet();

//important things:
/*
1. Classes are NOT hoisted
2. Classes are first-class citizes
3. Classes are executed in stict mode 

JavaScript中沒有真正的「類別」實體。

class 宣告出來的本體是「函式」。
*/

/*傳統的prototype-based 會需要：
定義constructor
在prototype物件上定義方法*/

function User(name) {
  this.name = name;
}

User.prototype.sayHi = function () {
  console.log(this.name);
};

let user = new User("John");
user.sayHi();

//改用 class 語法改寫，我們需要在 class body 裡定義：

//constructor方法 & 其他方法

class User1 {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(this.name);
  }
}

//其中

// sayHi() {
//   ...
// }

//這種寫法是在 class 中定義「物件方法」的語法。

//靜態方法static method
class Article {
  static compare(a, b) {
    return a.date < b.date ? -1 : 1;
  }
}

//articles.sort(Article.compare);

//其效果等同於直接定義一個方法在class的屬性上

class Article1 {}

Article1.compare = function (a, b) {
  // ...
};

//用extends繼承類別
//例如，想要 Rabbit 類別繼承自 Animal 類別。

//非常簡單，只要使用 class Rabbit extends Animal 語法：
class Animal {
  // ...
  run() {
    // Run...
  }
}

class Rabbit extends Animal {
  // ...
}

let rabbit = new Rabbit();
rabbit.run(); // From `Animal`

//覆寫 (Override) 母類別方法
/*
就像其他語言一樣，繼承的類別可以覆寫母類別的方法。
但是通常我們不一定想要整個覆蓋掉母類別的方法，而是會根據既有的母類別的方法去延伸功能。
想要延伸既有的方法，可以用 super 關鍵字，呼叫母類別的方法。
*/
class Animal1 {
  // ...
  run() {
    console.log("Animal run!");
  }
}

class Rabbit1 extends Animal1 {
  // ...
  run() {
    super.run(); // Animal run!
    console.log("Rabbit jump!");
  }
}

//getters => access properties
//setters => change (mutate) them
