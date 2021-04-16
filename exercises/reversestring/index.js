// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  if (str.length <= 1) {
    return str
  }

  // Approach 1

  // return str.split('').reverse().join('');

  // Aproach 2 - A bit more memory intensive
  // const strArray = Array.from(str);
  // let i = 0;
  // let j = strArray.length - 1;
  // // console.log(str[0]);
  // // console.log(str.length);

  // while (i < j) {
  //   let temp = strArray[i];
  //   strArray[i] = strArray[j];
  //   strArray[j] = temp;
  //   i++;
  //   j--;
  // };

  // str = strArray.join('')

  // return str;

  // Approach 3 - Would recommend to highlight knowledge to interviewers
  
  // Note - Debugger inside a loop will get triggered multiple times
  // debugger; 

  return str.split('').reduce((rev, char) => char + rev, '');
}

// Need this manual function call to run the debugger
// reverse('gehgfh');

module.exports = reverse;
