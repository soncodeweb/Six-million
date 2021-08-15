// // // // // // // // //                                 // Hiển thị ra màn hình

// // // // // // // // // // in ra console
// // // // // // // // // // hoặc //
// // // // // // // // // // và &&
// // // // // // // // // // var age = 20;
// // // // // // // // // // var name = "Son";
// // // // // // // // // // Cach1 cộng chuỗi
// // // // // // // // // // console.log("My name is " + name + " and Age " + age);
// // // // // // // // // // // Cach2 cộng chuỗi template literal
// // // // // // // // // // console.log(`My name is ${name}, my age is ${age}`);

// // // // // // // // //                                 // Hiển thị ra màn hình

// // // // // // // // // // var a = 10;
// // // // // // // // // // var b = 0;

// // // // // // // // // // console.log(`Tính ${a} / ${b} is ${a / b}`);

// // // // // // // // //                                 // Condition
// // // // // // // // // // Sử dụng ba dấu bằng để so sánh

// // // // // // // // // // var number = 10;
// // // // // // // // // // if( number%2 === 0)
// // // // // // // // // // {
// // // // // // // // // //     console.log("Chẵn");
// // // // // // // // // // }
// // // // // // // // // // else{
// // // // // // // // // //     console.log("Lẽ");
// // // // // // // // // // }
// // // // // // // // // //                                 // Close condition

// // // // // // // // //                                 // Open for
// // // // // // // // // var number = 20;
// // // // // // // // // // in ra số chia hết cho 2 từ 1 -> number
// // // // // // // // // // for(i = 1; i <= number; i++)
// // // // // // // // // // {
// // // // // // // // // //     if(i % 15 === 0){
// // // // // // // // // //         console.log(i);
// // // // // // // // // //     }
// // // // // // // // // // }
// // // // // // // // //                                 // Close for

// // // // // // // // //                                 // Open White

// // // // // // // // // // var i=1;
// // // // // // // // // // while(i<10)
// // // // // // // // // // {
// // // // // // // // // //     console.log(i);
// // // // // // // // // //     i++;
// // // // // // // // // // }

// // // // // // // // // // Close Ưhite
// // // // // // // // // // Bài tập

// // // // // // // // // // var str = "hello Tuấn cu to";

// // // // // // // // // // console.log(str.length);   // In ra số kí tự của str str.length
// // // // // // // // // // console.log(str.charAt(str.length-1)) // In ra kí tự tại vị trí (i)

// // // // // // // // // // Bài tập: Kiểm tra 1 string có tồn tại chữ o hay koong

// // // // // // // // // var str1 = "hellohhh";
// // // // // // // // // var str  = "hell";
// // // // // // // // // // var check = false;
// // // // // // // // // var str = "abc";
// // // // // // // // // var result =[];

// // // // // // // // // for( i=0; i<=str.length-1; i++ )
// // // // // // // // // {
// // // // // // // // //     // var abc =[];
// // // // // // // // //     // abc.push(console.log(str[i] +"1"))
// // // // // // // // //     // console.log(str.charAt(i) +"1");
// // // // // // // // //     console.log(str[i]+1);
// // // // // // // // // }

// // // // // // // // // // console.log(check);

// // // // // // // // //                             // Bài tập: số lần hiện ra h

// // // // // // // // // // var dem = 0;
// // // // // // // // // // for( i = 0; i < str1.length ; i++)
// // // // // // // // // // {
// // // // // // // // // //     if(str1.charAt(i)==="h")
// // // // // // // // // //     dem ++;
// // // // // // // // // // }
// // // // // // // // // // console.log(dem);

// // // // // // // // //                             // Bài tập: Tính số lần xuất hiện của couple 'hh'
// // // // // // // // // var str1 = "hhhellohh hdsdshhdsdhhadsasdsahh";
// // // // // // // // // var dem = 0;
// // // // // // // // // for(i = 1\
// // // // // // // // //     ; i<str1.length-2; i++)
// // // // // // // // // {
// // // // // // // // //     if(str1.charAt(i) + str1.charAt(i+1)==="hh" &&str1.charAt(i+2)!="h" &&str1.charAt(i-1)!="h")
// // // // // // // // //     {
// // // // // // // // //         dem ++;
// // // // // // // // //     }
// // // // // // // // // }
// // // // // // // // // console.log(dem);
// // // // // // // //                                                                     // Array

// // // // // // // // // var number=[1,"hai",3,4,'nam'];
// // // // // // // // // console.log(number[1]);
// // // // // // // // // console.log(number.length);  // độ dài mảng

// // // // // // // // // // method là 1 function được định nghĩa trong 1 class

// // // // // // // // // // .toString(): nối các pt trong mảng bằng dấu ' phẩy '  - trả về string
// // // // // // // // // // join("dấu-seperator"): nối các pt trong mảng bằng dấu ' seperator '  - trả về string
// // // // // // // // // console.log(number.join(">>>"));

