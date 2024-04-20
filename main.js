const submitBtn = document.getElementById("submit");
const display = document.getElementById("display");
const hidden = document.getElementById("hidden");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const selected = document.getElementById("selected");

btn1.addEventListener("click", () => {
  btn1.classList.add("select-button");
  btn1.classList.remove("button");
  btn2.classList.add("button");
  btn3.classList.add("button");
  btn4.classList.add("button");
  btn5.classList.add("button");
  submitBtn.addEventListener("click", () => {
    display.classList.remove("display");
    display.classList.add("submit-display");
    hidden.classList.add("display-hidden");
    selected.innerText = "You selected 1 out of 5";
  });
});

btn2.addEventListener("click", () => {
  btn2.classList.add("select-button");
  btn2.classList.remove("button");
  btn1.classList.add("button");
  btn3.classList.add("button");
  btn4.classList.add("button");
  btn5.classList.add("button");
  submitBtn.addEventListener("click", () => {
    display.classList.remove("display");
    display.classList.add("submit-display");
    hidden.classList.add("display-hidden");
    selected.innerText = "You selected 2 out of 5";
  });
});

btn3.addEventListener("click", () => {
  btn3.classList.add("select-button");
  btn3.classList.remove("button");
  btn1.classList.add("button");
  btn2.classList.add("button");
  btn4.classList.add("button");
  btn5.classList.add("button");
  submitBtn.addEventListener("click", () => {
    display.classList.remove("display");
    display.classList.add("submit-display");
    hidden.classList.add("display-hidden");
    selected.innerText = "You selected 3 out of 5";
  });
});

btn4.addEventListener("click", () => {
  btn4.classList.add("select-button");
  btn4.classList.remove("button");
  btn1.classList.add("button");
  btn2.classList.add("button");
  btn3.classList.add("button");
  btn5.classList.add("button");
  submitBtn.addEventListener("click", () => {
    display.classList.remove("display");
    display.classList.add("submit-display");
    hidden.classList.add("display-hidden");
    selected.innerText = "You selected 4 out of 5";
  });
});

btn5.addEventListener("click", () => {
  btn5.classList.add("select-button");
  btn5.classList.remove("button");
  btn1.classList.add("button");
  btn2.classList.add("button");
  btn3.classList.add("button");
  btn4.classList.add("button");
  submitBtn.addEventListener("click", () => {
    display.classList.remove("display");
    display.classList.add("submit-display");
    hidden.classList.add("display-hidden");
    selected.innerText = "You selected 5 out of 5";
  });
});
