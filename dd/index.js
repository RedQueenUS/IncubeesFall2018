const {printHorizontalBar} = require('../utils');

const NAME = "Dan DuLeone";
const FACT = `In Node.js...\n\n> console.log("typeof NaN:", typeof NaN);\ntypeof NaN: number\n`;

const reportIn = (fact) => {
  printHorizontalBar();
  console.log(wasHere());
  console.log(fact);
  printHorizontalBar();
}

const wasHere = () => {
  return `${NAME} was here.\n`;
}

const funFact = () => {
  const prompt = "Fun fact:";
  return `${prompt}\n${FACT}`;
}

module.exports = {
  reportIn,
  funFact
}