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
const resetBtnEl = document.querySelector('button');
/*----------------------------- Event Listeners -----------------------------*/
// document.querySelector('.board').addEventListener('click', handleClick)
// resetBtnEl.addEventListener('click', init)
// /*-------------------------------- Functions --------------------------------*/
// function init(): void {
//   board = [0, 0, 0, 0, 0, 0, 0, 0, 0]
//   turn = 1
//   winner = false
//   tie = false
//   console.log(turn)
// }
// init()
// function placePiece(idx) {
//   board[idx] = turn
// }
// function handleClick(evt) {
//   console.log(evt.target.id)
//   const sqIdx = parseInt(evt.target.id.replace('sq', ''))
//   if (isNaN(sqIdx) || board[sqIdx] || winner) return
//   placePiece(sqIdx)
//   checkForTie()
//   checkForWinner()
//   switchPlayerTurn()
//   render()
// }
// function checkForTie() {
//   if (board.includes(null)) return
//   tie = true
// }
// function checkForWinner() {
//   winningCombos.forEach(combo => {
//     if (Math.abs(board[combo[0]] + board[combo[1]] + board[combo[2]]) === 3) {
//       winner = true
//     }
//   })
// }
// function switchPlayerTurn() {
//   if (winner) return
//   turn *= -1
// }
// function render() {
//   updateBoard()
//   updateMessage()
// }
// function updateBoard() {
//   board.forEach((boardVal, idx) => {
//     if (boardVal === 1) {
//       squareEls[idx].textContent = 'X'
//     } else if (boardVal === -1) {
//       squareEls[idx].textContent = 'O'
//     } else {
//       squareEls[idx].textContent = ''
//     }
//   })
// }
// function updateMessage() {
//   if (!winner && !tie) {
//     messageEl.textContent = `It's ${turn === 1 ? 'X' : 'O'}'s turn!`
//   } else if (!winner && tie) {
//     messageEl.textContent = "Cat's game! Meow!!!"
//   } else {
//     messageEl.textContent = `Congratulations! ${turn === 1 ? 'X' : 'O'} wins! `
//   }
// }
