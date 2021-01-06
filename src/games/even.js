import { cons } from '@hexlet/pairs';
import getRandom from '../helpers/random.js';
import makeGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const condition = (num) => ((num % 2 === 0) ? 'yes' : 'no');

const qAndA = () => {
  const task = getRandom();
  const answer = condition(task);
  return cons(task, answer);
};

export default () => makeGame(description, qAndA);
