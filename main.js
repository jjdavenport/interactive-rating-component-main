const submitBtn = document.getElementById("submit");
const display = document.getElementById("display");
const hidden = document.getElementById("hidden");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const selected = document.getElementById("selected");

submitBtn.addEventListener("click", () => {
  display.classList.remove("display");
  display.classList.add("submit-display");
  hidden.classList.add("display-hidden");
  selected.innerText = "You selected 1 out of 5";
});

btn1.addEventListener("click", () => {
  btn1.classList.add("select-button");
  btn1.classList.remove("button");
});
