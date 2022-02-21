
class Cell {
  #elements!: number[];
  private STATUS_VALUE = 0;
  private FLAGGED = 4;

  constructor(numbers: number[]) {
    this.elements = numbers;
  }

  set elements(numbers) {
    this.#elements = numbers;
  }

  public get elements(): number[] {
    return this.#elements;
  }

  public isFlagged(): boolean {
    return this.elements[this.STATUS_VALUE] === this.FLAGGED;
  }
}

const gameBoard: Cell[] = [new Cell([1, 2, 3]), new Cell([4, 5, 6])];

const getFlaggedCells = (): Cell[] => {
  const flaggedCells: Cell[] = [];
  for (const cell of gameBoard) {
    if (cell.isFlagged()) flaggedCells.push(cell);
  }
  return flaggedCells;
}

getFlaggedCells().forEach((cell) => console.log(cell.elements));