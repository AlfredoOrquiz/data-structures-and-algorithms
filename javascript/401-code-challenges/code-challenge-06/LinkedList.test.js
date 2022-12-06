'use strict';

const LinkedList = require ('./LinkedList.js');

it('Can successfully add a node to the end of the linked list', () => { let list = new LinkedList; list.insert('c'); list.insert('b'); list.insert('a'); list.append('d'); expect(list.toString()).toEqual('{ a } -> { b } -> { c } -> { d } -> NULL');});

it('Can successfully add multiple nodes to the end of a linked list', () => { let list = new LinkedList; list.insert('c'); list.insert('b'); list.insert('a'); list.append('d'); list.append('e'); list.append('f');
  expect(list.toString()).toEqual('{ a } -> { b } -> { c } -> { d } -> { e } -> { f } -> NULL');});

it('Can successfully insert a node before a node located in the middle of a linked list', () => { let list = new LinkedList; list.insert('a'); list.append('b'); list.insertBefore('b', 'z');
  expect(list.toString()).toEqual('{ a } -> { z } -> { b } -> NULL');});

it('Can successfully insert a node before the first node of a linked list', () => { let list = new LinkedList; list.insert('a'); list.append('b'); list.insertBefore('a', 'z');
  expect(list.toString()).toEqual('{ z } -> { a } -> { b } -> NULL');});

it('Can successfully insert after a node in the middle of the linked list', () => { let list = new LinkedList; list.insert('a'); list.append('b'); list.insertAfter('a', 'z');
  expect(list.toString()).toEqual('{ a } -> { z } -> { b } -> NULL');});

it('Can successfully insert a node after the last node of the linked list', () => { let list = new LinkedList; list.insert('a'); list.append('b'); list.insertAfter('b', 'z');
  expect(list.toString()).toEqual('{ a } -> { b } -> { z } -> NULL');});
