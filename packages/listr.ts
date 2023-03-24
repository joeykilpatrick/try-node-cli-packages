import Listr from 'listr';

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const tasks = new Listr([
    {
        title: 'Will Succeed',
        task: async () => {
            await wait(2000);
            return;
        }
    },
    {
        title: 'Will Fail',
        task: async () => {
            await wait(2000);
            throw new Error('This is the failure text.')
        }
    }
]);

await tasks.run().catch(() => {});