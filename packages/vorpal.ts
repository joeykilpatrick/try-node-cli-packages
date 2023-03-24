import chalk from "chalk";
import Vorpal, {Args, CommandInstance} from 'vorpal';

const vorpal = new Vorpal();

let name: string | undefined;

vorpal
    .command('name <name>', `Set the current user's name.`)
    .action(async function (this: CommandInstance, args: Args) {
        name = args['name']; // ❌ typed as any
    });

vorpal
    .command('hello', `Greet the current user.`)
    .action(async function (this: CommandInstance) {
        if (name)
            this.log(`Hello, ${name}!`);
        else {
            this.log(`I don't know who you are! Tell me your name first.`);
        }
    });

vorpal
    .command('echo [words...]')
    .action(async function (this: CommandInstance, args) {
        this.log(args.stdin || args.words.join(' '));
    });

vorpal
    .command('reverse [words...]')
    .action(async function (this: CommandInstance, args) {
        const words: string = args.stdin ? args.stdin[0] : args.words.join(' ');
        this.log(words.split('').reverse().join(''));
    });

vorpal
    .command('color [color] [text...]')
    .action(async function (this: CommandInstance, args) {
        // @ts-ignore Not strongly typed
        const color = chalk[args.color || 'white'];
        this.log(args.stdin ? color(args.stdin) : color(...args['text']));
    });

vorpal
    .delimiter(chalk.blueBright('vorpal $'))
    .show();

// vorpal $ hello
// vorpal $ name TacoCat
// vorpal $ hello
// vorpal $ echo taco cat
// vorpal $ reverse taco cat
// vorpal $ color yellow taco cat
// vorpal $ echo taco cat | reverse | color yellow
