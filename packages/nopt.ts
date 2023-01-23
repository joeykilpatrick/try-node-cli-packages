import path from 'node:path';
import nopt from 'nopt';

const parsedArgs = nopt({
    "port" : [Number],
    "file" : path,
    "size" : [ "big", "medium", "small" ],
    "bool" : Boolean,
    "name" : [String, Array],
}, {
    "small": ["--size", "small"],
    "b" : ["--bool"],
}, process.argv, 2);

const port = parsedArgs.port; // ❌ typed as any

console.log({ parsedArgs });

// try nopt
// try nopt --port 40
// try nopt --file ./file.txt
// try nopt --size small
// try nopt --small
// try nopt --bool
// try nopt --name Tim --name Ryan