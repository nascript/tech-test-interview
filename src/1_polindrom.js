/**
 * A palindrome is a sequence that reads identically forward and
 * backward after normalization.
 *
 * Given a string `s`, determine whether it becomes a palindrome
 * after converting all letters to lowercase and removing all
 * non-alphanumeric characters.
 *
 * @param {string} s The string to check whether it's a palindrome
 * or not
 * @returns {boolean}
 */
function isPalindrome(s) {
  const clean = s.toLowerCase().replace(/[^a-z0-9]/g, ''); // normalisasi
  const reversed = clean.split('').reverse().join('');
  return clean === reversed;
}

console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
console.log(isPalindrome('Hello')); // false

module.exports = { isPalindrome };
