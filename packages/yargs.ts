import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const argsWithoutBin: string[] = hideBin(process.argv);

yargs(argsWithoutBin)
    .command('plunder', 'attack the nearest ships', (yargs) => {
        return yargs
            .option('ships', {
                describe: 'number of ships you have',
                type: "number",
                demandOption: true,
            })
            .option('distance', {
                describe: 'the distance to the enemy ships',
                type: "number",
                default: 0,
            });
    }, (args) => {

        console.log({ args });

        // ❌ args.ships typed as number, but may be NaN
        if (args.ships > 3 && args.distance < 53.5) {
            console.log('Plunder more riffiwobbles!');
        } else {
            console.log('Retreat from the xupptumblers!');
        }

    })
    .parse();

// try yargs
// try yargs --help
// try yargs plunder
// try yargs plunder --ships 4
// try yargs plunder --ships 4 --distance 80
// try yargs plunder --ships 'not-number' --distance 80