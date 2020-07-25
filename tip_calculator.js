let bill = 0;
let tipPercent = 0;
let people = 0;
let tip = 0;

function calculateTip() {
  bill = document.getElementById("bill").value;
  tipPercent = document.getElementById("tipPercent").value;
  people = document.getElementById("people").value;
  if (isNaN(bill)) {
    alert("Please enter a number as your bill amount");
    return;
  }
  tip = (bill * (tipPercent / 100)) / people;

  document.getElementById("tip-amount").innerHTML =
    "Tip amount is: $" + Math.round(tip * 100) / 100 + " per person";
}

function checkPeoplePerson() {
  people = document.getElementById("people").value;
  if (people != 1) {
    document.getElementById("personPeople").innerHTML = "people";
  } else {
    document.getElementById("personPeople").innerHTML = "person";
  }
}
