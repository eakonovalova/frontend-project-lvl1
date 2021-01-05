#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 0; i < 3; i += 1) {
  // create num
  const num = Math.floor(Math.random() * 100);
  // check truth
  let truth;
  if (num % 2 === 0) {
    truth = 'yes';
  } else {
    truth = 'no';
  }

  // get answer
  const answer = readlineSync.question(`Question: ${num} `);
  // check answer
  if (answer === truth) {
    console.log('Correct!');
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${truth}'.`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
}
