const test = require('tape')
const vwap = require('../')

test('vwap', t => {
  t.plan(11)
  t.equal(vwap(), 0)
  t.equal(vwap([]), 0)
  t.equal(vwap({}), 0)
  t.equal(vwap(function(){}), 0)
  t.equal(vwap(123), 0)
  t.equal(vwap([2.5, 268], [7.5, 269]), 268.75)
  t.equal(vwap([2.5, 268], [7.5, -10]), 59.5)
  t.equal(vwap([3117300, 0.044150], [1941480, 0.044150], [17903, 0.043834], [6427, 0.043819]).toFixed(5), '0.04415')
  t.equal(vwap([[3117300, 0.044150], [1941480, 0.044150], [17903, 0.043834], [6427, 0.043819]]).toFixed(5), '0.04415')
  t.equal(vwap([[5, 10], [15, 8], [10, 11]]).toFixed(5), '9.33333')
  t.equal(vwap([[5, 10], [13, 8.5], [10, 11]]).toFixed(5), '9.66071')
})

