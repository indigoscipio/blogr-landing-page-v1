let btnMenu = document.querySelector(".topnav__menu");
let mobileOverlay = document.querySelector(".topnav__links");

btnMenu.addEventListener("click", (e) => {
  if (mobileOverlay.classList.contains("active")) {
    mobileOverlay.classList.remove("active");
  } else {
    mobileOverlay.classList.add("active");
  }
});