// // // // // // // //                                                                     // Bài tập: In ra các phần từ cuối mảng tới đầu mảng
// // // // // // // //                                                                 //     for(i=number.length-1;i>=0;i--)
// // // // // // // //                                                                 //     {
// // // // // // // //                                                                 //         console.log(number[i]);
// // // // // // // //                                                                 //     }
// // // // // // // //                                                                 //     // Method đảo ngược 1 mảng: .reverse
// // // // // // // //                                                                 //     console.log(number.reverse().join(" "));
// // // // // // // //                                                                 //     // Method .push -> thêm 1 phần tử vào cuối mảng + trả về số lượng phần tử của mảng mới
// // // // // // // //                                                                 //    number.push();
// // // // // // // //                                                                 //      // Method .unshift -> thêm 1 phần tử vào đầu mảng + trả về số lượng phần tử của mảng mới
// // // // // // // //                                                                 //     console.log(number.unshift("a"));
// // // // // // // //                                                                 //     console.log(number);
// // // // // // // //                                                                 //     // Method .pop -> lấy 1 phần tử vào cuối mảng + trả về giá trị vừa lấy ra;
// // // // // // // //                                                                 //     console.log(number.pop());
// // // // // // // //                                                                 //     console.log(number);
// // // // // // // //                                                                     // Method .shift -> lấy 1 phần tử vào đầu mảng + trả về giá trị vừa lấy ra;
// // // // // // // //                                                                     // console.log(number.shift());
// // // // // // // //                                                                     // console.log(number);

// // // // // // // //                                                                     // In ra 1 mảng gồm các phần tử chia hết cho 2
// // // // // // // //                                                                     var number=[1,5,7,8,10];
// // // // // // // //                                                                     var result=[];
// // // // // // // //                                                                     var result1=[];

// // // // // // // //                                                                     // for(i=0;i<number.length;i++)
// // // // // // // //                                                                     // {
// // // // // // // //                                                                     //     if(number[i]%2===0)
// // // // // // // //                                                                     //     result.push(number[i]);
// // // // // // // //                                                                     // }
// // // // // // // //                                                                     // console.log(result);

// // // // // // // //                                                                     // In ra những cặp lẻ
// // // // // // // //                                                                     // for( var i=0;i<number.length-1;i++){
// // // // // // // //                                                                     //     if(number[i]%2!==0){
// // // // // // // //                                                                     //         for(var j=i+1;j<number.length;j++)
// // // // // // // //                                                                     //         {
// // // // // // // //                                                                     //             if(number[j]%2!==0)
// // // // // // // //                                                                     //             {
// // // // // // // //                                                                     //                 var text = [];
// // // // // // // //                                                                     //                 text.push(number[i]);
// // // // // // // //                                                                     //                 text.push(number[j]);
// // // // // // // //                                                                     //                 result.push(text);
// // // // // // // //                                                                     //             }
// // // // // // // //                                                                     //         }
// // // // // // // //                                                                     //     }
// // // // // // // //                                                                     // }
// // // // // // // //                                                                     // console.log(result);

// // // // // // // //                                                                     // // Output:
// // // // // // // //                                                                     // Function
// // // // // // // //                                                                 // Công dụng: reuable sử dụng lại
// // // // // // // //                                                                 //
// // // // // // // //                                                 // + 3 cách khai báo
// // // // // // // //                                                     // 1: function declaration : khai báo
// // // // // // // //                                                     // function func-name(){}

// // // // // // // //                                                     // 2: function expression
// // // // // // // //                                                         // var hello =function(){
// // // // // // // //                                                         //     console.log("hello");
// // // // // // // //                                                         // }

// // // // // // // //                                                         // hello();
// // // // // // // //                                                     // 3: arrow function    ///Note: dùng cái này
// // // // // // // //                                                         var hello = (msg) => {
// // // // // // // //                                                             console.log(`Hello ${msg}`)
// // // // // // // //                                                         }
// // // // // // // //                                                         hello('Sơn');

// // // // // // // //                                                     // // Ex:
// // // // // // // //                                                     //     function print(msg, name){
// // // // // // // //                                                     //         console.log(`${msg} ${name}`);
// // // // // // // //                                                     //     }
// // // // // // // //                                                     //     print("Hello", "Quynh"); // gọi function

// // // // // // // //                                                     //     function add(a,b)
// // // // // // // //                                                     //     {
// // // // // // // //                                                     //         return a+b;
// // // // // // // //                                                     //     }

// // // // // // // //                                                     //     console.log(add(1,2));

// // // // // // // // //  Buổi 2

// // // // // // // // // .split cách các phần tử trong chuỗi ra

