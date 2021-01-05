import { cons } from '@hexlet/pairs';
import getRandom from '../random.js';
import makeGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const condition = (num) => ((num % 2 === 0) ? 'yes' : 'no');

const qAndA = () => {
  const num = getRandom();
  const truth = condition(num);
  return cons(num, truth);
};

export default () => makeGame(description, qAndA);
