const text = document.getElementById("text");
const tofahrenheit = document.getElementById("tofahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function convert(){
  if(tofahrenheit.checked){
    temp = Number(text.value);
    temp = temp * 9 / 5 + 32;
    result.textContent = temp.toFixed(1) + "°F";
  }
  else if (toCelsius.checked) {
    temp = Number(text.value);
    temp = (temp - 32) * (5/9) ;
    result.textContent = temp.toFixed(1) + "°C";
  }
  else{
    result.textContent = "Please a select a unit";
  }
}