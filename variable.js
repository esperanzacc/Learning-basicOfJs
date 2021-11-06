//宣告變數的方法可以是字串或是數字
//String 字串可以單雙引號
let title = "提示訊息";
let title1 = "錯誤";
let title2 = "成功";

//+法代表連接
let alert1 = title + title1;
let alert2 = title + title2;

console.log(alert1);
console.log(alert2);
//Q1會變成提示訊息錯誤
//Q2則是提示訊息成功

let score = 100; //number 數字
console.log(score % 3);
// + - * / % 加減乘除 ％取餘數 remainder
// ++代表+1/--代表-1/也可以十進位加減乘除

//如果想要表示
var a = 3;
var b = 17;
var c = 12;
//進行加減乘除運算時
a = a + 12; //可以寫成
a += 12;

a = a - 6; //可以寫成
a -= 6;

//講解布林值 是否問題 還有T/F
let isFake = true;
console.log(isFake);
//無法定義
let bag = undefined;
console.log(bag);
//null
let bag2 = null;
console.log(bag2);
//要注意無法定義和null並不是一樣的解釋

// let取代var var const不可被改變

let a1 = "aaa";
console.log(a1);

// 修改a1內容
a1 = "bbb";
console.log(a1);

//補充篇
//如果要Escaping literal quotes in strings by placing a backslash
var myStr = 'I am a "double quoted" string inside "double quotes"';
console.log(myStr);
var myStr = 'I am a "double quoted" string inside "double quotes"';
console.log(myStr);

//code output
// \\backslash
// \n new line
// \r carrriage return
// \t tab
// \b backspace
// \f form feed

var str = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(str);

//如果想知道這個字串或數字有幾個字母組成可寫成
//xxx.length
//如果想知道字串裡第x個字母是什麼可寫成
//xxx[o] javascript是從第0個開始註記 zero-based indexing
//如果想知道字串裡最後一個字母是什麼又不知道總共有幾個字母的話可寫成
//var yyyy = xxx[xxx.lenth - 1]
