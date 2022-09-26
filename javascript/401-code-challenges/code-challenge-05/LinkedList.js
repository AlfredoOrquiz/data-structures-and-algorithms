'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }


  insert(value) {
    const newHead = new Node(value);
    const currentHead = this.head;
    newHead = this.head;
    if(currentHead) {
      newHead.next = currentHead;
    }
	return newHead;
  }

  includes(value) {
    let current = this.head;
    while(current !== null) {
      if(current === value) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  }

  toString() {
    let current = this.head;
    let stringified = '';
    while(current !== null) {
      stringified = stringified + 'current';
      current = current.next;
    }
    return stringified;
  }
  
}

module.exports = LinkedList;
