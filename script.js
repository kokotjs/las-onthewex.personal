// toggle clas aktif
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// navbar hilang ketika diklik diluar hamburger
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// dark mode
let badan = document.body;
let mode = document.getElementById("mode");
let navbar = document.getElementById("navbar");
let home = document.getElementById("home");
let sun = document.querySelector(".sun");
let modeGelap = document.getElementById("mode-gelap");
let modeTerang = document.getElementById("mode-terang");

if (localStorage.getItem("theme") == "dark") darks(true);

function darks(isDarks) {
  if (isDarks) {
    badan.setAttribute("id", "gelap");
    navbar.setAttribute("id", "gelapn");
    home.setAttribute("class", "gelaph");
    sun.setAttribute("id", "moon");
    modeGelap.setAttribute("id", "mode-gelap1");
    modeTerang.setAttribute("id", "mode-terang1");
    localStorage.setItem("theme", "dark");
  } else {
    badan.setAttribute("id", "");
    navbar.setAttribute("id", "");
    home.setAttribute("class", "home");
    sun.setAttribute("id", "");
    modeGelap.setAttribute("id", "mode-gelap");
    modeTerang.setAttribute("id", "mode-terang");
    localStorage.removeItem("theme");
  }
}

// animasi scroll

function anime() {
  var animes = document.querySelectorAll(".anime");

  for (var i = 0; i < animes.length; i++) {
    var elementTop = animes[i].getBoundingClientRect().top;
    var windowHeight = window.innerHeight;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      animes[i].classList.add("active");
    } else {
      animes[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", anime);
