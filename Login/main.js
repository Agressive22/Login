// get element from document
let register = document.querySelector(".register");
let Access = document.querySelector(".access");
let signUp = document.querySelector(".signUp");
let signIn = document.querySelector(".signIn");
let userName = document.getElementById("user");
let pass = document.getElementById("pass");
let fName = document.getElementById("fName");
let lName = document.getElementById("lName");
let pass1 = document.getElementById("pass1");
let matchPass = document.getElementById("matchPass");

let users = [];

// validation on sign in , sign up
document.body.onload = function () {
  signUp.classList.add("hidden");
};

register.addEventListener("click", function () {
  signIn.classList.add("hidden");
  signUp.classList.remove("hidden");
  users = JSON.parse(localStorage.getItem("arr")) || [];

  // storage
  if (matchPass.value != "") {
    if (pass1.value === matchPass.value) {
      // create object for each user
      const user = {
        userName: `${fName.value} ${lName.value}`,
        password: pass1.value,
      };
      users.push(user);
      localStorage.setItem("arr", JSON.stringify(users));

      //reflect
      signIn.classList.remove("hidden");
      signUp.classList.add("hidden");
    } else {
      matchPass.style.border = "2px solid red";
    }
    ((fName.value = ""),
      (lName.value = ""),
      (pass1.value = ""),
      (matchPass.value = ""));
  }
});

Access.addEventListener("click", function () {
  signIn.classList.remove("hidden");
  signUp.classList.add("hidden");

  if (users === null) {
  } else {
    // validate of u your account is there
    let found = false;
    users = JSON.parse(localStorage.getItem("arr")) || [];
    for (let i = 0; i < users.length; i++) {
      if (
        userName.value === users[i]["userName"] &&
        pass.value === users[i]["password"]
      ) {
        found = true;
        break;
      }
    }
    if (found != true) {
      let p = document.createElement("p");
      p.classList.add("validate");
      p.innerHTML = "Invalid name or Password";
      signIn.appendChild(p);
    } else {
      window.location.href = "To Do List App/index.html";
    }
    userName.value = "";
    pass.value = "";
  }
});
