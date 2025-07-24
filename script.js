
const board = document.getElementById("board");
const status = document.getElementById("status");

let cells = [];
let currentPlayer = "X";
let gameActive = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

for(let i = 0; i<9; i++){
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.addEventListener("click", () => {
        handleClick(i);
    })
    board.appendChild(cell);
    cells.push(cell);
}

function handleClick(index){
    if(!gameActive || cells[index].textContent !== ""){
        return;
    
    }
    cells[index].textContent = currentPlayer;


if(checkWin()){
    status.textContent = `Player ${currentPlayer} wins!`;
    gameActive = false;
    return;
}

if(cells.every(cell => cell.textContent !== "")){
    status.textContent = "It's a draw";
    gameActive = false;
    return;

}

currentPlayer = currentPlayer === "X" ? "Y" : "X";
status.textContent = `Player ${currentPlayer}'s turn`;
}

function checkWin(){
    return winPatterns.some(pattern => {
        return pattern.every(index => cells[index].textContent === currentPlayer);
    })
}

function resetGame(){
    cells.forEach(cell => (cell.textContent = ""));
    currentPlayer = "X";
    gameActive = true;
    status.textContent = `Player ${currentPlayer}'s turn`;
}