// // // // // // // //     // Bài tập
// // // // // // // // var str = "hello world";
// // // // // // // // // thay thế chữ l thành chữ m;
// // // // // // // // // console.log(str.split("l").join("m"));

// // // // // // // // // .slice(0,2) cắt từ vị trị 0 ,1 không lấy 2;     2 tham số
// // // // // // // // // còn 1 tham số là lấy từ vị trí đó đến cuối mảng .slide(2)

// // // // // // // // var result = number.slice(0,3);

// // // // // // // // // console.log(result);

// // // // // // // // var number=[1,2,3,5,6,10,33,100];

// // // // // // // // // console.log(number.slice(3,number.length));

// // // // // // // // // console.log(number.slice(-2)); // lấy 2 phần tử cuối mảng

// // // // // // // // // // Bài tập
// // // // // // // // // // In ra mảng từ vị tri start, so luong phan tu la amount
// // // // // // // // // function sliceArr(arr, start, amount){
// // // // // // // // //     return console.log(arr.slice(start, start+amount));
// // // // // // // // // }
// // // // // // // // // sliceArr(number,2,4);

// // // // // // // // // splice thêm phần tử vào bất kì chỗ nào
// // // // // // // // // splice(start, countDeleted ,element)
// // // // // // // // // xoa 1 phần tử ở vị trị thứ 2
// // // // // // // // console.log(number.splice(2,0,1));
// // // // // // // // console.log(number.splice(2)); // xóa từ vị tri từ 2 đến cuối mảng
// // // // // // // // console.log(number);

// // // // // // // // // Bài toán về nhà làm
// // // // // // // // // Tìm số nhỏ nhất lớn hơn 0, không nằm trong mảng
// // // // // // // // // [-1 ,-2] -> 1
// // // // // // // // // [-2 ,-1, 1, 2, 3, 4, 10]-> 5

// // // // // // // // // chuyển số sang chuổi là 123 + ''
// // // // // // // // // chuyển chuỗi sang số là + '2'

// // // // // // // // var number1 = '125abc';

// // // // // // // // // var array = number1.split("");
// // // // // // // // // console.log(number1);
// // // // // // // // // isNaN('a')    kiểm tra có phải là số k
// // // // // // // // // is not a number
// // // // // // // // // number[i]=number.charAt(i);
// // // // // // // // var sum = 0;
// // // // // // // // for(i=0;i<number1.length;i++)
// // // // // // // // {
// // // // // // // //     if(!isNaN(number1[i]))
// // // // // // // //     sum = sum + +number1[i];
// // // // // // // // }
// // // // // // // // console.log(sum);

// // // // // // // var array = [ 1,-2,5,4,3];
// // // // // // // var max = 0;
// // // // // // // for(i=1;i<array.length;i++)
// // // // // // // {
// // // // // // //     if(array[max]<array[i])
// // // // // // //         max = i;
// // // // // // // }

// // // // // // // console.log(array[max]);
// // // // // // // var maxArry = 0;
// // // // // // // for(j=1;j<array[max];j++)
// // // // // // // {
// // // // // // //   for(i=0;i<array.length;i++)
// // // // // // //   {
// // // // // // //       if(j<array[i])
// // // // // // //         maxArry =j;
// // // // // // //         break;
// // // // // // //   }
// // // // // // //   if(maxArry !== 0)
// // // // // // //     break;
// // // // // // //     console.log(maxArry);
// // // // // // // }

// // // // // // var arr = [-5, -4,1, 100, 200]
// // // // // // var arrExtra = [];
// // // // // // var arrSort = (arr) => {
// // // // // // var temp;
// // // // // // for (i = 0; i < arr.length - 1; i++) {
// // // // // // for (j = i + 1; j < arr.length; j++) {
// // // // // // if (arr[j] < arr[i]) {
// // // // // // temp = arr[j];
// // // // // // arr[j] = arr[i];
// // // // // // arr[i] = temp;
// // // // // // }
// // // // // // }
// // // // // // }
// // // // // // }
// // // // // // var minNumber = (arr, arrExtra) => {
// // // // // // arrSort(arr);
// // // // // // var count = 0;
// // // // // // for (i = 0; i < arr.length; i++) {
// // // // // // if (arr[i] > 0) {
// // // // // // arrExtra[count] = arr[i];
// // // // // // count++;
// // // // // // }
// // // // // // }
// // // // // // }
// // // // // // var result = (arr, arrExtra) => {
// // // // // // var start = 0;
// // // // // // minNumber(arr, arrExtra);
// // // // // // arrExtra.unshift(0);
// // // // // // var i = 0;
// // // // // // for (i; i < arrExtra.length; i++) {
// // // // // // if (arrExtra[i + 1] - arrExtra[i] > 1) {
// // // // // // return arrExtra[i] + 1;
// // // // // // }
// // // // // // }
// // // // // // var thisNumber = arrExtra[arrExtra.length - 1] + 1;
// // // // // // return thisNumber;
// // // // // // }

