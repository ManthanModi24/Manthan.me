const subjectsDiv = document.getElementById("subjects");

function addSubject() {
  const div = document.createElement("div");
  div.className = "subject";

  div.innerHTML = `
    <input type="number" placeholder="Credits" min="1">
    <select>
      <option value="10">O (10)</option>
      <option value="9">A+ (9)</option>
      <option value="8">A (8)</option>
      <option value="7">B+ (7)</option>
      <option value="6">B (6)</option>
      <option value="5">C (5)</option>
      <option value="4">D (4)</option>
      <option value="0">F (0)</option>
    </select>
  `;

  subjectsDiv.appendChild(div);
}

function removeSubject() {
  if (subjectsDiv.children.length > 1) {
    subjectsDiv.removeChild(subjectsDiv.lastChild);
  }
}

function calculateSGPA() {

  const rows = document.querySelectorAll(".subject");
  let totalCredits = 0;
  let totalPoints = 0;

  rows.forEach(row => {
    const credits = parseFloat(row.children[0].value);
    const grade = parseFloat(row.children[1].value);

    if (!credits) return;

    totalCredits += credits;
    totalPoints += credits * grade;
  });

  if (totalCredits === 0) return;

  const sgpa = totalPoints / totalCredits;

  document.getElementById("sgpaValue").innerText = sgpa.toFixed(2);
  document.getElementById("totalCredits").innerText = totalCredits;
  document.getElementById("totalPoints").innerText = totalPoints.toFixed(2);

  const circle = document.querySelector(".circle");
  const degree = (sgpa / 10) * 360;
  circle.style.background =
    `conic-gradient(#3b82f6 ${degree}deg, #1e293b 0deg)`;
}

addSubject();
addSubject();
addSubject();
