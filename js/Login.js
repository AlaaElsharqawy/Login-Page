loginEmail = document.getElementById("loginEmail");
loginPassword = document.getElementById("loginPassword");

p = document.getElementById("incorrect");

loginButton = document.getElementById("LoginBtn");
SignUpButton = document.getElementById("signUpBtn");

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
        localStorage.setItem("userName", JSON.stringify(arr[i].name));

        window.open("./home.html");
      } else {
        p.innerHTML = ` <span  class="text-danger my-5 ">incorrect email or password</span>`;
      }
    }
  }
}
