const openNav = () => {
  document.getElementById("mySidenav").style.width = "400px";
  document.querySelector(".burger-menu-icon").style.display = "none";
};

const closeNav = () => {
  document.getElementById("mySidenav").style.width = "0";
  setTimeout(() => {
    document.querySelector(".burger-menu-icon").style.display = "block";
  }, 500);
};

document.querySelector(".close-win-sign-in").addEventListener("click", () => {
  document.querySelector(".sign-in").classList.toggle("active");
});

document.querySelector(".close-win-reg").addEventListener("click", () => {
  document.querySelector(".registration").classList.toggle("active");
});

document.querySelector(".sign").addEventListener("click", () => {
  document.querySelector(".sign-in").classList.toggle("active");
});

document.querySelector(".reg").addEventListener("click", () => {
  document.querySelector(".registration").classList.toggle("active");
});
