import runGame from '../index.js';
import getRandomNumInRange from '../randomNumber.js';

const description = 'Find the greatest common divisor of given numbers.';

const calculateGcd = (number1, number2) => {
  let a = number1;
  let b = number2;
  if (a > b) {
    const num = a;
    a = b;
    b = num;
  }
  while (b !== 0) {
    const remainder = (a % b);
    a = b;
    b = remainder;
  }
  return a;
};

const generateRound = () => {
  const number1 = getRandomNumInRange(1, 100);
  const number2 = getRandomNumInRange(1, 100);
  const question = `${number1} ${number2}`;
  const answer = calculateGcd(number1, number2);
  return [question, answer];
};

export default () => {
  runGame(description, generateRound);
};
