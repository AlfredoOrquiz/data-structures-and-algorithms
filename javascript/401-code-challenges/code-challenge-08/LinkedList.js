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
}

const zipLists = (ll1, ll2) => {
  if (ll1 && ll2) {
    const newll = new LinkedList();
    let list1 = ll1.head;
    let list2 = ll2.head;
    newll.insert(ll1.head ? ll1.head : ll2.head);

    while (list1 !== null || list2 !== null) {
      if (list2) {
        newll.append(list2);
        list2 = list2.next;
      }
      if (list1) {
        newll.append(list1);
        list1 = list1.next;
      }
    }
    return newll;
  } else {
    return null;
  }
};

module.exports = {
  LinkedList,
  zipLists,
};
