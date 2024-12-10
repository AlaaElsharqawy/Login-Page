let NameInput = document.getElementById("RegisterName");
let EmailInput = document.getElementById("RegisterEmail");
let PasswordInput = document.getElementById("RegisterPassword");
let SignInBtn = document.getElementById("SignInBtn");
let RegisterButton = document.getElementById("registerBtn");
let nameMsg = document.getElementById("name-msg");
let emailMsg = document.getElementById("email-msg");
let passMsg = document.getElementById("pass-msg");
let p = document.getElementById("incorrect");

let arr = [];

if (localStorage.getItem("LoginInfo") != null) {
  arr = JSON.parse(localStorage.getItem("LoginInfo"));
} else {
  arr = [];
}

RegisterButton.addEventListener("click", function () {
  checkInputs();
});

function checkInputs() {
  if (
    NameInput.value == "" ||
    EmailInput.value == "" ||
    PasswordInput.value == ""
  ) {
    p.innerHTML = ` <span  class="text-danger my-5 ">All inputs is required</span>`;
  } else {
    if (
      validationInputs(NameInput, "name-msg") &&
      validationInputs(EmailInput, "email-msg") &&
      validationInputs(PasswordInput, "pass-msg")
    ) {
      let info = {
        name: NameInput.value,
        email: EmailInput.value,
        password: PasswordInput.value,
      };

      if (arr.length == 0) {
        arr.push(info);
        localStorage.setItem("LoginInfo", JSON.stringify(arr));
        p.innerHTML = ` <span  class="text-success my-5 ">Succes</span>`;

        clearInputs();
      }

      if (checkEmail()) {
        p.innerHTML = ` <span  class="text-danger my-5 ">Aleardy  Email is Exist</span>`;
      } else {
        arr.push(info);
        localStorage.setItem("LoginInfo", JSON.stringify(arr));
        p.innerHTML = ` <span  class="text-success my-5 ">Success</span>`;

        clearInputs();
      }
    }
  }
}

function checkEmail() {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].email.toLowerCase() === EmailInput.value.toLowerCase()) {
      return true;
    }
  }
}
function clearInputs() {
  NameInput.value = null;
  EmailInput.value = null;
  PasswordInput.value = null;

  NameInput.classList.remove("is-valid");
  EmailInput.classList.remove("is-valid");
  PasswordInput.classList.remove("is-valid");
}

NameInput.addEventListener("input", function (e) {
  validationInputs(e.target, "name-msg");
});
EmailInput.addEventListener("input", function (e) {
  validationInputs(e.target, "email-msg");
});
PasswordInput.addEventListener("input", function (e) {
  validationInputs(e.target, "pass-msg");
});

function validationInputs(element, msgId) {
  var text = element.value;
  var msg = document.getElementById(msgId);
  var regex = {
    RegisterName: /^\w{3,}(\s+\w+)*$/,
    RegisterEmail: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    RegisterPassword:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/,
  };

  if (regex[element.id].test(text)) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
    msg.classList.add("d-none");

    return true;
  } else {
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
    msg.classList.remove("d-none");

    return false;
  }
}
