import parser from "yargs-parser";

const args: string[] = process.argv.slice(2);

const parsedArgs = parser(args, {
    string: ['str'],
    boolean: ['bool'],
    alias: {
        'bool': ['b'],
    }
});

const strFlag = parsedArgs.str; // ❌ typed as any

console.log({ parsedArgs });

// try yargs-parser
// try yargs-parser command
// try yargs-parser --str str
// try yargs-parser --bool
// try yargs-parser --bool false
// try yargs-parser --b
// try yargs-parser --unexpected