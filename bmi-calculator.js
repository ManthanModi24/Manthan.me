function calculateBMI() {
  const weight = document.getElementById("weight").value;
  const heightCm = document.getElementById("height").value;
  const result = document.getElementById("result");

  if (weight === "" || heightCm === "") {
    result.innerText = "Please enter both weight and height.";
    return;
  }

  const heightM = heightCm / 100;
  const bmi = weight / (heightM * heightM);

  let category = "";
  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 24.9) category = "Normal";
  else if (bmi < 29.9) category = "Overweight";
  else category = "Obese";

  result.innerText = `Your BMI is ${bmi.toFixed(2)} (${category})`;
}

function resetFields() {
  document.getElementById("weight").value = "";
  document.getElementById("height").value = "";
  document.getElementById("result").innerText = "";
}
