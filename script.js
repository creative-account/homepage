// script.js
document.addEventListener("DOMContentLoaded", function () {
    var burger = document.querySelector(".navbar-burger");
    var menu = document.getElementById("navbarMenuHeroA");
  
    burger.addEventListener("click", function () {
      burger.classList.toggle("is-active");
      menu.classList.toggle("is-active");
    });
  });
  