import { cons } from '@hexlet/pairs';
import getRandom from '../random.js';
import makeGame from '../index.js';

const description = 'What is the result of the expression?';

const operations = '+-*';
const max = 5;
const condition = (num1, num2, task) => {
  if (task === '+') {
    return num1 + num2;
  } if (task === '-') {
    return num1 - num2;
  } if (task === '*') {
    return num1 * num2;
  }
};

const qAndA = () => {
  const num1 = getRandom(1, max);
  const num2 = getRandom(1, max);
  const indexForChose = getRandom(0, operations.length - 1);
  const chosedOperation = operations.substr(indexForChose, 1);
  const task = `${num1} ${chosedOperation} ${num2} = ?`;
  // после вычислений ответ надо привести к строке, иначе проверка ответа ложно падает
  const answer = String(condition(num1, num2, chosedOperation));
  return cons(task, answer);
};

export default () => makeGame(description, qAndA);
