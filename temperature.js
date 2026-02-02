function convert() {
  const c = document.getElementById("celsius").value;
  const result = document.getElementById("result");

  if (c === "") {
    result.innerText = "Please enter a value.";
    return;
  }

  const f = (c * 9 / 5) + 32;
  result.innerText = `${c}°C = ${f.toFixed(2)}°F`;
}