// // // // // // console.log(result(arr, arrExtra));

// // // // // // // Tìm số tự nhiên

// // // // // // var num=[-1,-2];

// // // // // // var checkInArr = (x,arr) =>{
// // // // // // for(i=0;i<arr.length;i++){
// // // // // // if(x===arr[i]){
// // // // // // return true;
// // // // // // }
// // // // // // }
// // // // // // return false;
// // // // // // }

// // // // // // var find = (arr) =>{
// // // // // // var x=1;
// // // // // // while(checkInArr(x,arr)){
// // // // // // x++;
// // // // // // }
// // // // // // return x;
// // // // // // }
// // // // // // console.log(find(num));

// // // // // // var arr = ["hell9o" , "name1" , "a", "ba2by"];
// // // // // // var str = arr.join("");
// // // // // // var result = 0;
// // // // // // for (i=0;i<str.length;i++){
// // // // // //     if(!isNaN(str[i]))
// // // // // //     {
// // // // // //         result += +str[i];
// // // // // //     }
// // // // // // }

// // // // // // console.log(result);

// // // // //                                                                     // Buổi 3
// // // // // // Math

// // // // // // console.log(Math.floor(3.4)); // Làm tròn xuống 3;
// // // // // // console.log(Math.ceil(3.4)); // Làm tròn lên 4;
// // // // // // console.log(Math.round(3.5)); // Làm tròn 3,4 = 3, 3.5 =4
// // // // // // console.log(Math.random() * 10); //  Random 1 số từ 0 - 1 (k lấy 1)
// // // // // // console.log(Math.floor(Math.random() * 10)); //  Random 1 số từ 0 - 1 (k lấy 1)
// // // // // // random số từ start đến end
// // // // // // const rdNumber = (start,end) => {
// // // // // //   return Math.floor(Math.random()* (end - start + 1) + start);
// // // // // // };

// // // // // // console.log(rdNumber(3,10));

// // // // // // Falsy: 0, '', false, null, undefined, NaN
// // // // // // truthy: các giá trị k thuộc falsy

// // // // // // if ( 0 || 0 && 2)
// // // // // // {
// // // // // //     console.log("1");
// // // // // // }
// // // // // // else
// // // // // // {
// // // // // //     console.log("2");
// // // // // // }

// // // // // // // console.log(0 || null); // Kiểm tra vế trái đúng thì lấy gt vế trái, sai thì lấy vể phải
// // // // // // console.log(null && 0 || undefined && 1 || 0);

// // // // // // // // Bài tập về nhà random password

// // // // // // const rdPassword = (options) => {
// // // // //     //     // your code here
// // // // //     // }

// // // // //     // console.log(rdPassword(options));

// // // // //     // console.log(Math.ceil(Math.random()*9));
// // // // //     // console.log(String.fromCharCode(Math.ceil(Math.random()*25 + 97)));
// // // // //     // var result = [];
// // // // //     // for (i = 0; i< options.length; i++){
// // // // //         //     result [i] = String.fromCharCode(Math.ceil(Math.random()*25 + 97));
// // // // //         // }
// // // // //         // console.log(result);

// // // // //         // result[0] = Math.ceil(Math.random()*9);
// // // // //         // console.log(result[0]);
// // // // // var options = {
// // // // //     length : 10,
// // // // //     number : true , // có thể có hoặc không
// // // // //     alphabet : false // lấy chữ thường
// // // // // }

// // // // // var check = (number,chart) =>
// // // // // {
// // // // //     var random;
// // // // //     if(number === true && chart === true)
// // // // //     {
// // // // //         var kiemtra = Math.round(Math.random());
// // // // //         if( kiemtra === 1)
// // // // //         {
// // // // //             random = Math.ceil(Math.random()*9);
// // // // //         }
// // // // //         else
// // // // //         {
// // // // //             random = String.fromCharCode(Math.ceil(Math.random()*25 + 97));
// // // // //         }
// // // // //     }
// // // // //     else if (number === true)
// // // // //     {
// // // // //         random = Math.ceil(Math.random()*9);
// // // // //     }
// // // // //     else if(chart ===true)
// // // // //     {
// // // // //         random = String.fromCharCode(Math.ceil(Math.random()*25 + 97));
// // // // //     }
// // // // //     return random;
// // // // // }

// // // // // const rdPassword = (options) => {
// // // // //     var result = [];
// // // // //     for(i=0;i<options.length;i++)
// // // // //     {
// // // // //         result[i] = check(options.number,options.alphabet);
// // // // //     }
// // // // //     return result;
// // // // // }

// // // // // console.log(rdPassword(options));

