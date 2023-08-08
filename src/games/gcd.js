import runGame from '../index.js';
import getRandomNumInRange from '../randomNumber.js';

const description = 'Find the greatest common divisor of given numbers.';

const calculateGcd = (number1, number2) => {
  let firstNum = number1;
  let secondNum = number2;
  if (firstNum > secondNum) {
    const num = firstNum;
    firstNum = secondNum;
    secondNum = num;
  }
  while (secondNum !== 0) {
    const remainder = (firstNum % secondNum);
    firstNum = secondNum;
    secondNum = remainder;
  }
  return firstNum;
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
