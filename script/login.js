const USER_NAME_KEY = "userName";
const HIDDEN_CLASS_NAME = "hidden";

const loginForm = document.querySelector("header form");
const logoutBtn = document.getElementById("logout");

function printUserName() {
  const loginInfo = document.querySelector("header div");
  const main = document.querySelector("main");

  const userName = localStorage.getItem(USER_NAME_KEY);

  if (userName) {
    const h1 = loginInfo.querySelector("h1");
    h1.innerText = `${userName} Hello!😊`;

    loginForm.classList.add(HIDDEN_CLASS_NAME);
    loginInfo.classList.remove(HIDDEN_CLASS_NAME);
    main.classList.remove(HIDDEN_CLASS_NAME);
  } else {
    loginForm.classList.remove(HIDDEN_CLASS_NAME);
    loginInfo.classList.add(HIDDEN_CLASS_NAME);
    main.classList.add(HIDDEN_CLASS_NAME);
  }
}

function registUserName(e) {
  e.preventDefault();

  const value = loginForm.querySelector("input").value;
  localStorage.setItem(USER_NAME_KEY, value);

  printUserName();
}

function logout() {
  const input = loginForm.querySelector("input");
  input.value = "";

  localStorage.removeItem(USER_NAME_KEY);

  printUserName();
}

document.addEventListener("submit", registUserName);
logoutBtn.addEventListener("click", logout);

printUserName();
