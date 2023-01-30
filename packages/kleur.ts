import kleur from "kleur";

const lines: string[] = [
    kleur.red('This text is red.'),
    kleur.blue('This text is blue.'),
    kleur.bgWhite().black('This text is black on a white background.'),
    kleur.underline().green('This text is green and underlined.'),
    `This is a template string with a ${kleur.bold('bold')} word in it.`,
    // Colors provided as hex are not supported
];

lines.forEach((line) => console.log(line));