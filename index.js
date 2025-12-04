// run `node index.js` in the terminal

console.log(`Test starting with Node.js v${process.versions.node}!`);

try {
  console.log('=== 1 ===');
  require('./src/1_polindrom.test.js');
  console.log('  OK');
} catch (ex) {
  console.log('  Failed:', ex);
}
try {
  console.log('=== 2 ===');
  require('./src/2_summarize_words.test.js');
  console.log('  OK');
} catch (ex) {
  console.log('  Failed:', ex);
}
try {
  console.log('=== 3 ===');
  require('./src/3_unique_char.test.js');
  console.log('  OK');
} catch (ex) {
  console.log('  Failed:', ex);
}
// try {
//   console.log('=== 4 ===');
//   require('./src/_internals/d.js');
//   console.log('  OK');
// } catch (ex) {
//   console.log('  Failed:', ex);
// }
// try {
//   console.log('=== 5 ===');
//   require('./5.js');
//   console.log('  OK');
// } catch (ex) {
//   console.log('  Failed:', ex);
// }
