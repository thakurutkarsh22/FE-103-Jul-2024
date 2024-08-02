const form = document.getElementById("booking-form");
const nameElement = form.elements["fullName"];
const emailElement = form.elements["email"];
const doctorElement = form.elements["doctor"];
const locationElement = form.elements["location"];
const dateElement = form.elements["date"];

const nameInfoElement = document.getElementById("name-info");
const emailInfoElement = document.getElementById("email-info");

function validate(payload) {
  const { name } = payload;

  let isValid = true;

  const nameRegex = /^[a-z A-Z]+$/;

  if (!name) {
    isValid = false;
    nameInfoElement.textContent = "Enter Name";
  } else if (name.length < 5) {
    isValid = false;
    nameInfoElement.textContent = "Enter atleast 5 digiy name";
  } else if (!name.match(nameRegex)) {
    isValid = false;
    nameInfoElement.textContent =
      "Enter Valid name no Special Character and number";
  }

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  return isValid;
}

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

  const resultOfValudation = validate(payload);

  if (resultOfValudation) {
    fetch("https:jsonplaceholder/", {
      method: "POST",
      body: JSON.stringify(payload),
    }).finally(() => {
      form.elements["fullName"].value = "";
      form.elements["email"].value = "";
      fullNameElem.innerHTML = "";

      // form.reset();
    });
  } else {
    alert("FIX your erros");
  }
  console.log(payload);
});

// EVENTS --------- BLur and FOcus

// NAME VALIDATION
nameElement.addEventListener("focus", () => {
  nameInfoElement.textContent = "";
});

nameElement.addEventListener("blur", (event) => {
  const name = event.target.value.trim();

  let isValid = true;

  const nameRegex = /^[a-z A-Z]+$/;
  if (!name) {
    isValid = false;
    nameInfoElement.textContent = "Enter Name";
  } else if (name.length < 5) {
    isValid = false;
    nameInfoElement.textContent = "Enter atleast 5 digiy name";
  } else if (!name.match(nameRegex)) {
    isValid = false;
    nameInfoElement.textContent =
      "Enter Valid name no Special Character and number";
  }
});

// EMAIL VALIDATION

emailElement.addEventListener("focus", () => {
  emailInfoElement.textContent = "";
});

emailElement.addEventListener("blur", (event) => {
  const email = event.target.value.trim();

  let isValid = true;

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!email) {
    isValid = false;
    emailInfoElement.textContent = "Enter email";
  } else if (email.length < 5) {
    isValid = false;
    emailInfoElement.textContent = "Enter atleast 5 digiy emal";
  } else if (!email.match(emailRegex)) {
    isValid = false;
    emailInfoElement.textContent = "Enter Valid email no wrong things allowd";
  }
});

// ---------  LOCAL STORAGE -----

window.addEventListener("beforeunload", (event) => {
  const payload = {
    name: nameElement.value,
    email: emailElement.value,
  };

  localStorage.setItem("formData", JSON.stringify(payload));
});

document.addEventListener("DOMContentLoaded", () => {
  const paylaod = JSON.parse(localStorage.getItem("formData"));
  const { name, email } = paylaod;

  nameElement.value = name;
  emailElement.value = email;
});

// WILL CLEAR alll the data
// localStorage.clear()

// will remove only 1 item that is formData
// localStorage.removeItem("formData")