// // // // // var options =
// // // // // {
// // // // //     length:10,
// // // // //     number:true,
// // // // //     alphabet:false,
// // // // // };
// // // // // var randomString = (L,N,A) => {
// // // // //     var s = '';
// // // // //     var randomChar = () =>{
// // // // //       if(N===true&&!A){
// // // // //         return Math.floor(Math.random() * 10);
// // // // //       }
// // // // //       else if(A===true&&!N){
// // // // //         return String.fromCharCode(Math.floor(Math.random() * 26 + 97)); //a-z
// // // // //       }
// // // // //       else{
// // // // //           var r = Math.floor(Math.random() * 26);
// // // // //           if( r < 10) return r;
// // // // //           return String.fromCharCode(r + 97);
// // // // //       }
// // // // //     }
// // // // //     while (s.length < L) s += randomChar();
// // // // //     return s;
// // // // // }
// // // // // console.log(randomString(options.length,options.number,options.alphabet));
// // // // var input =
// // // // [{"name":"John","budget":23000},{"name":"Steve","budget":40000},{"name":"Martin","budget":2700}];

// // // // function solution(input){
// // // //   // Tính tổng budget của của user❤️
// // // //     var str = input.join("");
// // // //   var sum = 0;
// // // //   for (var i = 0; i < str.length; i++) {

// // // //     if("budget" in str)
// // // //     {
// // // //       sum = sum + str[i].budget;
// // // //     }
// // // //   }
// // // //     return sum;
// // // //   }

// // // //   console.log(solution(input));
// // // // var input = 123;
// // // // var str = input+'';
// // // // var sum = 0;
// // // // for(i = 0; i< str.length ; i++)
// // // // {
// // // //   sum = sum + +str[i];
// // // // }
// // // // console.log(sum);

// // // // var password = "adsada2dads";
// // // // for (i=1; i <password.length-1 ; i++)
// // // // {
// // // //   password.splice(i,1,"*");
// // // // }

// // // // console.log(password);

// // // //   Note three importion
// // // // . map(fn): tham số là 1 function
// // // //: tạo ra 1 mảng mới, có số lượng pt như mảng cũ, giá trị sau return sẽ được push vào mảng mới

// // // // var numbers = [1,2,3,4];

// // // // map là vòng lập for diệt từ 0 đến cuối mảng
// // // // index là 0,1,2,3
// // // // var newNumber = numbers.map(
// // // //   (val , index) =>
// // // //     {
// // // //       return val*2;
// // // //     }
// // // // )

// // // // newNumber = []
// // // // vòng lặp 1 -> [2]
// // // // vòng lặp 2 -> [2,4]
// // // // ..
// // // // ..
// // // // console.log(newNumber);

// // // // filter(fn): lọc các value in array thỏa mãn điều kiện sau return

// // // // var number = [0,2,3,4]; // in ra mảng mới gồm các pt > 2
// // // // var newNumber = number.filter(
// // // //   (val,index) =>
// // // //     {
// // // //       return index > 0;
// // // //     }
// // // // );

// // // // console.log(newNumber);

// // // // Ex sử dụng filter để lọc ra những string có length > 3
// // // //     var array = ["hello", "ok", "baby"];

// // // // var newArray = array.filter(
// // // //   (val,index) =>
// // // //     {
// // // //       return val.length > 3;
// // // //     }
// // // // );

// // // // console.log(newArray);

// // // // reduce(fn, initialValue);

// // // // Th1 : không có initialValue;
// // // /**
// // //             vòng lặp 1: acc = number[0] , val = number[1], acc=3;
// // //             vòng lặp 2: acc = 3, val = number[2], acc=6;
// // //             vòng lặp 2: acc = 6, val = number[3], acc=10;

// // //             Giá trị đằng sau return acc được cộng đồn vào
// // //           */

// // // // var number = [1, 2, 3, 4];
// // // // acc = accumulate;
// // // // var sum = number.reduce((acc, val) => {
// // // //   return acc + val;
// // // // });

// // // // console.log(sum);

// // // // Th2 : có initialValue;
// // // /**
// // //             vòng lặp 1: acc = initial = 10 , val = number[0], acc=11;
// // //             vòng lặp 2: acc = 11, val = number[1], acc=13;
// // //             vòng lặp 3: acc = 13, val = number[2], acc=16;
// // //             vòng lặp 4: acc = 16, val = number[3], acc=20;
// // //           */
// // // // var number = [1, 2, 3, 4];
// // // // var sum = number.reduce((acc, val) => {
// // // //   return acc + val;
// // // // },10);

// // // // console.log(sum);

// // // // Example
// // // // var products = [
// // // //   { id: 1, price: 20 },
// // // //   { id: 2, price: 40 },
// // // //   { id: 4, price: 50 },
// // // // ];

// // // // var sumPrice = products.reduce((acc, val) => {
// // // //   return acc + val.price;
// // // // }, 0);
// // // // console.log(sumPrice);

