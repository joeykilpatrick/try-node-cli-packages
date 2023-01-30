import ora from 'ora';

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Built-in spinners can be seen at: https://github.com/sindresorhus/cli-spinners
// Custom spinners can also be created and specified

const kittenSpinner = ora({ spinner: "dots2" }).start('Looking for kittens');
await wait(1000);
kittenSpinner.color = 'green';
kittenSpinner.text = 'Found 1 kitten';
await wait(1000);
kittenSpinner.text = 'Found 2 kittens';
await wait(1000);
kittenSpinner.succeed('Found a total of 2 kittens');

await wait(1000);

const unicornSpinner = ora({ spinner: 'triangle' }).start('Looking for unicorns');
await wait(1000);
unicornSpinner.text = 'Looking high';
await wait(1000);
unicornSpinner.text = 'Looking low';
await wait(1000);
unicornSpinner.fail("Couldn't find any unicorns.");