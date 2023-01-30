import boxen from 'boxen';

const lines: string[] = [
    boxen('This text is boxed in.'),
    boxen('This text has multiple lines.\nSecond line.\nThird line.'),
    boxen('This text has a double border.', { borderStyle: 'double' }),
    boxen('This text has a classic border.', { borderStyle: 'classic' }),
    boxen('This text has a title.', { title: 'TITLE' }),
    boxen('This text has 1 line of padding.', { padding: 1 }),
];

lines.forEach((line) => console.log(line));