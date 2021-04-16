// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {

  if (str.length <= 1) {
    return true;
  }

  // Approach 1 = Two pointers
  // let i = 0;
  // let j = str.length - 1;

  // while (i < j) {
  //   if (str[i] !== str[j]) {
  //     return false
  //   }
  //   i++;
  //   j--;
  // }

  // return true;

  // Approach 2 - Compare with reversed string
  // const reversed = str.split('').reverse().join('');

  // return str === reversed

  // Approach 3 - Using Array.every()

  return str.split('').every((val, i) => val === str[str.length - (1 + i)])

}

module.exports = palindrome;
