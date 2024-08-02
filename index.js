let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

function increment() {
  count += 1;
  countEl.innerText = count;
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  // count = 0;
  // I used textContent instead of innerText because innerText ignores the styling.
}

function double() {
  count += 2;
  countEl.innerText = count;
}

function triple() {
  count += 3;
  countEl.innerText = count;
}

function reset() {
  countEl.innerText = 0;
  saveEl.textContent = 'Previous entries: ';
}
