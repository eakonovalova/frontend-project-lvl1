import { car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';
import sayHello from './cli.js';

const maxRounds = 3;

const makeGame = (describtion, qAndA) => {
  const name = sayHello();
  console.log(describtion);

  for (let i = 0; i < maxRounds; i += 1) {
    const data = qAndA();
    const question = car(data);
    const correctAnswer = cdr(data);
    const userAnswer = readlineSync.question(`Question: ${question} Your answer: `);

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }

    if (i === maxRounds - 1) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default makeGame;
