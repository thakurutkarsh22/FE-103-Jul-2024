// counter. ......

console.log("hello world");

const news = "India won an Bronze in shooting.";

// SELECT AN ELEMENT WITH ID:
// const headin1Element = document.getElementById("heading1");
// headin1Element.innerHTML = news;

// const headin2Element = document.getElementById("heading2");
// console.dir(headin2Element);

/*
NORMAL COUNTER

const buttonIncreasingElement = document.getElementById("increasing");
const buttonDecreasingElement = document.getElementById("decreasing");
const counterElement = document.getElementById("counter");

console.log(counterElement.innerHTML, typeof counterElement.innerHTML);

buttonIncreasingElement.addEventListener("click", (event) => {
  let newNumber = Number(counterElement.innerHTML) + 1;
  counterElement.innerHTML = newNumber;
});

buttonDecreasingElement.addEventListener("click", (event) => {
  let newNumber = Number(counterElement.innerHTML) - 1;
  counterElement.innerHTML = newNumber;
});

*/

// ADVANCE COUNTER
const counter2Element = document.getElementById("counter2");
const fnameElement = document.getElementById("fname");

fnameElement.addEventListener("input", (event) => {
  console.log(event);
  const val = event.target.value;

  if (!val) {
    counter2Element.innerHTML = "0";
  } else {
    counter2Element.innerHTML = val;
  }
});
