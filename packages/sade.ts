import sade from 'sade';

const program = sade('sade');

program
    .command('order <size>')
    .describe('Order a pizza')
    .option('-p, --pizza-type', 'flavour of pizza')
    .option('--cheese', 'cheese flavor', 'mozzarella')
    .action((args, options) => { // ❌ all parameters typed as any
        console.log({ args });
        console.log({ options });
    });

program.parse(process.argv);

// try sade
// try sade order
// try sade order --help
// try sade order large
// try sade order large --cheese parmesan
// try sade order large --no-cheese
// try sade order large -p meatlovers