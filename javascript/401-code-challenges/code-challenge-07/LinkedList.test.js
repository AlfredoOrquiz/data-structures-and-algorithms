'use strict';

const LinkedList = require ('./LinkedList.js');

it('Where k is greater than the length of the linked list', () => {
  let list = new LinkedList;
  list.insert('a');
  list.append('b');
  expect(list.kFromEnd(3)).toEqual('Exception');
});

it('Where k and the length of the list are the same', () => {
  let list = new LinkedList;
  list.insert('a');
  list.append('b');
  expect(list.kFromEnd(2)).toEqual('Exception');
});

it('Where k is not a positive integer', () => {
  let list = new LinkedList;
  list.insert('a');
  list.append('b');
  expect(list.kFromEnd(-1)).toEqual('Exception');
});

it('Where the linked list is of a size 1', () => {
  let list = new LinkedList;
  list.insert('a');
  expect(list.kFromEnd(1)).toEqual('Exception');
});

it('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
  let list = new LinkedList;
  list.insert('a');
  list.append('b');
  list.append('c');
  expect(list.kFromEnd(1)).toEqual('b');
});
