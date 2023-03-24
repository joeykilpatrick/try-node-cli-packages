import { readFile, stat } from "node:fs/promises";
import { URL } from "node:url";
import { emphasize } from "emphasize";
import meow from 'meow';
import chalk from "chalk";
import boxen from 'boxen';

const cli = meow(`
    Usage
      $ try <package>
      
    Each package has additional example commands as code comments 

    Options
      --nocode   Don't print example code

    Examples
      $ try commander
      $ try meow
      $ try chalk --nocode
`, {
    importMeta: import.meta,
    flags: {
        "nocode": {
            type: "boolean",
        }
    }
});

const [ npmPackage ] = cli.input;
const { nocode: noCodeFlag } = cli.flags;
process.argv.splice(1, 1); // Remove 'try' from args so that other CLI libraries don't see it
process.argv = process.argv.filter((arg) => arg !== '--nocode'); // Remove 'nocode' flags so they aren't passed on

if (!npmPackage) {
    throw cli.showHelp(1);
}

const sourceFileUrl: URL = await (async () => {
    const doesFileExist = async (url: URL): Promise<boolean> => !!(await stat(url).catch(() => null));
    const printError = (message: string) => console.error(chalk.red(message));

    // Check if implementation exists for this package
    for await (const extension of ['ts', 'tsx']) {
        const url = new URL(`./packages/${npmPackage}.${extension}`, import.meta.url);
        if (await doesFileExist(url)) {
            return url;
        }
    }

    printError(`Did not find package '${chalk.white(npmPackage)}' for this tool.`);

    const issuesUrl = typeof cli.pkg.bugs === 'object' ? cli.pkg.bugs.url : cli.pkg.bugs;

    printError(`If you think it should be added, open an issue here: ${chalk.underline(chalk.blue(issuesUrl))}`);

    process.exit(1);
})();

// Print the source code with syntax highlighting
if (!noCodeFlag) {
    const sourceCode = await readFile(sourceFileUrl);
    const emphasized = emphasize.highlight('typescript', sourceCode.toString()).value;
    console.log(chalk.bgBlack(boxen(emphasized, {padding: 1})));
    console.log()
}

// Run the implementation
const commandString = process.argv.slice(1).join(' ');
console.log('Running command:')
console.log(`${chalk.whiteBright('$')} ${chalk.green(commandString)}`)
console.log()
import(`./packages/${npmPackage}.js`);
