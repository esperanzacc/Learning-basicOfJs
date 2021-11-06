//Promise 本身是一個建構函式，函式也是屬於物件的一種
//pending表示已經運行中，尚未取得結果；resolved表示執行完畢且成功操作，回傳resove結果；rejected 表示事件已經執行完畢但操作失敗，回傳rejected的結果

//要先了解Promise，要先了解callback，並且理解同步與非同步概念
// //同步synchronous
// console.log("hello");
// console.log("world");
// /*line by line 讀取程式碼，所以取得的結果會是
// hello
// world
// */

// //非同步Asynchronous
// console.log(1);
// function show2() {
//   console.log(2);
// }
// setTimeout(show2, 3000); //有兩個參數，第一個是callback,第二個是毫秒數
// console.log(3);

// // setTimeout(function () {
// //   console.log(2);
// // }, 3000);
//上述方法不好理解且讀取

/*非同步值讀取為
1
3
2(過了3秒才顯示值)
*/

/*Promise 
執行中 pending
結果有兩種 
1 完成訂單resolve
2 取消訂單reject
*/

/*建立一個Promise object，要使用Promise語句*/
//Promise裡面要用回調函數，有兩個參數resolve和reject

let sentToAirport = false;
let p = new Promise(function (resolve, reject) {
  if (sentToAirport) {
    resolve("from resolve(): send to airport");
  } else {
    reject("from rejected(): order cancelled");
  }
});
//then裡要設定一個回調函數
p.then(function (message) {
  console.log(`${message} - promise resolved`);
})
  //為了caught error我們需要catch回調 處理捕捉的錯誤
  .catch(function (message) {
    console.log(`${message} -promise rejected`);
  });

// //常被調用的功能之一 fetch通常使用它作為發送網路的請求，從後台服務器獲取數據
// let f = fetch("https://jsonplaceholder.typicode.com/users"); //這裏會返回JSON格式的用戶數據，而fetch會返回一個Promise project
// f.then(function (userData) {
//   //進行格式轉換，這邊是一格回調函數會返回一個promise，需要另一個then顯示數據
//   return userData.json().then(function (jsonData) {
//     console.log(jsonData);
//   });
// });

//async及await
// function sendRequest() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve("John Doe");
//     }, 2000);
//   });
// }

// let promise = sendRequest(); //這裡只有pending所以要用then 
// promise.then(function (username) {
//   console.log(username);
// });

// async function getUsername() {
//   let username = await sendRequest();
//   console.log(username);
// }

// getUsername();

// //reject

function sendRequest1() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject("Request rejected due to server error");
    }, 2000);
  });
}

// let promise = sendRequest();
// promise.then(function (username) {
//   console.log(username);
// });

// async function getUsername1() {
//   try {
//     //嘗試抓取錯誤訊息
//     let username1 = await sendRequest1();
//     console.log(username1);
//   } catch (message) {
//     console.log(`Error: ${message}`);
//   }
// }

// getUsername1();

//示範fetch獲取遠程用戶數據
async function getUsername1() {
  try {
    //嘗試抓取錯誤訊息
    let username1 = await fetch("https://jsonplaceholder.typicode.com/users");
    username1 = await username1.json();
    console.log(username1);
  } catch (message) {
    console.log(`Error: ${message}`);
  }
}

getUsername1();
