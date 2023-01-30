import wrap from 'wrap-ansi';

const sentence: string = "The quick red fox jumped over the lazy brown dog and then ran away with the unicorn.";

console.log("Without wrap:");
console.log(sentence);

console.log();

console.log("With wrap:");
console.log(wrap(sentence, 20));