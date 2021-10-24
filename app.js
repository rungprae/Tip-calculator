let bill = 0;
let tipRate = 0;
let people = 0;

// bill
document.querySelector("#bill").addEventListener("input", function (event) {
  bill = parseFloat(event.target.value);
  calTip(bill, tipRate, people);
});

// percent tip custom
document.querySelector("#percent5").addEventListener("click", display5);
function display5(event) {
  tipRate = 5;
  toggleButton(event);
  document.querySelector("#bg-ct").value = "";
  calTip(bill, tipRate, people);
}

document.querySelector("#percent10").addEventListener("click", display10);
function display10(event) {
  tipRate = 10;
  toggleButton(event);
  document.querySelector("#bg-ct").value = "";
  calTip(bill, tipRate, people);
}
document.querySelector("#bg-color").addEventListener("click", display15);
function display15(event) {
  tipRate = 15;
  toggleButton(event);
  document.querySelector("#bg-ct").value = "";
  calTip(bill, tipRate, people);
}
document.querySelector("#percent25").addEventListener("click", display25);
function display25(event) {
  tipRate = 25;
  toggleButton(event);
  document.querySelector("#bg-ct").value = "";
  calTip(bill, tipRate, people);
}
document.querySelector("#percent50").addEventListener("click", display50);
function display50(event) {
  tipRate = 50;
  toggleButton(event);
  document.querySelector("#bg-ct").value = "";
  calTip(bill, tipRate, people);
}
document.querySelector("#bg-ct").addEventListener("input", (event) => {
  tipRate = event.target.value;
  let removeButton = document.querySelectorAll(".btn");
  for(let i = 0; i < removeButton.length; i++){
    removeButton.item(i).classList.remove("active");
  }
  calTip(bill, tipRate, people);
});

function toggleButton(event) {
  let btnList = document.querySelectorAll(".btn");
  for (let i = 0; i < btnList.length; i++) {
    btnList.item(i).classList.remove("active");
  }
  event.target.classList.add("active");
}

// Number of people
document.querySelector("#people").addEventListener("input", function (event) {
  people = parseInt(event.target.value);
  let errorMsg = document.querySelector("#error");
  let format = document.querySelector("#people");
  console.log("ssss", people === 0, typeof people);
  if (people === 0) {
    errorMsg.textContent = "Can't be zero";
    format.style.border = "2px solid rgb(209, 83, 51)";
  } else {
    errorMsg.textContent = " ";
    format.style.border = "2px solid hsl(189, 41%, 97%)";
    format.style.backgroundColor = "hsl(189, 41%, 97%)";
  }
  calTip(bill, tipRate, people);
});

function calTip(bill, tipRate, people) {
  let tipAmount = 0;
  let total = 0;
  if (people > 0) {
    tipAmount = (bill * (tipRate / 100)) / people;
    total = bill / people + tipAmount;
  }
  document.querySelector("#tip-amount").innerHTML =
    "$" + tipAmount.toFixed(3).slice(0, -1);
  document.querySelector("#total").innerHTML = "$" + total.toFixed(2);
}

//Reset
document.querySelector("#reset").addEventListener("click", resetAll);
function resetAll() {
  document.querySelector("#bill").value = "";
  bill = 0;
  document.querySelector("#people").value = "";
  people = 0;
  tipRate = 0;
  tipAmount = 0;
  total = 0;
  document.querySelector("#percent5").classList.remove("active");
  document.querySelector("#percent10").classList.remove("active");
  document.querySelector("#bg-color").classList.remove("active");
  document.querySelector("#percent25").classList.remove("active");
  document.querySelector("#percent50").classList.remove("active");
  document.querySelector("#bg-ct").value = "";
  document.querySelector("#tip-amount").innerHTML = "$" + (0.0).toFixed(2);
  document.querySelector("#total").innerHTML = "$" + (0.0).toFixed(2);
}
