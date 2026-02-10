function calculate() {

  const total = parseInt(document.getElementById("total").value);
  const attended = parseInt(document.getElementById("attended").value);
  const target = parseInt(document.getElementById("target").value);
  const result = document.getElementById("result");
  const percentText = document.getElementById("percentText");
  const circle = document.querySelector(".progress-circle");

  if (!total || !attended || !target) {
    result.innerHTML = "Please enter all values.";
    return;
  }

  const current = (attended / total) * 100;

  percentText.innerText = current.toFixed(1) + "%";
  circle.style.background =
    `conic-gradient(#22c55e ${current * 3.6}deg, #1e293b 0deg)`;

  if (current < target) {

    let need = 0;
    let newTotal = total;
    let newAttended = attended;

    while ((newAttended / newTotal) * 100 < target) {
      newAttended++;
      newTotal++;
      need++;
    }

    result.innerHTML = `
      📉 Current: ${current.toFixed(2)}% <br>
      🎯 Attend <b>${need}</b> more classes continuously to reach ${target}%.
    `;

  } else {

    let bunk = 0;
    let newTotal = total;
    let newAttended = attended;

    while ((newAttended / (newTotal + 1)) * 100 >= target) {
      newTotal++;
      bunk++;
    }

    result.innerHTML = `
      📈 Current: ${current.toFixed(2)}% <br>
      😎 You can bunk <b>${bunk}</b> classes and still stay above ${target}%.
    `;
  }
}
