/**
 * Given an array of string that includes only one word.
 * Determine how much occurrence of each words from given array of string.
 *
 * @param {string[]} words Array of word
 * @returns {Record<string, number>} Object record, e.g.
 * ```
 * {
 *   word1: 1,
 *   word2: 2,
 * }
 * ```
 */
function summarize(words) {
  const result = {};

  for (const word of words) {
    if (result[word]) {
      result[word]++;
    } else {
      result[word] = 1;
    }
  }

  return result;
}

console.log(summarize(['apple', 'banana', 'apple']));

module.exports = { summarize };