// // // // var char = " ";
// // // // var ascil = char.charCodeAt();
// // // // console.log(char.length);

// // // // if (char[0] === " " && char.length === 1)
// // // //   console.log("sadasdsad");
// // // // var input = "";
// // // // var t=input.length;
// // // // var result = "empty string";
// // // // var result1 = [];
// // // //   if(t === 0)
// // // //     return result;

// // // //     console.log(input.length);

// // // // function solution(input){
// // // //   /*
// // // //   In ra mảng các phần tử có chứa Number 😢
// // // //   */
// // // //   // var result = [];
// // // //   //   var check = (val) =>
// // // //   //   {
// // // //   //     var check = false;
// // // //   //     for(i=0;i<val.length;i++)
// // // //   //     {
// // // //   //       if(!isNaN(val[i]))
// // // //   //         check = true;
// // // //   //     }
// // // //   //   return check;
// // // //   //   }

// // // //   //   for(i=0;i<input.length;i++)
// // // //   //   {
// // // //   //     if(check(input[i]) ===true)
// // // //   //     {
// // // //   //       result [i] = input[i];
// // // //   //     }
// // // //   //   }
// // // //   //   return result;
// // // //   // }

// // // // var input = [ 1,2,3,4,5,6];
// // // // var newArray = input.filter(
// // // //   (val,index) =>
// // // //   {
// // // //     return val %2 === 0;
// // // //   }
// // // // )
// // // // var sum = newArray.reduce(
// // // //   (acc, val) =>
// // // //   {
// // // //     return acc + val;
// // // //   }
// // // // )

// // // // var number = [1, 2, 3, 4];
// // // // var sum = number.reduce((acc, val) => {
// // // //   return acc + val;
// // // // },10);
// // // //// Buổi 4
// // // // every some

// // // // var user = {};
// // // // var prop = "name"
// // // // user.name = "David"; // 2 cách thêm
// // // // user["Age"] = 20;
// // // // users
// // // // console.log(user);

// // // // var users = ["a", "b", "a", "c", "b"];

// // // // 1. Tần số xuất hiện
// // // // var result = users.reduce(
// // // //   (acc, val) =>
// // // //   {
// // // //     if(val in acc)
// // // //     {
// // // //       acc[val]++;
// // // //     }
// // // //     else
// // // //     {
// // // //       acc[val]=1;
// // // //     }
// // // //   return acc;
// // // //   }
// // // // , {});

// // // // /*
// // // //   {
// // // //     "a" : 2,
// // // //     "b" : 2,
// // // //     "c" : 1
// // // //   }
// // // // */
// // // // console.log(result);
// // // // 2. Kiểm tra 1 phần tử có trong mảng hay không
// // // // var products = [ "Phone", "Macbook", "Tivi", "Dvd","Tivi"];
// // // // cách 1 - sử dụng includes()   => trả về true/false có phân biệt Hoa Thường
// // // // console.log(products.includes("tivi"));
// // // // cách 2 -  sử dụng indexOf() => trả về vị trí index đầu tiên phân biệt Hoa Thường // indexOf("",2) kiểm tra từ index thứ 2 trở đi// nếu k tìm thấy thì trả về -1
// // // // console.log(products.indexOf("Tivi"));

// // // // cách 3 - sử dụng findIndex(fn)', nhận tham số là function

// // // // console.log(products.findIndex(
// // // //   (val) => {
// // // //     return val === "Tivi";
// // // //   }
// // // // )
// // // // );
// // // // Cách 4 - sử dụng find => nhận tham số là function trả về giá trị

// // // // console.log(products.find(
// // // //   (val) => {
// // // //     return val === "Tivi";
// // // //   }
// // // // )
// // // // );

// // // // Khi nào sử dụng indexOf, findIndex

// // // // var products = [
// // // //   { id: 1, name: "macbook", price: 10 },
// // // //   { id: 1, name: "iphone", price: 20 },
// // // //   { id: 1, name: "tivi", price: 40 },
// // // //   { id: 1, name: "dvd", price: 8 },
// // // // ];

// // // // console.log(products.find(
// // // //   (val) => val.name === "tivi"
// // // //   )
// // // // )

// // // // 3. Loại bỏ phần tử trùng

// // // // var users = ["a", "b", "a", "c", "b", "d"]; //["a" ,"b", "c","d"]
// // // // // unique độc nhất
// // // // // duplicate trùng

// // // // var unique = users.filter((val, index) => {
// // // //   firstIndex = users.indexOf(val);
// // // //   return firstIndex === index;
// // // // });
// // // // console.log(unique);
// // // // var newInput = input.map(
// // //   //   (val,index) => {
// // //     //     if(val === val.toLowerCase())
// // //     //       return val.toUpperCase();
// // //     //     else
// // //     //       return val.toLowerCase();
// // //     //   }
// // //     // )

