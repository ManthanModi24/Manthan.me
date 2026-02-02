let board = ["", "", "", "", "", "", "", "", ""];
let current = "X";
let gameOver = false;

const statusText = document.getElementById("status");
const cells = document.querySelectorAll(".cell");

const wins = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
];

function play(i){
  if (board[i] !== "" || gameOver) return;

  board[i] = current;
  cells[i].innerText = current;

  if (checkWin()) {
    statusText.innerText = "🎉 Winner: " + current;
    gameOver = true;
    return;
  }

  if (!board.includes("")) {
    statusText.innerText = "😐 It's a Draw!";
    gameOver = true;
    return;
  }

  current = current === "X" ? "O" : "X";
  statusText.innerText = "Turn: " + current;
}

function checkWin(){
  return wins.some(pattern => {
    const [a,b,c] = pattern;
    return board[a] && board[a] === board[b] && board[a] === board[c];
  });
}

function resetGame(){
  board = ["", "", "", "", "", "", "", "", ""];
  current = "X";
  gameOver = false;
  statusText.innerText = "Turn: X";
  cells.forEach(c => c.innerText = "");
}
