let screen = document.querySelector(".display");

let keys = document.querySelectorAll(".show-display");
keys.forEach((item) => {
  item.addEventListener("click", show);
});

let equalBtn = document.querySelector(".calculate");
equalBtn.addEventListener("click", equal);

let ac = document.querySelector(".all-clear");
ac.addEventListener("click", allClear);

let c = document.querySelector(".clear-last");
c.addEventListener("click", clear);

function show(event) {
  const x = event.target.innerText;
  if (screen.innerHTML == 0) {
    return (screen.innerHTML = x);
  }
  return (screen.innerHTML += x);
}

function equal() {
  const result = screen.innerText;
  screen.innerText = eval(result);
}

function allClear() {
  screen.innerText = 0;
}

function clear() {
  const text = screen.innerText;
  if (text.length === 1) {
    screen.innerText = 0;
  } else {
    screen.innerText = text.substring(0, text.length - 1);
  }
}
