"use strict";
let prevScrollPos = window.pageYOffset;
console.log(prevScrollPos);
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
    console.log("Prev: " + prevScrollPos);
    console.log("Curr: " + currentScrollPos);
  } else {
    document.getElementById("nav").style.top = "-500px";
    console.log("Prev: " + prevScrollPos);
    console.log("Curr: " + currentScrollPos);
  }
  prevScrollPos = currentScrollPos;
};

// contact us flex columnd add function
function addFlexClassesToContactUsContainer() {
  if (window.innerWidth <= 676) {
    // Check if the screen size is less than or equal to 576px (mobile size)
    let contactUsContainer = document.getElementById("contactUsContainer");
    contactUsContainer.classList.add("d-flex");
    contactUsContainer.classList.add("flex-column");
  }
}

window.addEventListener("load", addFlexClassesToContactUsContainer);
window.addEventListener("resize", addFlexClassesToContactUsContainer);
