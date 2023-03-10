"use strict";
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 5, 8],
    [0, 3, 6],
    [0, 4, 8],
    [2, 4, 6],
];
let turn, winner, tie, board;
/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.sqr');
const messageEl = document.getElementById('message');
//should board be an array?
const boardEl = document.querySelector('.board');
const resetBtnEl = document.getElementById('reset');
// const resetBtnEl = document.querySelector<HTMLButtonElement>('#reset')!
/*----------------------------- Event Listeners -----------------------------*/
boardEl.addEventListener('click', handleClick);
resetBtnEl.addEventListener('click', init);
// /*-------------------------------- Functions --------------------------------*/
function init() {
    board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    turn = 1;
    winner = false;
    tie = false;
    render();
}
init();
function render() {
    updateBoard();
    updateMessage();
}
function updateBoard() {
    board.forEach((sqr, idx) => {
        if (sqr === 1) {
            squareEls[idx].textContent = 'X';
        }
        else if (sqr === -1) {
            squareEls[idx].textContent = 'O';
        }
        else {
            squareEls[idx].textContent = '';
        }
    });
}
function updateMessage() {
    if (!winner && !tie) {
        messageEl.textContent = `It's ${turn === 1 ? 'X' : 'O'}'s turn!`;
    }
    else if (!winner && tie) {
        messageEl.textContent = "Cat's game! Meow!!!";
    }
    else {
        messageEl.textContent = `Congratulations! ${turn === 1 ? 'X' : 'O'} wins! `;
    }
}
function handleClick(evt) {
    if (!(evt.target instanceof HTMLElement))
        return;
    const sqIdx = parseInt(evt.target.id.replace('sq', ''));
    if (isNaN(sqIdx) || board[sqIdx] || winner)
        return;
    placePiece(sqIdx);
    checkForTie();
    checkForWinner();
    switchPlayerTurn();
    render();
}
function placePiece(idx) {
    board[idx] = turn;
}
function checkForTie() {
    if (!board.includes(0)) {
        tie = true;
    }
}
function checkForWinner() {
    winningCombos.forEach(function (combo) {
        let sum = 0;
        combo.forEach(function (sqr) {
            sum += board[sqr];
        });
        sum = Math.abs(sum);
        if (sum === 3)
            winner = true;
    });
}
function switchPlayerTurn() {
    if (winner === true)
        return;
    turn *= -1;
}
