let number = Math.floor(Math.random() * 100) + 1;
let tries = 0;
let history = [];

function checkGuess() {
  const input = document.getElementById("guess");
  const g = Number(input.value);
  const result = document.getElementById("result");
  const historyBox = document.getElementById("history");
  const triesBox = document.getElementById("tries");

  if (!g || g < 1 || g > 100) {
    result.innerText = "Enter a number between 1 and 100.";
    return;
  }

  tries++;
  triesBox.innerText = tries;
  history.push(g);

  if (g === number) {
    result.innerText = `🎉 Correct! You guessed it in ${tries} tries!`;
  } else if (g > number) {
    result.innerText = "⬆️ Too high! Try again.";
  } else {
    result.innerText = "⬇️ Too low! Try again.";
  }

  historyBox.innerText = history.join(", ");
  input.value = "";
  input.focus();
}

function resetGame() {
  number = Math.floor(Math.random() * 100) + 1;
  tries = 0;
  history = [];
  document.getElementById("tries").innerText = "0";
  document.getElementById("history").innerText = "No guesses yet.";
  document.getElementById("result").innerText = "Game reset. Try again!";
  document.getElementById("guess").value = "";
}
