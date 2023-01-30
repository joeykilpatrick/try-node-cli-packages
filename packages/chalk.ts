import chalk from "chalk";

const lines: string[] = [
    chalk.red('This text is red.'),
    chalk.blue('This text is blue.'),
    chalk.bgWhite.black('This text is black on a white background.'),
    chalk.underline.green('This text is green and underlined.'),
    `This is a template string with a ${chalk.bold('bold')} word in it.`,
    chalk.hex('#FFA500')('This text is hex color #FFA500.'),
];

lines.forEach((line) => console.log(line));