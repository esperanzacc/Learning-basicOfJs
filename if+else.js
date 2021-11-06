// if的用法

// true or false
let condition = 100 < 50;
console.log("condition", condition);

// + - * /算術邏輯
// && || ! 邏輯運算值 布林值
// 從左邊開始比較
// && 兩邊都應該是true 結束才是true (and)較為嚴謹的格式
// || 只要有一邊是true，兩邊只要有一邊是true,結果就是true(or)部分符合就好
// ! 把結果反向
// let condition = !(true || false);

console.log("condition", condition);

let condition = true && false;

if (condition) {
  // 當我們的條件成立要做的事情
  console.log("確實大於50");
} else {
  // 當我們的條件沒有成立要做的事情
  console.log("錯誤");

  // === 比較兩者是true or false

  let scoreA = 100;
  let scoreB = 99;
  let condition = scoreA === scoreB;
  // > < >= <= === !==兩邊是否不相等 !就是反向
  // if (scoreA > scoreB) {
  console.log("A考得比較高分");
  // } else  {
  console.log("B考得比較高分");
}

// 第一個條件成立了我會做第一行的事情，接著會做下一行的事情，再來是下一行，
let score = 60;

if (score === 100) {
  console.log("好棒棒");
} else if (score === 70) {
  console.log("再加油");
} else if (score === 60) {
  console.log("下次再小心一點");
} else {
  console.log("去補修");
}
