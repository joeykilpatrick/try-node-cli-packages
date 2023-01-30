import styles from "ansi-styles";

const lines: string[] = [
    `${styles.red.open}This text is red.${styles.red.close}`,
    `${styles.blue.open}This text is blue.${styles.blue.close}`,
    `${styles.bgWhite.open}${styles.black.open}This text is black on a white background.${styles.black.close}${styles.bgWhite.close}`,
    `${styles.underline.open}${styles.green.open}This text is green and underlined.${styles.color.close}${styles.underline.close}`,
    `This is a template string with a ${styles.bold.open}bold${styles.bold.close} word in it.`,
    `${styles.color.ansi(styles.hexToAnsi('#FFA500'))}This text is hex color #FFA500.${styles.color.close}`,
];

lines.forEach((line) => console.log(line));