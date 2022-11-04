'use strict';

const hash = require('hash-it');

class HashTable {
  constructor(size = 1069) {
    this.keyMap = new Array(size);
  }
  hash(key) {
    return hash(key) % this.keyMap.length;
  }

  set(key, value) {
    let index = this.hash(key);

    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this.hash(key);
    let bucket = this.keyMap[index];

    if (!bucket) return null;

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) return bucket[i][1];
    }

    return null;
  }

  keys() {
    const uniqueKeys = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!uniqueKeys.includes(this.keyMap[i][j][0])) {
            uniqueKeys.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return uniqueKeys;
  }

  values() {
    const uniqueValues = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!uniqueValues.includes(this.keyMap[i][j][1])) {
            uniqueValues.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return uniqueValues;
  }

  contains(key) {

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (this.keyMap[i][j][0] === key) return true;
        }
      }
    }
    return false;
  }
}

module.exports = HashTable;
