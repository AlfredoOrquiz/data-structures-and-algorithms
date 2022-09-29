'use strict';

const { LinkedList, zipLists } = require ('./LinkedList.js');

function llSetUp(arr, ll) {
  let newll = ll;
  arr.forEach(value => {
    newll.append(value);
    console.log(newll.toString());
  });
  return newll;
}

describe('Testing Linked List Zip function', () => {
  it('should create a new ll equal to null if both ll are empty', () => {
    const ll1 = new LinkedList;
    const ll2 = new LinkedList;
    let list = zipLists(ll1, ll2);
    expect(list.head.value).toEqual(null);
  });

  it('should create a new ll equal to ll1 if ll2 is empty', () => {
    const ll1 = new LinkedList;
    const ll2 = new LinkedList;
    llSetUp(['a', 'b', 'c'], ll1);
    let list = zipLists(ll1, ll2);
    console.log(list);
    expect(list.toString()).toEqual('{ a } -> { b } -> { c } -> NULL');
  });

  it('should create a new ll equal to ll2 if ll1 is empty', () => {
    const ll1 = new LinkedList;
    const ll2 = new LinkedList;
    llSetUp(['x', 'y', 'z'], ll2);
    let list = LinkedList.zipLists(ll1, ll2);
    expect(list.toString()).toEqual('{ x } -> { y } -> { z } -> NULL');
  });

  it('should create a new ll with two ll of equal lengths', () => {
    const ll1 = new LinkedList;
    const ll2 = new LinkedList;
    llSetUp(['a', 'b', 'c'], ll1);
    llSetUp(['x', 'y', 'z'], ll2);
    let list = LinkedList.zipLists(ll1, ll2);
    expect(list.toString()).toEqual('{ a } -> { x } -> { b } -> { y } -> { c } -> { z } -> NULL');

  });

  it('should create a new ll with ll1 shorter than ll2', () => {
    const ll1 = new LinkedList;
    const ll2 = new LinkedList;
    llSetUp(['a', 'b'], ll1);
    llSetUp(['x', 'y', 'z'], ll2);
    let list = LinkedList.zipLists(ll1, ll2);
    expect(list.toString()).toEqual('{ a } -> { x } -> { b } -> { y } -> { z } -> NULL');
  });

  it('should create a new ll with ll2 shorter than ll1', () => {
    const ll1 = new LinkedList;
    const ll2 = new LinkedList;
    llSetUp(['a', 'b', 'c'], ll1);
    llSetUp(['x', 'y'], ll2);
    let list = LinkedList.zipLists(ll1, ll2);
    expect(list.toString()).toEqual('{ a } -> { x } -> { b } -> { y } -> { c } -> NULL');
  });
});
