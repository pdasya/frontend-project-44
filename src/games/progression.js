import runGame from '../index.js';
import getRandomNumInRange from '../randomNumber.js';

const description = 'What number is missing in the progression?';

const createProgression = (firstNum, step, progressionLength) => {
  const progression = [firstNum];

  for (let i = 1; i < progressionLength; i += 1) {
    progression[i] = progression[i - 1] + step;
  }

  return progression;
};

const generateRound = () => {
  const firstNum = getRandomNumInRange(1, 100);
  const step = getRandomNumInRange(1, 10);
  const progressionLength = getRandomNumInRange(5, 10);
  const missingIndex = getRandomNumInRange(0, progressionLength - 1);

  const progression = createProgression(firstNum, step, progressionLength);
  const answer = progression[missingIndex];
  progression[missingIndex] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

export default () => {
  runGame(description, generateRound);
};
