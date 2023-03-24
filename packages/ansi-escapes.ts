import escapes from 'ansi-escapes';

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

process.stdout.write("Writing a line, then erasing it.")
await wait(2000);
process.stdout.write(escapes.eraseLine + escapes.cursorLeft);
await wait(1000);

console.log()
console.log('Writing this line first.');
await wait(1000);
process.stdout.write(escapes.cursorUp(2));
process.stdout.write('Writing this line second.');
process.stdout.write(escapes.cursorDown(2));
await wait(1000);

console.log()

console.log(`Listen for a beep.`);
await wait(1000);
console.log(`Beep. ${escapes.beep}`);
