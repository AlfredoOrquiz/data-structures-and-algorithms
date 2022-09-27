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
    this.head = newHead;
    if (currentHead) {
      newHead.next = currentHead;
    }
    return newHead;
  }

  append(data) {
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = new Node(data);
  }

  kFromEnd(k) {
    if (k < 1) {
      return "Exception";
    }
    let current = this.head;
    let previousValue = this.head;
    let counter = 0;
    for (let i = k; i > 0; i--) {
      current = current.next;
      if (!current) {
        return "Exception";
      }
    } while (current !== null) {
      current = current.next;
      counter++;
      if (k === counter - 1){
        previousValue = previousValue.next;
      }

    }
    return previousValue.value;
  }

}

module.exports = LinkedList;
