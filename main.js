document.addEventListener("DOMContentLoaded", () => {
  const isLoged = localStorage.getItem("isLoged");
  if (isLoged) {
    document.getElementById("login-card").classList.remove("login-card-active");
    document.getElementById("menu").classList.add("menu-navbar-active");
    document.getElementById("join-btn").style.display = "none";
    document.getElementById("profile-btn").style.display = "block";
  }
  return;
});
document.getElementById("join-btn").addEventListener("click", () => {
  const loginCard = document.getElementById("login-card");
  loginCard.classList.toggle("login-card-active");
});

const switchBtn = document.querySelectorAll("#sign-switch");
switchBtn.forEach((element) => {
  element.addEventListener("click", () => {
    const loginCard = document.getElementById("login-card");
    const signUpCard = document.getElementById("sign-up-card");
    loginCard.classList.toggle("login-card-active");
    signUpCard.classList.toggle("sign-up-card-active");
  });
});

// =============== Login =================
const users = JSON.parse(localStorage.getItem("users")) || [];

document.getElementById("login-btn").addEventListener("click", () => {
  const email = document.getElementById("email-login").value;
  const password = document.getElementById("password-login").value;
  if (users.length === 0) {
    return alert("no users are logged, please sign up first!");
  }
  const currentEmail = users.filter((user) => user.email === email)[0];
  if (currentEmail === undefined) {
    return alert("email has not defined");
  }
  if (currentEmail.password === password) {
    document.getElementById("login-card").classList.remove("login-card-active");
    document.getElementById("menu").classList.add("menu-navbar-active");
    document.getElementById("join-btn").style.display = "none";
    document.getElementById("profile-btn").style.display = "block";
    localStorage.setItem("isLoged", JSON.stringify(true));
    return alert("successfully logged");
  }
  return alert("failed to login");
});

// =============== Sign Up =================
document.getElementById("sign-up-btn").addEventListener("click", () => {
  const email = document.getElementById("email-sign-up").value;
  const username = document.getElementById("username-sign-up").value;
  const university = document.getElementById("university-sign-up").value;
  const password = document.getElementById("password-sign-up").value;
  const account = {
    email,
    username,
    university,
    password,
  };
  users.push(account);
  localStorage.setItem("users", JSON.stringify(users));
  alert("successfully to sign up,please back to login page!!");
  localStorage.setItem("isLoged", JSON.stringify(false));
});

// =============== profile =================
document.getElementById("profile-btn").addEventListener("click", () => {
  document.getElementById('profile-card').classList.toggle('profile-card-active')
});
