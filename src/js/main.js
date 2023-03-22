import "./../scss/style.scss";

window.onload = function () {
  noflow();
};

const button = document.querySelector(".modal-button");

button.addEventListener("click", () => {
  off();
});

button.addEventListener("click", () => {
  haveflow();
});

function off() {
  document.querySelector(".modal").style.display = "none";
}

function noflow() {
  document.body.style.overflow = "hidden";
  document.body.style.userSelect = "none";
}

function haveflow() {
  document.body.style.overflow = "auto";
  document.body.style.userSelect = "auto";
}