// // //     // console.log(newInput);
// // // // var input = "HeloL"
// // // // var newInput = input.map(
// // // //   (val) =>{
// // // //     if (val === val.toLowerCase())
// // // //       return val = val.toUpperCase();
// // // //     else
// // // //       return val = val.toLowerCase();
// // // //   }
// // // // )
// // // // console.log(newInput);

// // // // function solution(input){
// // // //   /*
// // // //   Đổi in hoa thành in thường và ngược lại
// // // //   */
// // //   var newInput = [];
// // //   var result = "empty string";
// // //   if (input.length === 0 || input.length === 1 && input[0] === " ")
// // //     return result;
// // // //   else{
// // // //     for(i=0;i<input.length;i++)
// // // //     {
// // // //       if(input[i] === input[i].toLowerCase())
// // // //           newInput[i] = input[i].toUpperCase();
// // // //       else
// // // //           newInput[i] = input[i].toLowerCase();
// // // //     }
// // // //       return newInput.join('');
// // // //     }
// // // //   }
// // // /*
// // //   function solution(input){
// // //     /*
// // //     Định dạng lại string theo quy ước sau:
// // //     *Chữ cái đầu của mỗi từ phải viết hoa
// // //     *Các chữ cái còn lại của từ đó phải viết  thường
// // //     Ví dụ:
// // //     Input: "hello worlD"
// // //     output: "Hello World"

// // //     var newInput = [];
// // //     var i = 1;
// // //     if (input.length === 0)
// // //       return newInput.join('');
// // //     else
// // //     {
// // //         newInput[0] = input[0].toUpperCase();
// // //         while (i<input.length)
// // //         {
// // //           if (input[i] === " ")
// // //             {
// // //               i++;
// // //               newInput [i] = input[i].toUpperCase();
// // //             }
// // //           else
// // //             {
// // //               newInput[i] = input[i].toLowerCase();
// // //             }
// // //           i++;
// // //         }

// // //         return newInput.join(' ');
// // //     }
// // // */
// // // var input = "Today IS SUnday";

// // // console.log(input.split(' '));

// // // var newInput = input.split(' ');
// // // // var Upper = (val) =>
// // // // {
// // // //   var newUpper = [];
// // // //   newUpper[0] = val[0].toUpperCase();
// // // //   for (i=1;i<val.length;i++)
// // // //   {
// // // //     newUpper[i] = val[i].toLowerCase();
// // // //   }
// // // //   return newUpper.join('');
// // // // }

// // // for (i=0;i<newInput.length;i++)
// // // {
// // //   Upper(newInput[i]);
// // // }

// // // function solution(input){
// // //   /*
// // //   Định dạng lại string theo quy ước sau:
// // //   *Chữ cái đầu của mỗi từ phải viết hoa
// // //   *Các chữ cái còn lại của từ đó phải viết  thường
// // //   Ví dụ:
// // //   Input: "hello worlD"
// // //   output: "Hello World"
// // //   */
// // //   var newInput = input.split(' ');
// // //   var
// // //   var Upper = (val) =>
// // //   {
// // //     var newUpper = [];
// // //     newUpper[0] = val[0].toUpperCase();
// // //     for (i=1;i<val.length;i++)
// // //     {
// // //       newUpper[i] = val[i].toLowerCase();
// // //     }
// // //     return newUpper.join('');
// // //   }

// // //   for (i=0 ; i<newUpper.length;i++)
// // //   {
// // //     Upper(newUpper[i]);
// // //   }

// // //   }
// // // var input = [[1,6],6];
// // // var sumArrayIn = (val) =>{
// // //   var sum = 0;
// // //   for (i=0;i<val.length;i++)
// // //   {
// // //     sum = sum + val[i];
// // //   }
// // //   return sum;
// // // }
// // // var sum = 0;
// // // for (i=0 ;i< input.length; i++)
// // // {
// // //   sum = sum + sumArrayIn(input[i]);
// // // }
// // // console.log(sum);

// // // var input = "AAAAAAA";
// // // var checkUpper = (input) => {
// // //   var temp = false;
// // //   for (i = 0; i < input.length; i++) {
// // //     if (isNaN(input[i])) {
// // //       if (input[i] === input[i].toUpperCase()) temp = true;
// // //     }
// // //   }
// // //   return temp;
// // // };

// // // var checkLower = (input) => {
// // //   var temp = false;
// // //   for (i = 0; i < input.length; i++) {
// // //     if (isNaN(input[i])) {
// // //       if (input[i] === input[i].toLowerCase()) temp = true;
// // //     }
// // //   }
// // //   return temp;
// // // };

// // // var checkNumber = (input) => {
// // //   var temp = false;
// // //   for (i = 0; i < input.length; i++) {
// // //     if (!isNaN(input[i])) temp = true;
// // //   }
// // //   return temp;
// // // };


