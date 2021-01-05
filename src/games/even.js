import readlineSync from 'readline-sync';
import sayHello from '../cli.js';
import getRandom from '../random.js';

const name = sayHello();
const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const maxRounds = 3;
const condition = (num) => ((num % 2 === 0) ? 'yes' : 'no');
// const checkAnswer = (usersAnswer, correctAnswer) => {
//   if (usersAnswer === correctAnswer) {
//     console.log('Correct!');
//   } else {
//     console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
//     console.log(`Let's try again, ${name}!`);
//     break;
//   }
// };

const even = () => {
  console.log(description);

  for (let i = 0; i < maxRounds; i += 1) {

    const num = getRandom();

    const truth = condition(num);

    // get answer
    const answer = readlineSync.question(`Question: ${num} `);

    if (answer === truth) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${truth}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }

    if (i === maxRounds - 1) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default even;
