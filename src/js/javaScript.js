// // destructuring trong js: tạo biến để lưu giá trị trong array, obj
// // --> trong array

// var numbers = [1,2,3,4];

// var [a,b,c,d,e] = numbers;
// // console.log(a);console.log(b);console.log(c);console.log(d);

// // -->trong object
// var user = {
// // Khi key và value cùng tên thì viết gọn thành name, name: name
//     name: "maria",
//     age: 25,
//     address: {
//         number: "97 man thien",
//         district: "9"
//     }
// };

// // console.log(user["name"]);

// var {name, age, address } =user;// tương dương var {name: name1, age: age1 } = { name: "maria", age: 25}
//             //          //
// var {number,district} = user.address; // cách 1
// var { name, age, address: {number, district} } = user// cách 2
// console.log(name);
// console.log(age);
// console.log(number);
// console.log(district);

// --->spread operator (...) trải các giá trị bên trong arr, obj

// var number = [1,2,3,4,5];

// // console.log(...number);

// function add(a,b,c) {
//     console.log(a + b + c);
// }

// add (...number);

// // copy mảng number

// var copyNumber =[...number];
// console.log(copyNumber);


// var user ={
//     name: "Sơn đẹp trai",
//     age: 20,
// };
// // copy object user
// var userCopy = {...user};
// console.log(userCopy);

// ---> Rest operator (Tham so của 1 function)
// function print(a,b,c, ...rest){
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(re   st); // hiện ra phần còn lại và đưa vào mảng
// }

// print(1,2,3,4,5,6);

// function add(...rest){
//    console.log(rest.reduce((acc,val) => {return acc + val}))
// }

// add(1,2,3,4,5,6);


// callback function, promise, async/await

