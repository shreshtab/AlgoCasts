// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  if (n < 1) {
    return
  }

  for (let i = 1; i <= n; i++) {
    // const consoleString = '';
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz')
    } else if (i % 5 === 0) {
      console.log('buzz')
    } else {
      console.log(i);
    }
  }

  // Alternate Approach
  // for (let i = 1; i <= n; i++) {
  //   let consoleString = '';
  //   if (i % 3 === 0) {
  //     consoleString += 'fizz'
  //   }
  //   if (i % 5 === 0) {
  //     consoleString += 'buzz'
  //   }
  //   console.log(consoleString.length > 0 ? consoleString : i)
  // }

  return
}

module.exports = fizzBuzz;
