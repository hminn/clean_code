const STATUS_VALUE: number = 0;
const FLAGGED: number = 4;
const gameBoard: number[][] = [[1, 2, 3], [4, 5, 6]];

const getFlaggedCells = (): number[][] => {
  const flaggedCells: number[][] = [];
  for (const cell of gameBoard) {
    if (cell[STATUS_VALUE] === FLAGGED) flaggedCells.push(cell);
  }
  return flaggedCells;
}

console.log(getFlaggedCells());
