// khi click "login"

// lay gia tri trong o email, password

// kiem tra co rong hay khong

// rong thi thong bao

// khong rong thi bao success

// bat su kien click0

// lay dc DOM nut login

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
  var getForm = document.querySelectorAll(".form")

  if (!email) {
    //   tao the span
    let span = document.createElement("span");
    span.innerHTML = "Invalid email";
    // lay email group
    var email_group = document.querySelector(".email-group");
    // add span vao email-group
    email_group.append(span);
  }

  if (!password) {
    //   tao the span
    let span = document.createElement("span");
    span.innerHTML = "Invalid password";
    // lay password group
    var password_group = document.querySelector(".password-group");
    // add span vao password-group
    password_group.append(span);
  }
  if (email && password) {
    // tao the h1
    let success = document.createElement("h1");
    success.innerHTML = "Login Successfully!";

    // // lay the <form>
    var form = document.querySelector("form");
    form.prepend(success);
    emailEle.value = "";
    passwordEle.value = "";

    // chuyen trang
    // window.location.href = "/about.html";
  }
});