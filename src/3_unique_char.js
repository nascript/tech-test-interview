/**
 * Given a string `s`. Find first character appearing exactly once in the string.
 *
 * @param {string} s String to check. Treat uppercase and lowercase as distinct character.
 * @return {string} first character that appeared in `s` only once.
 * If none found, return empty string.
 */
function unique(s) {
  const freq = {};

  // Hitung jumlah kemunculan setiap karakter
  for (const char of s) {
    freq[char] = (freq[char] || 0) + 1;
  }

  // Cari karakter pertama yang unik
  for (const char of s) {
    if (freq[char] === 1) {
      return char;
    }
  }

  return '';
}

console.log(unique("abacabad"))

module.exports = { unique };
