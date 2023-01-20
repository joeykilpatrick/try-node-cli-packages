import { Command, program } from 'commander';

program
    .command('order <size>')
    .description('Order a pizza')
    .option('-p, --pizza-type <type>', 'flavour of pizza')
    .option('--no-sauce', 'remove sauce')
    .option('--cheese <flavor>', 'cheese flavor', 'mozzarella')
    .option('--no-cheese', 'plain with no cheese')
    .action((_args, _options, command: Command) => { // ❌ all parameters typed as any
        const args: string[] = command.args;
        const options = command.opts(); // ❌ typed as Record<string, any>

        console.log({ args });
        console.log({ options });
    });

program.parse();

// try commander
// try commander order
// try commander help order
// try commander order large --cheese parmesan