updateContent();
const myForm = document.getElementById("my-form");
myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
  if (validateForm()) {
    sendData();
  }
});
function validateForm() {
  // input fields
  const Name = document.getElementById("name-input");
  const Number = document.getElementById("number-input");
  const Month = document.getElementById("month-input");
  const Year = document.getElementById("year-input");
  const cvc = document.getElementById("cvc-input");

  // error fields
  const nameErr = document.getElementById("name-err");
  const numberErr = document.getElementById("number-err");
  const monthErr = document.getElementById("month-err");
  const yearErr = document.getElementById("year-err");
  const cvcErr = document.getElementById("cvc-err");

  // resetting
  let isValid = true;
  nameErr.textContent = "";
  numberErr.textContent = "";
  monthErr.textContent = "";
  yearErr.textContent = "";
  cvcErr.textContent = "";

  // name validation
  if (Name.value === "") {
    isValid = false;
    nameErr.textContent = "can't be blank";
  } else if (Name.value.length < 4) {
    isValid = false;
    nameErr.textContent = "The name is too short";
  } else if (/\d/.test(Name.value)) {
    isValid = false;
    nameErr.textContent = "Name can't have numbers";
  }
  if (Number.value === "") {
    // number validation
    isValid = false;
    numberErr.textContent = "can't be blank";
  } else if (/[a-zA-Z]/.test(Number.value)) {
    isValid = false;
    numberErr.textContent = "wrong format,numbers only";
  } else if (Number.value.length > 16 || Number.value.length < 16) {
    isValid = false;
    numberErr.textContent = "card number should be 16 number";
  }
  // month date validation
  if (Month.value === "") {
    isValid = false;
    monthErr.textContent = "can't be blank";
  } else if (/[a-zA-Z]/.test(Month.value)) {
    isValid = false;
    monthErr.textContent = "wrong format,numbers only";
  } else if (+Month.value > 12 || +Month.value < 1) {
    isValid = false;
    monthErr.textContent = "Valid month required";
  }
  // year date validation
  if (Year.value === "") {
    isValid = false;
    yearErr.textContent = "can't be blank";
  } else if (/[a-zA-Z]/.test(Year.value)) {
    isValid = false;
    yearErr.textContent = "wrong format,numbers only";
  } else if (+Year.value > 99 || +Year.value < 1) {
    isValid = false;
    yearErr.textContent = "Valid month required";
  }
  // cvc date validation
  if (cvc.value === "") {
    isValid = false;
    cvcErr.textContent = "can't be blank";
  } else if (/[a-zA-Z]/.test(cvc.value)) {
    isValid = false;
    cvcErr.textContent = "wrong format,numbers only";
  } else if (!/^\d{3}$/.test(cvc.value)) {
    isValid = false;
    cvcErr.textContent = "three numbers required";
  }

  return isValid;
}
function updateContent() {
  // input fields
  const Name = document.getElementById("name-input");
  const Number = document.getElementById("number-input");
  const Month = document.getElementById("month-input");
  const Year = document.getElementById("year-input");
  const cvc = document.getElementById("cvc-input");
  //card details
  const cardName = document.querySelector(".name");
  const cardNumber = document.querySelector(".card-number");
  const cardMonth = document.querySelector(".month");
  const cardYear = document.querySelector(".year");
  const cardCvc = document.querySelector(".cvc-number");
  Name.addEventListener("input", () => {
    cardName.textContent = Name.value;
  });
  Number.addEventListener("input", () => {
    cardNumber.textContent = Number.value;
    cardNumber.textContent = cardNumber.textContent.replace(/(\d{4})/g, "$1 ");
  });
  Month.addEventListener("input", () => {
    cardMonth.textContent = Month.value;
  });
  Year.addEventListener("input", () => {
    cardYear.textContent = Year.value;
  });
  cvc.addEventListener("input", () => {
    cardCvc.textContent = cvc.value;
  });
}
function sendData() {
  const data = new FormData(myForm);
  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "https://jsonplaceholder.typicode.com/posts");
  xhttp.onreadystatechange = function () {
    if (xhttp.readyState == XMLHttpRequest.DONE) {
      if (xhttp.status === 201) {
          showSuccess();
      } else {
       console.error(xhttp.responseText);
      }
    }
  };
  xhttp.send(data);
}

function showSuccess() {
    document.querySelector('.success').classList.add('show');
    document.querySelector('.inputs-section').classList.add('hide')
}

document.querySelector('button[type = "button"]').addEventListener('click', () => {
      document.querySelector(".success").classList.remove("show");
      document.querySelector(".inputs-section").classList.remove("hide");
})