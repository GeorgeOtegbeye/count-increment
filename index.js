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
  // I used textContent instead of innerText because innerText ignores the styling.
  countEl.textContent = 0;
  // sets value of count to 0
  count = 0;
  // makes sure the count doesn't continue from the last value
}

function double() {
  count += 2;
  countEl.innerText = count;
  // doubles the count
}

function triple() {
  count += 3;
  countEl.innerText = count;
}
// triples the count

function reset() {
  countEl.innerText = 0;
  saveEl.textContent = "Previous entries: ";
  // resets the count and previous entries to zero
}
