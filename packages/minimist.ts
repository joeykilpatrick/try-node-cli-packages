import minimist from 'minimist';

const args: string[] = process.argv.slice(2);

const parsedArgs = minimist(args, {
    string: ['str'],
    boolean: ['bool'],
    alias: {
        'bool': ['b'],
    }
});

const strFlag = parsedArgs.str; // ❌ typed as any

console.log({ parsedArgs });

// try minimist
// try minimist command
// try minimist --str str
// try minimist --bool
// try minimist --bool false
// try minimist --b
// try minimist --unexpected