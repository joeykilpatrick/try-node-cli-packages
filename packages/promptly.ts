import promptly from 'promptly';

const name = await promptly.prompt('Name: ', {
    validator: (value: string) => {
        if (value.length < 2) {
            throw new Error('Min length of 2');
        }
        return value;
    },
});

const confirmation = await promptly.confirm(`To confirm, your name is '${name}'? `);

if (confirmation) {
    console.log(`Name was confirmed as '${name}'.`);
} else {
    console.log('Was not able to confirm the name.');
}