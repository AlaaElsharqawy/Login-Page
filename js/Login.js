loginEmail = document.getElementById("loginEmail");
loginPassword = document.getElementById("loginPassword");

p = document.getElementById("incorrect");

loginButton = document.getElementById("LoginBtn");
SignUpButton = document.getElementById("signUpBtn");

var pathparts = location.pathname.split("/");
var baseURL = "";
for (var i = 0; i < pathparts.length - 1; i++) {
  baseURL += "/" + pathparts[i];
}
console.log(baseURL);

let Name = JSON.parse(localStorage.getItem("userName"));

let arr = [];

if (localStorage.getItem("LoginInfo") != null) {
  arr = JSON.parse(localStorage.getItem("LoginInfo"));
} else {
  arr = [];
}
console.log(arr);

loginButton.addEventListener("click", function () {
  getInputs();
});

function getInputs() {
  if (loginEmail.value == "" || loginPassword.value == "") {
    p.innerHTML = ` <span  class="text-danger my-5 ">All inputs is required</span>`;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (
        arr[i].email.toLowerCase() === loginEmail.value.toLowerCase() &&
        arr[i].password.toLowerCase() === loginPassword.value.toLowerCase()
      ) {
        console.log("hello");
        localStorage.setItem("userName", JSON.stringify(arr[i].name));

        if (baseURL == "/") {
          location.replace("https://" + location.hostname + "/home.html");
        } else {
          location.replace(baseURL + "/home.html");
        }
      } else {
        p.innerHTML = ` <span  class="text-danger my-5 ">incorrect email or password</span>`;
      }
    }
  }
}