// // // var temp = input.length;
// // // var good = "good";
// // // var bab = "bad";
// // // if (temp >= 6 && checkLower(input) === true && checkUpper(input) === true && checkNumber(input) === true)
// // //   console.log("good");
// // // else  
// // //   console.log("bad");

// // // // var temp = input.length;
// // // // if (temp >= 6 && checkLower(input) === checkUpper(input) === checkNumber(input) === true)
// // // //   console.log("good");
// // // // else
// // // //   console.log("bad");

// // // var input = ["abc","abc10"];
// // // var new1 = input;
// // // var view = (input) =>
// // // {
// // //   return input[0];
// // // }
// // // var view1 = (input) =>
// // // {
// // //   return view(input[0]);
// // // }

// // // console.log(view(input[0]));

// // // var input1 = [[1,2],2,[3,1]];
// // // var input2 = [1,2,3];

// // // for (i=0;i<input.length;i++)
// // // {
// // //   var sumALl=0;
// // //   sumAll = sumAll + sumIn;
// // // }

// // // console.log(sumAll);
// // // var sumAll = 0;
// // // console.log(input2[0].length);
// // // for (i=0;i<input2.length;i++)
// // // {
// // //   // var sumIn = input1[i].reduce(
// // //   //   (acc,val) =>
// // //   //     {
// // //   //       return acc + val;
// // //   //     }
// // //   // )
// // //   var val= input2[i];
// // //   var sumIn = 0;
// // //   for (j=0 ;j<val.length;j++){
// // //     sumIn = sumIn + val[j];
// // //   }
// // //   console.log(sumIn);
// // //   sumAll = sumAll + sumIn;
// // //   console.log(sumAll);
// // // }
// // // console.log(sumAll);

// // // console.log(input1[2].join(''));
// // // var input = ["abc","abc10"];
// // // var checkNumber = (input) =>{
// // //   var check = false;
// // //     for(i=0;i<input.length;i++)
// // //     {
// // //       if(!isNaN(input[i]))
// // //         check = true;
// // //     }
// // //   return check;
// // //   }
// // //   var result = [];
// // //   for (i=0;i<input.length;i++){
// // //     if(checkNumber(input[i]) === true)
// // //       result[i] = input[i];
// // //   }
// // // console.log(result);

// // // var input = "hLLLLLL acsD";
// // // var i = 1;
// // // var newInput = [];
// // //   newInput[0] = input[0].toUpperCase();
// // //   while(i<input.length)
// // //   {
// // //     if(input[i] === " ")
// // //     {
// // //       i++;
// // //       newInput[i] = input[i].toUpperCase();
// // //     }
// // //     else{
// // //       newInput[i] = input[i].toLowerCase();
// // //       i++;
// // //     }
// // //   }


// // // var input = "today IS SUnday";
// // // var input1= input.split(' ');
// // // var neww = [];
// // // var a = input1.filter(
// // //   (val) =>{
// // //     var check = (val)=> {
// // //         var c=[];
// // //         for (i=0;i<val.length;i++)
// // //           {
// // //             if(i = 0)
// // //               c[0] = val[0].toUpperCase();
// // //             else
// // //               c[i] = val[i].toLowerCase();
// // //         }
// // //         return c;
// // //       }
// // //     return check(val);
// // //   }
// // // )
// // // console.log(a);


// // // var input = [1,1,2,2];
// // // var newInput = [];
// // // // for (i=0;i<input.length;i++){
// // // //   newInput["input[i]"];
// // // // }
// // // newInput.name ="son";
// // // console.log(newInput);

// // // var input = (1,4,7);
// // // console.log(input);
// // // console.log(input.toString());
// // // var input1 = ["helo sdad"]; 
// // // console.log(input1.join(""));
// // // console.log(input.toString().split(""));

// // var input =[[1,2],2];
// // console.log(typeof(input.join(",")));





//         // DOM : Document object model
// // var hello = document.getElementsByClassName("content")[0];
// // console.log(hello.textContent); // lấy nôi dung bên trong
// // console.log(hello.innerHTML); // lấy html bên trong

// // khi click "login"

// // láy giá trị trong email và password
// // rỗng thì thông báo
// // không rỗng thì báo success

// // lấy được Dom nut login

// var btnLogin = document.querySelector(".btn-login");
// console.log(btnLogin);
// // add sự kiện vào nút
// btnLogin.addEventListener("click", (e) =>
// {
//     // tránh load lại trang khi click vào button trong form
//     e.preventDefault();
//     // lấy giá trị trong 2 o input
//     // lấy giá trị trong 2 ô input --> sử dụng .value chon form (input,)
//     var email = document.querySelector(".email").value;
//     var password = document.querySelector(".password").value;
//     if(!email || !password){
//         alert ("invalid input!");
//     }
//     else{
//         console.log(email,password);

//     }
// });