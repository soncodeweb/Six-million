// // .map(fn) tạo ra 1 mảng mới, có số lượng pt như mảng cũ, giá trị sau return sẽ được push vào mảng mới
// array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// newArray1 = array.map((val, i) => {
//   return val * i;
// });
// // .filter(fn) lọc các value in array thỏa mãn điều kiện sau return
// // in ra các số chia hết cho 2
// newArray2 = array.filter(
//     (val) => {
//         return val%2 === 0;
//     }
// )
// console.log(newArray2);

// // .reduce(fn,initialValue)
// var products = [
//   {
//     name: "Sơn",
//     age: "20",
//     money: 100,
//   },
//   {
//     name: "Tuấn",
//     age: "20",
//     money: 100,
//   },
// ];
// newArray3 = products.reduce((acc, val) => {
//   return acc + val.money;
// });
// console.log(newArray3);

// newArray3 = array.reduce(
//     (acc, val) => {
//         return val + acc;
//         console.log(acc);
//     }
// )
// console.log(newArray3)

array = [1,2,3,4,5,6,7]; // Array
// + toString() nối các pt trong mảng bằng dấu ' phẩy '  - trả về string
// + join() nối các pt trong mảng bằng dấu ' seperator '  - trả về string
// + .reverse() đảo ngược mảng
// + .push() thêm 1 phần tử vào cuối mảng và trả về số lượng phần tử của mảng mới
// + .unshift() thêm 1 phần tử vào đầu mảng và trả về số lượng phần tử của mảng mới
// + .pop() lấy 1 phần tử cuối mảng + trả về giá trị vừa lấy ra
// + .shift() lấy phần tử ở đầu mảng + trả về giá trị vừa lấy ra

// console.log(array.shift());

// 3 cách khai báo function
//    + function declaration: function fn-nam(){}
//    + function expression: var hello = function(){}
//    + arrow function: var hello = (msg) => {}

var str = "Hello World!" // String
// + .split(): cách các phần tử trong chuỗi ra
// thay thế chữ l thành chữ m
// console.log(str.split("l").join("m"))
// .slice(index1,index2) cắt từ 
// console.log(str.slice(3,str.length-1));

// splice(start, counDeleted, element)

//Toán tử 
// console.log(Math.floor(3.4)); // Làm tròn xuống 3;
// console.log(Math.ceil(3.4));  // Làm tròn lên 4;
// console.log(Math.round(3.5)); // Làm tròn 3,4 = 3, 3.5 =4
// console.log(Math.random() * 10); //  Random 1 số từ 0 - 1 (k lấy 1)
// console.log(Math.floor(Math.random() * 10)); //  Random 1 số từ 0 - 1 (k lấy 1)
// console.log(Math.ceil(Math.random()*10));


// Falsy: 0, '', false, null, undefined, NaN
// Truthy: các giá trị k thuộc falsy


// Kiểm tra phần tử có trong mảng hay không
// Có 4 cách: + includes() trả về true/false có phân biệt Hoa Thường
//  + indexOf() trả về vị trí index đầu tiên phân biệt Hoa Thường // indexOf("",2) kiểm tra từ index thứ 2 trở đi// nếu k tìm thấy thì trả về -1
//  + findIndex(fn)
//  + find(fn) nhận tham số là function trả về giá trị
// products= [ "Phone", "Macbook", "Tivi", "Dvd"];
// console.log(products.includes("tivi"));
// console.log(products.indexOf("tivi"));
// console.log(products.findIndex(
//   (val) => {
//     return val === "tivi";
//   }
// ))
// console.log(products.find(
//   (val) => {
//     return val === "Tivi";
//   }
// ))

// var products = [
//   { id: 1, name: "macbook", price: 10 },
//   { id: 1, name: "iphone", price: 20 },
//   { id: 1, name: "tivi", price: 40 },
//   { id: 1, name: "dvd", price: 8 },
// ];

// console.log(products.find(
//   (val) => val.name="Tivi"
  
// ))


// Dom: Document object model

var btnLogin = document.querySelector(".btn-login");
// add su kien vao nut
btnLogin.addEventListener("click", (e) => {
  // tranh load lai trang khi click vao button trong form
  e.preventDefault();
  // lay gia tri trong 2 o input--> su dung .value cho form(input, select, textarea)

  var emailEle = document.querySelector(".email");
  var passwordEle = document.querySelector(".password");

  var email = emailEle.value;
  var password = passwordEle.value;

  //  get all span trong input-group
  var getSpans = document.querySelectorAll(".input-group span");

  if (getSpans.length) {
    // remove tat ca span
    for (let i = 0; i < getSpans.length; i++) {
      getSpans[i].remove();
    }
  }
  // var getForm = document.querySelectorAll(".form")

  if (!email) {
    //   tao the span
    let span = document.createElement("span");
    span.innerHTML = "Invalid email";
    // lay email group
    var email_group = document.querySelector(".email-group");
    // add span vao email-group
    email_group.append(span);
  }

  // if (!password) {
  //   //   tao the span
  //   let span = document.createElement("span");
  //   span.innerHTML = "Invalid password";
  //   // lay password group
  //   var password_group = document.querySelector(".password-group");
  //   // add span vao password-group
  //   password_group.append(span);
  // }
  // if (email && password) {
  //   // tao the h1
  //   let success = document.createElement("h1");
  //   success.innerHTML = "Login Successfully!";

  //   // // lay the <form>
  //   var form = document.querySelector("form");
  //   form.prepend(success);
  //   emailEle.value = "";
  //   passwordEle.value = "";

  //   // chuyen trang
  //   // window.location.href = "/about.html";
  // }
});

