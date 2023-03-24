import enquirer from "enquirer";

const response = await enquirer.prompt([ // typed as object
    {
        name: 'quantity',
        message: 'How many pizzas would you like?',
        type: 'numeral',
    },
    {
        name: 'cheese',
        message: 'What type of cheese would you like?',
        type: 'list',
        choices: [
            { name: 'mozzarella' },
            { name: 'parmesan' },
            { name: 'blue' },
            { name: 'goat' },
        ],
        initial: 'mozzarella',
    },
    {
        name: 'toppings',
        message: 'What toppings would you like?',
        type: 'multiselect',
        choices: [
            'pepperoni',
            'sausage',
            'chicken',
            'cherry tomatoes',
            'banana peppers',
        ].map((name) => {
            return {
                name: name,
                value: name,
            }
        }),
    },
    {
        name: 'name',
        message: 'What is the name for the order?',
        type: 'text',
    }
]);

console.log({ response });

// @ts-ignore
const quantity = response.quantity; // ❌❌ TS Error, result is typed as any, could be number or ''