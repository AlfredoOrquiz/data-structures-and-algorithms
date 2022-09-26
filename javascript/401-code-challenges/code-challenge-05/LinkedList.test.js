'use strict';

const LinkedList = require ('./LinkedList.js');

describe('Testing Linked List and all methods', () => {
  test('should create a new linked list', () => {
    let list = new LinkedList;
    expect(list.head).toEqual(null);
  });
  test('should properly insert a node', () => {
    let list = new LinkedList;
    list.insert('a');
    expect(JSON.stringify(list)).toEqual('{"head":{"value":"a","next":null}}');
  });
  test('should point the head to first node', () => {
    let list = new LinkedList;
    list.insert('a');
    expect(list.head.value).toEqual('a');
  });
});
test('should properly insert multiple nodes', () => {
  let list = new LinkedList;
  list.insert('c');
  list.insert('b');
  list.insert('a');
  expect(JSON.stringify(list)).toEqual('{"head":{"value":"a","next":{"value":"b","next":{"value":"c","next":null}}}}');
});
test('should return true when finding a value that exists in the list', () => {
  let list = new LinkedList;
  list.insert('c');
  list.insert('b');
  list.insert('a');
  expect(list.includes('b')).toBeTruthy();
});
test('should return false when a value does not exist in the list', () => {
  let list = new LinkedList;
  list.insert('c');
  list.insert('b');
  list.insert('a');
  expect(list.includes('d')).toBeFalsy();
});
test('should return a collection of all the values that exist in the linked list', () => {
  let list = new LinkedList;
  list.insert('c');
  list.insert('b');
  list.insert('a');
  expect(list.toString()).toEqual('{ a } -> { b } -> { c } -> NULL');
});
