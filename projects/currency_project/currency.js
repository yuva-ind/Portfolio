let api = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;
const dropdowns = document.querySelectorAll(".dropdowns select");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");


for (let select of dropdowns) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
}
select.addEventListener("change", (evt) => {
  updateFlag(evt.target);
});
};


let convertCurrency = () => {
  //Create References
  const amount = document.querySelector("#amount").value;
  const fromCurrency = fromCurr.value;
  const toCurrency = toCurr.value;

  //If amount input field is not empty
  if (amount.length != 0) {
    fetch(api)
      .then((resp) => resp.json())
      .then((data) => {
        let fromExchangeRate = data.conversion_rates[fromCurrency];
        let toExchangeRate = data.conversion_rates[toCurrency];
        const convertedAmount = (amount / fromExchangeRate) * toExchangeRate;
        result.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(
          2
        )} ${toCurrency}`;
        console.log(amount)
        console.log(toCurrency)
      });
  } else {
    alert("Please fill in the amount");
  }
};

const updateFlag = (element) => {
  let currCode = element.value;
  console.log(currCode)
  let countryCode = countryList[currCode];
  console.log(countryCode)
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};


document.querySelector("#convert-button").addEventListener("click", convertCurrency);
window.addEventListener("load", convertCurrency);
