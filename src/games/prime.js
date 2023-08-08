import runGame from '../index.js';
import getRandomNumInRange from '../randomNumber.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
    return 'yes';
  }
  for (let i = 2; i < Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const generateRound = () => {
  const num = getRandomNumInRange(1, 100);

  const question = `${num}`;
  const answer = isPrime(num);

  return [question, answer];
};

export default () => {
  runGame(description, generateRound);
};
