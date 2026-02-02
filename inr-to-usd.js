const rate = 92.0;

function convert() {
  const inr = document.getElementById("inr").value;
  const result = document.getElementById("result");

  if (inr === "") {
    result.innerText = "Please enter an amount.";
    return;
  }

  const usd = inr / rate;
  result.innerText = `₹ ${inr} = $ ${usd.toFixed(2)}`;
}

function resetField() {
  document.getElementById("inr").value = "";
  document.getElementById("result").innerText = "";
}
