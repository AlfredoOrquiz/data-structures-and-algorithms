'use strict';

const HashTable = require('../code-challenge-30/hash-table.js');

function repeatedWord(string) {
  let stringArr = string.split(/[ ,.-]+/);
  let ht = new HashTable();
  let repeatString = null;
  let i = 0;

  while (!repeatString && i < stringArr.length) {
    let currentString = stringArr[i].toLowerCase();
    let index = ht.hash(currentString);
    if (!ht.keyMap[index]) {
      ht.set(currentString);
      i++;
    } else {
      let bucket = ht.keyMap[index];
      for (let j = 0; j < bucket.length; j++) {
        if (bucket[j][0] === currentString) {
          repeatString = currentString;
        } else {
          ht.set(currentString);
          i++;
        }
      }
    }
  }
  return repeatString;
}

console.log(repeatedWord('It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...'));

module.exports = repeatedWord;
