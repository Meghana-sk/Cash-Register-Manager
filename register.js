const payme = document.querySelector("#pay");
const givenCash = document.querySelector("#cash-given");
const checkBtn = document.querySelector("#check");
const notesToBeGiven = document.querySelectorAll(".notes-denominations-given");

let availablecash = [2000,500,100,20,10,5,1];

payme.addEventListener("change",
function displayGivenCash() {
    givenCash.style.display = "inline";
    document.getElementById("second-input").style.display = "block";

});



checkBtn.addEventListener("click",
   function calculateNoteDenominationToBeGivenBack() {
       
    if (parseInt(givenCash.value) > 0 && parseInt(payme.value) > 0) {
    let amountToBeGivenback = parseInt(givenCash.value) - parseInt(payme.value);
    if (typeof(amountToBeGivenback) === "number") {
    for (let index = 0; index < availablecash.length; index++) {
        const notes = Math.trunc(amountToBeGivenback / availablecash[index]);
        amountToBeGivenback = (amountToBeGivenback % availablecash[index]);
        notesToBeGiven[index].innerText = notes;
    }
}
else {
    console.log("Invalid bill or given amount")
}
    }
  
});

