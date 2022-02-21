const printGuessStatistics = (candidate: string, count: number): void => {
  let number: string;
  let verb: string;
  let pluralModifier: string;

  if (count === 0) {
    number = "no";
    verb = "are";
    pluralModifier = "s";
  } else if (count === 1) {
    number = "1";
    verb = "is";
    pluralModifier = "";
  } else {
    number = count.toString();
    verb = "are";
    pluralModifier = "s";
  }
  const guessMessage: string = `There ${verb} ${number} ${candidate}${pluralModifier}`;
  return console.log(guessMessage);
}

printGuessStatistics('apple', 5);