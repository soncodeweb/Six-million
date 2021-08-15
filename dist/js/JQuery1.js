// // javaScript
// console.log(document.querySelector("h1").textContent);

// //jQuery

// console.log($("h1").text()); // .html == innerHtml .text = textContent
// console.log($(".hello").text());\
$('button').hover(function(){
    $(".hello").slideDown(2000);
});
// $("clickme").click(function (e) { 
//     e.preventDefault();
//     $(".hello").slideDown(); 
// });

// $("clickme").click(function (e) { 
//     e.preventDefault();
// //     // $(".hello").css("background","red");
// //     // $(".hello").removeClass("newclass");
// //     // $(".hello").addClass("newclass"); 
//     // $(".hello").fadeOut(); // opacity 0 + display: none
// //     // $(".hello").fadeIn(); // opacity 1 + display: block
// //     // kết hợp fadeIn và fadeOut
//     // $(".hello").fadeToggle(); 
//     $(".hello").slideDown(); // cuộn xuống
// //     // $(".hello").slideUp(); // cuộn lên
// //     // $(".hello").show(); // display: block
//     // $(".hello").hide(); // display: none
// //     // $(".hello").toggle(); // show + hide


// });

// var index = 0 ;
// $(".add").click(function (e) { 
//     e.preventDefault();
//     $(`<li>${index}<li>`).appendTo(".list");
//     index ++;
// });

// var products =[
//     { id: 1, name: "quan dui" , imgUrl: "https://picsum.photos/200/300" ,price: 20},
//     { id: 2, name: "quan dai" , imgUrl: "https://picsum.photos/201/300" ,price: 40},
//     { id: 3, name: "quan short" , imgUrl: "https://picsum.photos/200/301" ,price: 100},
//     { id: 4, name: "quan ship" , imgUrl: "https://picsum.photos/201/301" ,price: 1000},
// ]

// products.map((item) =>
// {
//     $(` <div class="item">
//     <img src=${item.imgUrl} alt="">
//     <h2>${item.name}</h2>
//     <h3>Gia: ${item.price}</h3>
//     </div>`).prependTo(".list");
// });

// 1. thay font chữ cho wed bằng google font
// 2. thêm thư viên jQuery
// 3. sự kiện click bằng jQuery
// 4. fadeIn ,fadeOut, fadeToggle
// 5. hide, show, toggle
// 6. slideUp, slideDown, slideToggle
// 7. prependTo, appendTo
// 8. addClass, removeClass
    
