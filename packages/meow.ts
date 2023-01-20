import meow from 'meow';

// Help message automatically includes description from package.json
const cli = meow(`
    Usage
      $ meow <input>

    Options
      --rainbow, -r  Include a rainbow

    Examples
      $ meow unicorns --rainbow
      🌈 unicorns 🌈
`, {
    importMeta: import.meta,
    autoHelp: true,
    autoVersion: true, // Version comes from package.json
    flags: {
        rainbow: {
            type: 'boolean',
            alias: 'r'
        },
    },
});

const input: string[] = cli.input;
const flags = cli.flags; // 👍 typed as { rainbow: boolean | undefined } & ...

console.log({ input });
console.log({ flags });

// try meow --help
// try meow --version
// try meow unicorns --rainbow