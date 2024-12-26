# Robot translator (JavaScript)

![kata-2-title-robot-translator](https://github.com/darellanodev/katas-for-practice/blob/main/katas/02-robot-translator/img/title.png?raw=true)

A robot is trying to communicate with you, but its speaking system is broken. You must create a translation system to understand it.

Some letters are changed by numbers:
a => 4
e => 3
i => 1
o => 0

There are other symbols that represent a blank space:
%,$,@

## Example

```js
translator.translate('H3ll0%w0rld') // must return 'Hello world'
```

## Install

`pnpm install`

### Run the tests

- `pnpm test`
- `pnpm test:watch`
- `pnpm test:coverage`

### Run ESLint and Prettier

- `pnpm run lint` to lint all files
- `pnpm run format` to apply formatting to all the files
