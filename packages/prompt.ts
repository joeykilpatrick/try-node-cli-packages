import prompt from 'prompt';

prompt.start();

prompt.get({
    properties: {
        name: {
            pattern: /^[a-zA-Z\s\-]+$/,
            message: 'Name must be only letters, spaces, or dashes',
            required: true
        },
        password: {
            hidden: true
        }
    }
},  (err, result) => {
    console.log('Command-line input received:');
    console.log('  name: ' + result.name);
    console.log('  password: ' + result.password);
    console.log();
    console.log({ result });
});
