import runGame from '../index.js';
import getRandomNumInRange from '../randomNumber.js';

const description = 'What is the result of the expression?';

const getRandomOperation = () => {
  const operations = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operations.length);
  return operations[randomIndex];
};

const calculateExpression = (number1, number2, operation) => {
  switch (operation) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unexpected operator '${operation}'`);
  }
};

const generateRound = () => {
  const number1 = getRandomNumInRange(10, 100);
  const number2 = getRandomNumInRange(10, 100);
  const operation = getRandomOperation();

  const question = `${number1}${operation}${number2}`;
  const answer = calculateExpression(number1, number2, operation);
  return [question, answer];
};

export default () => {
  runGame(description, generateRound);
};
