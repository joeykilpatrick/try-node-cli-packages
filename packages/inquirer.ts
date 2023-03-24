import inquirer from "inquirer";

const response = await inquirer.prompt([ // ❌ typed as any
    {
        name: 'quantity',
        message: 'How many pizzas would you like?',
        type: 'number',
    },
    {
        name: 'cheese',
        message: 'What type of cheese would you like?',
        type: 'list',
        choices: [
            'mozzarella',
            'parmesan',
            'blue',
            'goat',
        ],
        default: 'mozzarella',
    },
    {
        name: 'toppings',
        message: 'What toppings would you like?',
        type: 'checkbox',
        choices: [
            'pepperoni',
            'sausage',
            'chicken',
            'cherry tomatoes',
            'banana peppers',
        ].map((name) => {
            return {
                name: name,
            }
        }),
    },
    {
        name: 'name',
        message: 'What is the name for the order?',
        type: 'input',
    }
]);

console.log({ response });

const quantity = response.quantity; // ❌ typed as any, could be number or NaN