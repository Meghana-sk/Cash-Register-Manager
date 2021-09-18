const payme = document.querySelector("#pay");
const givenCash = document.querySelector("#cash-given");
const nextBtn = document.querySelector("#next");
const checkBtn = document.querySelector("#check");
const notesToBeGiven = document.querySelectorAll(".notes-denominations-given");
const errorText = document.querySelector("#error-text");
const table = document.querySelector("#table");

let availablecash = [2000, 500, 100, 20, 10, 5, 1];

checkBtn.style.display = "none";

nextBtn.addEventListener("click", function displayGivenCash() {
  if (Number(payme.value) > 0) {
    givenCash.style.display = "inline";
    document.getElementById("second-input").style.display = "block";
    errorText.innerText = "";
    checkBtn.style.display = "block";
    checkBtn.style.margin = "auto";
  } else {
    errorText.innerText = "Invalid bill amount";
  }
});

checkBtn.addEventListener(
  "click",
  function calculateNoteDenominationToBeGivenBack() {
    if (parseInt(givenCash.value) > 0 && parseInt(payme.value) > 0) {
      let amountToBeGivenback =
        parseInt(givenCash.value) - parseInt(payme.value);
      if (parseInt(givenCash.value) > parseInt(payme.value)) {
        for (let index = 0; index < availablecash.length; index++) {
          const notes = Math.trunc(amountToBeGivenback / availablecash[index]);
          amountToBeGivenback = amountToBeGivenback % availablecash[index];
          errorText.innerText = "";
          notesToBeGiven[index].innerText = notes;
        }
      } else {
        errorText.innerText = "Given amount is less than bill.😕";
      }
    } else {
      for (let index = 0; index < availablecash.length; index++) {
        notesToBeGiven[index].innerText = 0;
      }
      errorText.innerText = "Invalid given amount";
    }
  }
);
