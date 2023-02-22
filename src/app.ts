const winningCombos: number[][]=[
  [0, 1, 2],
  [3, 4, 5], 
  [6, 7, 8], 
  [1, 4, 7],
  [2, 5, 8],
  [0, 3, 6],
  [0, 4, 8],
  [2, 4, 6],
]

let turn: number, winner: boolean, tie: boolean, board: (number)[]

/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll<HTMLDivElement>('.sqr')
//get element by ID use "as"
const messageEl = document.getElementById('message')! as HTMLHeadingElement
//should board be an array?
// const boardEl = document.querySelector('.board')! as HTMLElement
const boardEl = document.querySelector<HTMLDivElement>('.board')! 
const resetBtnEl = document.getElementById('reset') as HTMLButtonElement
// const resetBtnEl = document.querySelector<HTMLButtonElement>('#reset')!

/*----------------------------- Event Listeners -----------------------------*/

boardEl.addEventListener('click', handleClick)
resetBtnEl.addEventListener('click', init)

// /*-------------------------------- Functions --------------------------------*/

function init(): void {
  board = [0, 0, 0, 0, 0, 0, 0, 0, 0]!
  turn = 1
  winner = false
  tie = false
  render()
}

init()

function render(): void {
  updateBoard()
  updateMessage()
}

function updateBoard(): void {
  board.forEach((sqr, idx) => {
    if (sqr === 1) {
      squareEls[idx].textContent = 'X'
    } else if (sqr === -1) {
      squareEls[idx].textContent = 'O'
    } else {
      squareEls[idx].textContent = ''
    }
  })
}
function updateMessage(): void {
  if (!winner && !tie) {
    messageEl.textContent = `It's ${turn === 1 ? 'X' : 'O'}'s turn!`
  } else if (!winner && tie) {
    messageEl.textContent = "Cat's game! Meow!!!"
  } else {
    messageEl.textContent = `Congratulations! ${turn === 1 ? 'X' : 'O'} wins! `
  }
}

function handleClick(evt: MouseEvent): void {
  if(!(evt.target instanceof HTMLElement)) return
  const sqIdx = parseInt(evt.target.id.replace('sq', ''))
  
  if (isNaN(sqIdx) || board[sqIdx] || winner) return
  placePiece(sqIdx)
  checkForTie()
  checkForWinner()
  switchPlayerTurn()
  render()
}

function placePiece(idx: number): void {
  board[idx] = turn
}

function checkForTie(): void {
  if (!board.includes(0)){
    tie = true
  }
}

function checkForWinner(): void {
  winningCombos.forEach(function(combo: number[]): void{
    let sum = 0
    combo.forEach(function(sqr:number):void{
      sum += board[sqr]
    })
    sum = Math.abs(sum)
    if (sum === 3) winner = true
    
  })
}

function switchPlayerTurn(): void {
  if (winner === true) return
  turn *= -1
}



