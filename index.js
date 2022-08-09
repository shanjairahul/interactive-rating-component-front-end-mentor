//DOM
const rateBtn = document.querySelectorAll(".num");
const btnSub = document.querySelector("#sub");
const main = document.querySelector(".main");
const tqMain = document.querySelector(".thankyou");
const span = document.getElementById("x");

//Rating
rateBtn.forEach((rate) => {
  rate.addEventListener("click", getRateNumber);
});

function getRateNumber(event) {
  let rateNum = event.target.innerHTML;
  span.innerHTML = rateNum;
}

//Thank you card
btnSub.addEventListener("click", () => {
  if (span.innerHTML != 0) {
    main.style.display = "none";
    tqMain.style.display = "grid";
  }
});