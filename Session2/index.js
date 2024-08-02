// const redColorElement = document.getElementById("red");
// const greenColorElement = document.getElementById("green");
// const blueColorElement = document.getElementById("blue");
// const yellowColorElement = document.getElementById("yellow");

const colorsDiv = document.getElementById("colors");

const targetElement = document.getElementById("target");

/*
THIS IS NOOBS CODING -> 


redColorElement.addEventListener("click", () => {
  targetElement.innerHTML = `Selected Color: red`;
  targetElement.style.background = "red";
});

greenColorElement.addEventListener("click", () => {
  targetElement.innerHTML = `Selected Color: green`;
  targetElement.style.background = "green";
});

blueColorElement.addEventListener("click", () => {
  targetElement.innerHTML = `Selected Color: blue`;
  targetElement.style.background = "blue";
});

yellowColorElement.addEventListener("click", () => {
  targetElement.innerHTML = `Selected Color: yellow`;
  targetElement.style.background = "yellow";
});
*/

// EVENT DELEGATION .....

/*
colorsDiv.addEventListener("click", (eventObj) => {
  // const childElement = eventObj.target;
  // const id = childElement.id; // blue green yellow red

  const color = eventObj.target.id;

  targetElement.innerHTML = `Selected Color: ${color}`;
  targetElement.style.background = color;
});
*/

const form = document.getElementById("booking-form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); /// it stops page reloading
  console.log("hello i submit form ");

  const fullNameElem = document.getElementById("fullName");

  const form = event.target;

  const name = form.elements["fullName"].value;
  const email = form.elements["email"].value;
  const doctor = form.elements["doctor"].value;
  const location = form.elements["location"].value;
  const date = form.elements["date"].value;

  const payload = {
    name: name,
    email: email,
    doctor,
    location,
    date,
  };

  console.log(payload);

  fetch("https:jsonplaceholder/", {
    method: "POST",
    body: JSON.stringify(payload),
  }).finally(() => {
    form.elements["fullName"].value = "";
    form.elements["email"].value = "";
    fullNameElem.innerHTML = "";

    // form.reset();
  });

  console.dir(form);
});
