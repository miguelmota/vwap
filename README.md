# vwap

> Calculate the [Volume-Weighted Average Price (VWAP)](https://en.wikipedia.org/wiki/Volume-weighted_average_price)

## Install

```bash
npm install vwap
```

## Usage

```js
const vwap = require('vwap')

// input: [[volume, price], [volume, price], ...]
const p = vwap([[5, 10], [13, 8.5], [10, 11]])

console.log(p) // 9.660714285714286
```

## Test

```bash
npm test

```

## License

MIT

