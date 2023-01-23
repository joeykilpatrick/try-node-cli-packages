import mri from 'mri';

const args: string[] = process.argv.slice(2);

const parsedArgs = mri(args, {
    string: ['str'],
    boolean: ['bool'],
    alias: {
        'bool': ['b'],
    }
});

const strFlag = parsedArgs.str; // ❌ typed as any

console.log({ parsedArgs });

// try mri
// try mri command
// try mri --str str
// try mri --bool
// try mri --bool false
// try mri --b
// try mri --unexpected