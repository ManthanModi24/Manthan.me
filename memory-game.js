const symbols = ["🍎","🍌","🍇","🍓","🍒","🥝","🍍","🍉"];
let cards = [];
let first = null;
let second = null;
let lock = false;
let matchedCount = 0;

const game = document.getElementById("game");
const statusText = document.getElementById("status");

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function createGame() {
  game.innerHTML = "";
  matchedCount = 0;
  first = null;
  second = null;
  lock = false;
  statusText.innerText = "Find all matching pairs!";

  cards = [...symbols, ...symbols];
  shuffle(cards);

  cards.forEach((symbol, index) => {
    const div = document.createElement("div");
    div.className = "card";
    div.dataset.symbol = symbol;
    div.dataset.index = index;
    div.innerText = "❓";
    div.onclick = () => flip(div);
    game.appendChild(div);
  });
}

function flip(card) {
  if (lock) return;
  if (card.classList.contains("matched")) return;
  if (card === first) return;

  card.innerText = card.dataset.symbol;

  if (!first) {
    first = card;
    return;
  }

  second = card;
  lock = true;

  if (first.dataset.symbol === second.dataset.symbol) {
    first.classList.add("matched");
    second.classList.add("matched");
    matchedCount += 2;
    resetTurn();

    if (matchedCount === cards.length) {
      statusText.innerText = "🎉 You won! All pairs matched!";
    }
  } else {
    setTimeout(() => {
      first.innerText = "❓";
      second.innerText = "❓";
      resetTurn();
    }, 700);
  }
}

function resetTurn() {
  [first, second, lock] = [null, null, false];
}

function resetGame() {
  createGame();
}

createGame();
