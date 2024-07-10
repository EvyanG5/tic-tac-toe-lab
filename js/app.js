/*-------------------------------- Constants --------------------------------*/
winningCombos = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]

];
const squareIndex = '<div class="sqr" id="0"></div>'




/*---------------------------- Variables (state) ----------------------------*/
let board = ['', '', '', '', '', '', '', '', ''];
let turn = 'X';
let winner = false;
let tie = false;



/*------------------------ Cached Element References ------------------------*/
const squareEls = [
    document.getElementById('0'),
    document.getElementById('1'),
    document.getElementById('2'),
    document.getElementById('3'),
    document.getElementById('4'),
    document.getElementById('5'),
    document.getElementById('6'),
    document.getElementById('7'),
    document.getElementById('8')
];
const messageEl = document.getElementById('message')
const resetBtnEl = document.getElementById('reset')

/*-------------------------------- Functions --------------------------------*/
function init() {
    board = ['', '', '', '', '', '', '', '', ''];
    turn = 'X';
    winner = false;
    tie = false;
    render();

}
function render() {
    updateBoard()
    updateMessage()
};

function updateBoard() {
    board.forEach((value, i) => {
        squareEls[i].textContent = value;
    });
}
function updateMessage() {
    if (winner === false && tie === false) {
        messageEl.textContent = `its ${turn}'s turn`
    }
    else if (winner === false && tie === true) {
        messageEl.textContent = `its a tie`
    }
    else if (winner === true) {
        messageEl.textContent = `Congrats ${turn} wins`
    }

};
function handleClick(evt) {
    const index = parseInt(evt.target.id)
    board[index] = turn;
    console.log(board);
    checkForWinner();
    checkForTie();
    switchPlayerTurn();
    render();

    //squareEls.forEach((sqr, squareIndex) => {
    //sqr.addEventListener('click', handleClick);
    //placePiece(squareIndex);
    //board[index] === turn;

    //})    
}
function placePiece() { }
console.log(board)
function checkForWinner() {
    winningCombos.forEach(group => {

        var [a, b, c] = group;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            winner = true;
        }
    })
};

function checkForTie() {
    if(winner) return
    if(board.includes('')=== false){
        tie = true
    }

};
function switchPlayerTurn() {
    if (winner === true) {
        return;
    }
    
     turn = turn === 'X' ? 'O' : 'X'
     

}






init();




/*----------------------------- Event Listeners -----------------------------*/

squareEls.forEach(sqr => {
    sqr.addEventListener('click', handleClick)

});
resetBtnEl.addEventListener('click', init)



