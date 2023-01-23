import meow from 'meow';

// Help message automatically includes description from package.json
const cli = meow(`
    Usage
      $ meow <input>

    Options
      --rainbow, -r  Include a rainbow
      --kitten, -k   The name of your kitten (required)

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
            alias: 'r',
        },
        kitten: {
            type: 'string',
            alias: 'k',
            isRequired: true,
        },
    },
});

const input: string[] = cli.input;
const rainbow = cli.flags.rainbow; // 👍 typed as boolean | undefined
const kitten = cli.flags.kitten; // 👍 typed as string

console.log({ input });
console.log({ flags: cli.flags });

// try meow --version
// try meow
// try meow --help
// try meow unicorns --kitten jellybean
// try meow unicorns --kitten jellybean --rainbow