onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

let secondPage = document.getElementById("second-page");
let btn1 = document.getElementById("btn-1");
let btn2 = document.getElementById("btn-2");
let eop = document.getElementById("end-of-page");

function showGallery() {
  secondPage.style.display = "block";
  eop.style.display = "block";
  btn1.style.display = "none";
  btn2.style.display = "none";
}

function hiddenButton() {
  alert("HARUSSS MAUUU!!! REFRESH LAGIII!!!");
  btn1.style.display = "none";
  btn2.style.display = "none";
}
