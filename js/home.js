let logOutBtn = document.getElementById("logOutBtn");

let Name = JSON.parse(localStorage.getItem("userName"));

if (Name != null) {
  document.getElementById("homeName").innerHTML = Name;

  console.log(Name);
}

function logout() {
  localStorage.removeItem("userName");
}

logOutBtn.addEventListener("click", function () {
  logout();
});
