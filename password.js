const passwordInput = document.getElementById("password");
const strengthFill = document.getElementById("strengthFill");
const strengthText = document.getElementById("strengthText");

passwordInput.addEventListener("input", checkStrength);

function checkStrength() {

  const password = passwordInput.value;
  let score = 0;

  const lengthRule = password.length >= 8;
  const upperRule = /[A-Z]/.test(password);
  const lowerRule = /[a-z]/.test(password);
  const numberRule = /[0-9]/.test(password);
  const specialRule = /[^A-Za-z0-9]/.test(password);

  updateRule("length", lengthRule);
  updateRule("uppercase", upperRule);
  updateRule("lowercase", lowerRule);
  updateRule("number", numberRule);
  updateRule("special", specialRule);

  if (lengthRule) score += 20;
  if (upperRule) score += 20;
  if (lowerRule) score += 20;
  if (numberRule) score += 20;
  if (specialRule) score += 20;

  strengthFill.style.width = score + "%";

  if (score <= 40) {
    strengthFill.style.background = "red";
    strengthText.innerText = `Strength: Weak (${score}%)`;
  }
  else if (score <= 80) {
    strengthFill.style.background = "orange";
    strengthText.innerText = `Strength: Medium (${score}%)`;
  }
  else {
    strengthFill.style.background = "#22c55e";
    strengthText.innerText = `Strength: Strong (${score}%)`;
  }
}

function updateRule(id, condition) {
  const el = document.getElementById(id);
  el.innerText = condition
    ? "✔ " + el.innerText.substring(2)
    : "✖ " + el.innerText.substring(2);
}

function togglePassword() {
  passwordInput.type =
    passwordInput.type === "password" ? "text" : "password";
}

function copyPassword() {
  navigator.clipboard.writeText(passwordInput.value);
  alert("Password copied!");
}

function generatePassword() {

  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

  let password = "";
  for (let i = 0; i < 12; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  passwordInput.value = password;
  checkStrength();
}
