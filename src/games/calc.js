// import readlineSync from 'readline-sync';
//
// import getRandom from '../random.js';
//
// const description = 'What is the result of the expression?';
//
// const operations = '+-*';
// const condition = (a, b) => {
//   return { result, }
// };
//
// // const checkAnswer = (usersAnswer, correctAnswer) => {
// //   if (usersAnswer === correctAnswer) {
// //     console.log('Correct!');
// //   } else {
// //     console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
// //     console.log(`Let's try again, ${name}!`);
// //     break;
// //   }
// // };
//
// const calc = () => {
//   console.log(description);
//
//   for (let i = 0; i < maxRounds; i += 1) {
//
//     const num1 = getRandom();
//     const num2 = getRandom();
//
//     const truth = condition(num1, num2);
//
//     // get answer
//     const answer = readlineSync.question(`Question: ${num} `);
//
//     if (answer === truth) {
//       console.log('Correct!');
//     } else {
//       console.log(`'${answer}' is wrong answer ;(. Correct answer was '${truth}'.`);
//       console.log(`Let's try again, ${name}!`);
//       break;
//     }
//
//     if (i === maxRounds - 1) {
//       console.log(`Congratulations, ${name}!`);
//     }
//   }
// };
//
// export default calc;
