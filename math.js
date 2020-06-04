const numGuess = prompt('guess a number between 1 and 10');
const answer = parseInt(numGuess);
console.log(answer);

const randomAnswer = Math.floor(Math.random(answer));

const main = document.querySelector('main');

main.innerHTML = `your number was ${randomAnswer}`