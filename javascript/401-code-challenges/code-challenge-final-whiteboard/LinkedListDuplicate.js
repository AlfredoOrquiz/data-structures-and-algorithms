'use strict';

class Node {
  constructor(value) {
    this.data = value;
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

const deduplicates() => {
  var ptr1 = null,
    ptr2 = null,
    dup = null;
  ptr1 = head;

  while (ptr1 !== null && ptr1.next !== null) {
    ptr2 = ptr1;

    while (ptr2.next !== null) {

      if (ptr1.data === ptr2.next.data) {

        dup = ptr2.next;
        ptr2.next = ptr2.next.next;

      } else {
        ptr2 = ptr2.next;
      }
    }
    ptr1 = ptr1.next;
  }
}

return printList;

module.exports = {
  LinkedList,
  deduplicates,
};

/*function printList(node) {
  while (node !== null) {
    document.write(node.data + ' ');
    node = node.next;
  }

  head = new Node(10);
  head.next = new Node(12);
  head.next.next = new Node(11);
  head.next.next.next = new Node(11);
  head.next.next.next.next = new Node(12);
  head.next.next.next.next.next = new Node(11);
  head.next.next.next.next.next.next = new Node(10);

  document.write('Linked List before removing duplicates : <br/>');
  printList(head);

  deduplicates();
  document.write('<br/>');
  document.write('Linked List after removing duplicates : <br/>');
  printList(head);
}*/

/*
function deduplicate (node) {

  let duplicates = []
  let current = node
  while current !== null {
    if duplicates.includes(current.value) {
      current.value = current.next.value
      current.next = current.next.next
   }
    else {
      duplicates.push(current.value)
    }
    current = current.next
  }
return node;
}*/
