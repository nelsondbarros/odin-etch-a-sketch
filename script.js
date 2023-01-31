const container = document.querySelector("#container");

for (i = 0; i < 256; i++) {
  container.appendChild(document.createElement("div"));
}

function removeDivs(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

let number;
const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    do {
      number = window.prompt("Enter a number below 100");
    } while (number > 100);
    removeDivs(container);
    container.setAttribute(
      "style",
      `grid-template-columns: repeat(${number}, 2fr); grid-template-rows: repeat(${number}, 2fr);`
    );
    for (i = 0; i < number * number; i++) {
      container.appendChild(document.createElement("div"));
    }
  });
});
