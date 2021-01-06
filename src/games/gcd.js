import { cons } from '@hexlet/pairs';
import getRandom from '../helpers/random.js';
import makeGame from '../index.js';
import findGcd from '../helpers/findGcd.js';

const description = 'Find the greatest common divisor of given numbers.';
const condition = (num1, num2) => findGcd(num1, num2);

const qAndA = () => {
  const num1 = getRandom();
  const num2 = getRandom();
  const task = `${num1} ${num2}`;
  const answer = condition(num1, num2);
  return cons(task, String(answer));
};

export default () => makeGame(description, qAndA);
