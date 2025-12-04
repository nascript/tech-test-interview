const { unique } = require('./3_unique_char');
const { expect } = require('chai');

[
  ['', ''],
  ['a', 'a'],
  ['abaccdeff', 'b'],
  ['aabbcc', ''],
  ['Swiss', 'S'],
  ['alphabet', 'l'],
  ['AaBbCcDd', 'A'],
  ['redivider', 'v'],
  ['levelup', 'v'],
  ['1122334455', ''],
].forEach((k) => {
  expect(unique(k[0])).to.deep.eql(k[1]);
});
