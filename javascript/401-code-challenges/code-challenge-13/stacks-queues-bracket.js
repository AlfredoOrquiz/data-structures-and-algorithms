'use strict';

function validateBrackets(string) {

  if (!string) return 'Enter a String';

  const open = ['[', '(', '{'];
  const closed = [']', ')', '}'];
  const bracketStack = [];


  const stringArr = string.split('');

  for (let i = 0; i < stringArr.length; i++) {
    // console.log(i, stringArr[i]);
    if (open.includes(stringArr[i])) {
      bracketStack.push(stringArr[i]);
      // console.log(bracketStack);
    }
    if (closed.includes(stringArr[i])) {
      if (bracketStack.length === 0) {
        return false;
      } else {
        let openBrktIndex = open.indexOf(bracketStack.pop());
        // console.log('OPEN ', openBrktIndex);
        // console.log('BRACKET STACK', bracketStack);
        let closedBrktIndex = closed.indexOf(stringArr[i]);
        // console.log('CLOSED ', closedBrktIndex);
        if (openBrktIndex !== closedBrktIndex) return false;
      }
    }
  }
  if (bracketStack.length === 0) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  validateBrackets,
};
