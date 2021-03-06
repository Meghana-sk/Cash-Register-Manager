const payme = document.querySelector("#pay");
const givenCash = document.querySelector("#cash-given");
const nextBtn = document.querySelector("#next");
const checkBtn = document.querySelector("#check");
const notesToBeGiven = document.querySelectorAll(".notes-denominations-given");
const errorText = document.querySelector("#error-text");
const table = document.querySelector("#table");

let availablecash = [2000, 500, 100, 20, 10, 5, 1];

checkBtn.style.display = "none";

const displayGivenCash = () => {
  if (Number(payme.value) > 0) {
    givenCash.style.display = "inline";
    document.getElementById("second-input").style.display = "block";
    errorText.innerText = "";
    checkBtn.style.display = "block";
    checkBtn.style.margin = "auto";
  } else {
    errorText.innerText = "Invalid bill amount";
  }
};

const calculateNoteDenominationToBeGivenBack = () => {
  if (parseInt(givenCash.value) > 0 && parseInt(payme.value) > 0) {
    let amountToBeGivenback = parseInt(givenCash.value) - parseInt(payme.value);
    if (parseInt(givenCash.value) > parseInt(payme.value)) {
      for (let index = 0; index < availablecash.length; index++) {
        const notes = Math.trunc(amountToBeGivenback / availablecash[index]);
        amountToBeGivenback = amountToBeGivenback % availablecash[index];
        table.style.display = "block";
        errorText.innerText = "";
        notesToBeGiven[index].innerText = notes;
      }
    } else if (parseInt(givenCash.value) === parseInt(payme.value)) {
      errorText.innerText = "No amount to be returned as change.";
    } else {
      errorText.innerText = "Given amount is less than bill.😕";
      table.style.display = "none";
    }
  } else {
    for (let index = 0; index < availablecash.length; index++) {
      notesToBeGiven[index].innerText = 0;
    }
    errorText.innerText = "Invalid given amount";
  }
};

nextBtn.addEventListener("click", displayGivenCash);
checkBtn.addEventListener("click", calculateNoteDenominationToBeGivenBack);
