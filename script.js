const inputCardNumber = document.querySelector(".card-number-input");
const boxCardNumber = document.querySelector(".card-number-box");
const inputCardHolder = document.querySelector(".card-holder-input");
const boxCardHolder = document.querySelector(".card-holder-name");
const inputMonth = document.querySelector(".month-input");
const boxMonth = document.querySelector(".exp-month");
const inputYear = document.querySelector(".year-input");
const boxYear = document.querySelector(".exp-year");
const inputBank = document.querySelector(".bank-input");
const boxBank = document.querySelector(".card-bank");
const inputPayment = document.querySelector(".payment-input");
const boxPayment = document.querySelector(".card-payment");
const form = document.querySelector(".form");
const table = document.querySelector(".table");

inputCardNumber.addEventListener("input", () => {
  boxCardNumber.innerText = inputCardNumber.value;
});

inputCardHolder.addEventListener("input", () => {
  boxCardHolder.innerText = inputCardHolder.value;
});

inputMonth.addEventListener("input", () => {
  boxMonth.innerText = inputMonth.value;
});

inputYear.addEventListener("input", () => {
  boxYear.innerText = inputYear.value;
});

inputBank.addEventListener("input", () => {
  boxBank.src = `image/${inputBank.value}.png`;
});

inputPayment.addEventListener("input", () => {
  boxPayment.src = `image/${inputPayment.value}.png`;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let tr = document.createElement("tr");
  table.append(tr);
  let cardNumber = document.createElement("td");
  cardNumber.innerText = inputCardNumber.value;
  tr.append(cardNumber);
  let cardHolder = document.createElement("td");
  cardHolder.innerText = inputCardHolder.value;
  tr.append(cardHolder);
  let cardMonth = document.createElement("td");
  cardMonth.innerText = inputMonth.value;
  tr.append(cardMonth);
  let cardYear = document.createElement("td");
  cardYear.innerText = inputYear.value;
  tr.append(cardYear);
  let cardBank = document.createElement("td");
  cardBank.innerText = inputBank.value;
  tr.append(cardBank);
  let cardPayment = document.createElement("td");
  cardPayment.innerText = inputPayment.value;
  tr.append(cardPayment);
  form.reset();
  boxCardNumber.innerText = "################";
  boxCardHolder.innerText = "full name";
  boxMonth.innerText = "mm";
  boxYear.innerText = "yy";
});
