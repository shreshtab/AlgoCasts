// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charCounter = {};

  // Let vs const for the val doesn't change the result
  // for (let val of str) {
  //   if (charCounter[val] > 0) {
  //     charCounter[val]++
  //   } else {
  //     charCounter[val] = 1;
  //   }
  // }

  // The above can be condensed to 
  for (let val of str) {
    charCounter[val] = charCounter[val] + 1 || 1;
  }
  

  let maxChar = '';
  let max = 0;

  // for (const [key, value] of Object.entries(charCounter)) {
  //   if (value > max) {
  //     maxChar = key;
  //     max = value
  //   }
  // }

  // Alternate Syntax (Same as above)  
  for (let char in charCounter) {
    if (charCounter[char] > max) {
      maxChar = char;
      max = charCounter[char] 
    }
  }

  return maxChar;
}

module.exports = maxChar;
