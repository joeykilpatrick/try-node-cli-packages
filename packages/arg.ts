import arg from 'arg';

const args = arg({
    // Types
    '--verbose': arg.COUNT, // Counts the number of times --verbose is passed
    // NOTE :: These are the built-in Boolean, Number, and String constructors
    '--help': Boolean,
    '--port': Number,
    '--name': String,
    '--tag': [String],

    // Aliases
    '-v': '--verbose',
    '-n': '--name', // -n <string>; result is stored in --name
    '--label': '--name' // --label <string> or --label=<string>;
});

console.log({ args });

const port = args["--port"]; // ❌ typed as 'number | undefined' but may be NaN
// NOTE :: There is no way to automatically make an arg required

// try arg
// try arg --help
// try arg --port 40
// try arg --port BAD_NUMBER
// try arg --label label
// try arg -v -v -v
// try arg --unexpected