import prompts from "prompts";

const response = await prompts([
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
            { title: 'mozzarella' },
            { title: 'parmesan' },
            { title: 'blue' },
            { title: 'goat' },
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
                title: name,
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

console.log({ response }); // 👍 typed as prompts.Answers<"quantity" | "cheese" | "toppings" | "name">

const quantity = response.quantity; // ❌ typed as any, could be number or ''