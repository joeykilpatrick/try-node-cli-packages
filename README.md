## try-node-cli-packages

[![npm](https://img.shields.io/npm/v/try-node-cli-packages)](https://www.npmjs.com/package/try-node-cli-packages)

A tool to demonstrate and test popular Node.js packages for CLI application development. Companion blog post [here](https://blog.kilpatrick.cloud/posts/node-cli-app-packages/).

### Usage

Install globally,

```shell
$ npm install --location=global try-node-cli-packages
```

and then use the `try` command to display and run sample code for any supported package.

```shell
$ try commander
$ try meow
$ try chalk
```

To run but not display the sample code, use the `--nocode` flag.

```shell
$ try --nocode commander
```

### Development

To run this package from source, clone this repo with
```shell
$ git clone https://github.com/joeykilpatrick/try-node-cli-packages.git
$ cd try-node-cli-packages
```
Install dependencies,
```shell
$ npm install
```
Create a symbolic link to your clone,
```shell
$ npm link
```
Compile,
```shell
$ npm run compile
```
And then run your code with
```shell
$ try <package>
```

For convenience, the `watch-compile` npm script is available and will watch the source files and recompile on any changes.

```shell
$ npm run watch-compile
```

