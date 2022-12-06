'use strict';

const deduplicates = require ('./LinkedListDuplicate.js');

it('Can successfully remove a duplicate node', () => { let list = new deduplicates; list.insert('10'); list.insert('12'); list.insert('10'); list.insert('12');
  expect(list.toString()).toEqual('{ 10 } -> { 12 } -> NULL');});

it('Can successfully remove multiple duplicates in a row', () => { let list = new deduplicates; list.insert('10'); list.insert('12'); list.insert('10'); list.insert('10'); list.insert('12'); list.insert('12');
  expect(list.toString()).toEqual('{ 10 } -> { 12 } -> NULL');});

it('Can successfully remove duplicates that are not in a row', () => { let list = new deduplicates; list.insert('14'); list.insert('25'); list.insert('17'); list.insert('14'); list.insert('9'); list.insert('17'); list.insert('10'); list.insert('25'); list.insert('16');
  expect(list.toString()).toEqual('{ 14 } -> { 25 } -> { 17 } -> { 9 } -> { 10 } -> { 16 } -> NULL');});

it('Can successfully remove multiple duplicates that are not in a row', () => { let list = new deduplicates; list.insert('14'); list.insert('25'); list.insert('17'); list.insert('14'); list.insert('4'); list.insert('17'); list.insert('10'); list.insert('25'); list.insert('16');
  expect(list.toString()).toEqual('{ z } -> { a } -> { b } -> NULL');});
