import { cons } from '@hexlet/pairs';
import getRandom from '../helpers/random.js';
import isPrime from '../helpers/isPrime.js';
import makeGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const qAndA = () => {
  const num = getRandom();
  const task = num;
  const answer = isPrime(num);
  return cons(task, String(answer));
};

export default () => makeGame(description, qAndA);
