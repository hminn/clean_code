class GuessStatisticsMessage {
  private number?: string;
  private verb?: string;
  private pluralModifier?: string;

  public make(candidate: string, count: number): string {
    this.createPluralDependentMessageParts(count);
    return `There ${this.verb} ${this.number} ${candidate}${this.pluralModifier}`;
  }

  private createPluralDependentMessageParts(count: number): void {
    if (count === 0) {
      this.thereAreNoLetters();

    } else if (count === 1) {
      this.thereIsOneLetter();

    } else {
      this.thereAreManyLetters(count);
    }
  }

  private thereAreNoLetters() {
    this.number = "no";
    this.verb = "are";
    this.pluralModifier = "s";
  }

  private thereIsOneLetter() {
    this.number = "1";
    this.verb = "is";
    this.pluralModifier = "";
  }

  private thereAreManyLetters(count: number) {
    this.number = count.toString();
    this.verb = "are";
    this.pluralModifier = "s";
  }
}

console.log((new GuessStatisticsMessage()).make('apple', 4));