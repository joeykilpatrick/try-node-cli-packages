import readlineSync from 'readline-sync';

const name = readlineSync.question('May I have your name? ');
console.log('Hi ' + name + '!');

const favFood = readlineSync.question('What is your favorite food? ', {
    hideEchoBack: true,
});

console.log('Oh, ' + name + ' loves ' + favFood + '!');