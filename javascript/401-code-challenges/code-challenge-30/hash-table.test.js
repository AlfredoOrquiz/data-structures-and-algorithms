'use strict';

const HashTable = require('./hash-table.js');

describe('Testing Hashtable Class', () => {
  it('should store a key/value pair in the table', () => {
    let ht = new HashTable(1);
    ht.set('testKey', 'testValue');

    let result = ht.keyMap;
    expect(result).toEqual([[['testKey', 'testValue']]]);
  });
  it('should retrieve a value based on the key', () => {
    let ht = new HashTable(5);
    ht.set('testKey', 'testValue');

    let result = ht.get('testKey');
    expect(result).toEqual('testValue');
  });
  it('should return null for a key that does not exist', () => {
    let ht1 = new HashTable(5);
    ht1.set('testKey', 'testValue');

    let result1 = ht1.get('badTestKey');
    expect(result1).toEqual(null);

    let ht2 = new HashTable(1);
    ht2.set('testKey', 'testValue');

    let result2 = ht2.get('badTestKey');
    expect(result2).toEqual(null);
  });
  it('should be able to return a list of all unique keys in the table', () => {
    let ht = new HashTable(5);
    ht.set('key1', 'value1');
    ht.set('key1', 'value1');
    ht.set('key2', 'value2');
    ht.set('key3', 'value3');

    let result = ht.keys();
    expect(result).toEqual(['key2', 'key3', 'key1']);
  });
  it('should be able to return a list of all unique values in the table', () => {
    let ht = new HashTable(5);
    ht.set('key1', 'value1');
    ht.set('key1', 'value1');
    ht.set('key2', 'value2');
    ht.set('key3', 'value3');

    let result = ht.values();
    expect(result).toEqual(['value2', 'value3', 'value1']);
  });
  it('should succesfully handle a collision', () => {
    let ht = new HashTable(3);
    ht.set('key1', 'value1');
    ht.set('key2', 'value2');
    ht.set('key3', 'value3');
    ht.set('key4', 'value4');
    console.log(ht.keyMap);
    let count = ht.keyMap[0].length;
    expect(count).toEqual(2);

  });
  it('should successfully retrieve a value from a bucket within a table that has a collision', () => {
    let ht = new HashTable(3);
    ht.set('key1', 'value1');
    ht.set('key2', 'value2');
    ht.set('key3', 'value3');
    ht.set('key4', 'value4');

    let collision1 = ht.get('key2');
    let collision2 = ht.get('key3');
    expect(collision1).toEqual('value2');
    expect(collision2).toEqual('value3');
  });
  it('should successfully hash a key to an in-range value', () => {
    let ht = new HashTable(5);
    let result1 = ht.hash(5);
    let result2 = ht.hash(500);
    let result3 = ht.hash(1234);
    let result4 = ht.hash(32);
    let result5 = ht.hash(123412839048);

    expect(result1).toBeLessThan(5);
    expect(result2).toBeLessThan(5);
    expect(result3).toBeLessThan(5);
    expect(result4).toBeLessThan(5);
    expect(result5).toBeLessThan(5);
  });
  it('should return true for a key in the table', () => {
    let ht = new HashTable(5);
    ht.set('testKey', 'testValue');

    let result = ht.contains('testKey');
    expect(result).toBeTruthy();
  });
  it('should return false for a key not in the table', () => {
    let ht = new HashTable(5);
    ht.set('testKey', 'testValue');

    let result = ht.contains('badTestKey');
    expect(result).toBeFalsy();
  });
});
