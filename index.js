const input = document.getElementById("input");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function convert() {
  if (toFahrenheit.checked) {
    temp = Number(input.value);
    temp = (temp * 9) / 5 + 32;
    result.style.visibility = "visible";
    result.textContent = `${temp} °F`;
  } else if (toCelsius.checked) {
    temp = Number(input.value);
    temp = (temp - 32) * (5 / 9);
    result.style.visibility = "visible";
    result.textContent = `${temp} °C`;
  } else if (input.value === "") {
    result.textContent = "Enter the temperature!";
    result.style.visibility = "visible";
  } else {
    result.textContent = "Choose the convertion!";
    result.style.visibility = "visible";
  }
}
