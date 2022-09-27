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

  includes(value) {
    let current = this.head;

    while (current !== null) {
      if (current.value === value) {
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
    while (current !== null) {
      stringified = stringified + `{ ${current.value} } -> `;
      current = current.next;
    }
    stringified = stringified + 'NULL';
    return stringified;
  }

  append(data) {
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = new Node(data);
  }


  insertBefore(value, newValue) {
    let current = this.head;

    let node = new Node(newValue);
    let prev = null;

    while (current.value !== value) {

      prev = current;
      current = current.next;
    }
    if (prev === null) {
      this.head = node;
    }

    node.next = current;

    if (prev !== null) {
      prev.next = node; // a > z

    }
    return node;
  }

  insertAfter(value, newValue) {
    let node = new Node(newValue);
    let current = this.head;
    let temp;

    while (current) {
      if (current.value === value) {
        temp = current.next;
        current.next = node;
        node.next = temp;
        return;
      } else {
        current = current.next;
      }
    }
  }
}

module.exports = LinkedList;
