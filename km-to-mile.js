function convert() {
  const km = document.getElementById("km").value;
  const result = document.getElementById("result");

  if (km === "") {
    result.innerText = "Please enter a value.";
    return;
  }

  const miles = km * 0.621371;
  result.innerText = `${km} KM = ${miles.toFixed(3)} Miles`;
}

function resetField() {
  document.getElementById("km").value = "";
  document.getElementById("result").innerText = "";
}
