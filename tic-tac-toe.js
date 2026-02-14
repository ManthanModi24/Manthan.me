const boardElement = document.getElementById("board");
const statusText = document.getElementById("status");

let board = Array(9).fill("");
let currentPlayer = "X";
let gameActive = true;
let mode = "ai"; // Default mode = AI

function setMode(selectedMode) {
  mode = selectedMode;

  document.getElementById("pvpBtn").classList.remove("active");
  document.getElementById("aiBtn").classList.remove("active");

  if (selectedMode === "pvp") {
    document.getElementById("pvpBtn").classList.add("active");
  } else {
    document.getElementById("aiBtn").classList.add("active");
  }

  restartGame();
}

function createBoard() {
  boardElement.innerHTML = "";

  board.forEach((cell, index) => {
    const cellDiv = document.createElement("div");
    cellDiv.classList.add("cell");
    cellDiv.innerText = cell;
    cellDiv.addEventListener("click", () => handleMove(index));
    boardElement.appendChild(cellDiv);
  });
}

function handleMove(index) {
  if (!gameActive || board[index] !== "") return;

  board[index] = currentPlayer;
  createBoard();
  checkWinner();

  if (mode === "ai" && currentPlayer === "O" && gameActive) {
    setTimeout(aiMove, 300);
  }
}

function aiMove() {
  let bestScore = -Infinity;
  let move;

  for (let i = 0; i < 9; i++) {
    if (board[i] === "") {
      board[i] = "O";
      let score = minimax(board, false);
      board[i] = "";

      if (score > bestScore) {
        bestScore = score;
        move = i;
      }
    }
  }

  board[move] = "O";
  createBoard();
  checkWinner();
}

function minimax(newBoard, isMaximizing) {
  const winner = getWinner(newBoard);

  if (winner === "O") return 1;
  if (winner === "X") return -1;
  if (!newBoard.includes("")) return 0;

  if (isMaximizing) {
    let bestScore = -Infinity;

    for (let i = 0; i < 9; i++) {
      if (newBoard[i] === "") {
        newBoard[i] = "O";
        let score = minimax(newBoard, false);
        newBoard[i] = "";
        bestScore = Math.max(score, bestScore);
      }
    }

    return bestScore;
  } else {
    let bestScore = Infinity;

    for (let i = 0; i < 9; i++) {
      if (newBoard[i] === "") {
        newBoard[i] = "X";
        let score = minimax(newBoard, true);
        newBoard[i] = "";
        bestScore = Math.min(score, bestScore);
      }
    }

    return bestScore;
  }
}

function checkWinner() {
  const winPatterns = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];

  for (let pattern of winPatterns) {
    const [a,b,c] = pattern;

    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      highlightWin(pattern);
      statusText.innerText = `Player ${board[a]} Wins!`;
      gameActive = false;
      return;
    }
  }

  if (!board.includes("")) {
 statusText.innerText = "It's a Draw! Restarting...";
  gameActive = false;

  setTimeout(() => {
    restartGame();
  }, 1500); 

  return;
}
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  statusText.innerText = `Player ${currentPlayer} Turn`;
}

function highlightWin(pattern) {
  const cells = document.querySelectorAll(".cell");
  pattern.forEach(i => cells[i].classList.add("win"));
}

function getWinner(b) {
  const patterns = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];

  for (let p of patterns) {
    const [a,b1,c] = p;
    if (b[a] && b[a] === b[b1] && b[a] === b[c]) {
      return b[a];
    }
  }

  return null;
}

function restartGame() {
  board = Array(9).fill("");
  currentPlayer = "X";
  gameActive = true;
  statusText.innerText = "Player X Turn";
  createBoard();
}

setMode("ai"); // AI selected by default