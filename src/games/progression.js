import { cons } from '@hexlet/pairs';
import getRandom from '../helpers/random.js';
import makeGame from '../index.js';
import createProgression from '../helpers/createProgression.js';

const description = 'Find the greatest common divisor of given numbers.';
const condition = (progression, i) => {
  // eslint-disable-next-line no-param-reassign
  progression[i] = '.';
  return progression;
};

const qAndA = () => {
  const startProgression = getRandom(1, 5);
  const progressionStep = getRandom(1, 3);
  const endProgression = getRandom(startProgression + 5, startProgression + 8);
  const progression = createProgression(startProgression, progressionStep, endProgression);
  const i = getRandom(0, progression.length - 1);
  const answer = progression[i];
  const maskedProgression = condition(progression, i);
  const task = maskedProgression.join(' ');
  return cons(task, String(answer));
};

export default () => makeGame(description, qAndA);
