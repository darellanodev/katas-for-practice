# Robot translator (JavaScript)

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
translator.translate("H3ll0%w0rld"); // must return 'Hello world'
```

## Install

`pnpm install`

### Run the tests

`pnpm test`
`pnpm test:watch`
`pnpm test:coverage`
