const submitBtn = document.getElementById("submit");
const display = document.getElementById("display");
const hidden = document.getElementById("hidden");
const selected = document.getElementById("selected");
const button = document.querySelectorAll(".button");

button.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    button.forEach((btn) => {
      btn.classList.remove("select-button");
    });
    e.target.classList.add("select-button");
    submitBtn.addEventListener("click", () => {
      display.classList.remove("display");
      hidden.classList.add("display-hidden");
      display.classList.add("submit-display");
      selected.innerText = `You selected ${e.target.value} out of 5`;
    });
  });
});
