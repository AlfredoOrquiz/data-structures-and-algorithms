'use strict';

const {Queue, Stack} = require('./queue-stack.js');

describe('Testing Stack Methods:', () => {

  it('Can successfully push onto a stack', () => {
    let stack = new Stack;
    stack.push('a');
    expect(stack.top.value).toEqual('a');
  });

  it('Can successfully push multiple values onto a stack', () => {
    let stack = new Stack;
    stack.push('a');
    stack.push('b');
    stack.push('c');
    expect(JSON.stringify(stack)).toEqual('{"top":{"value":"c","next":{"value":"b","next":{"value":"a","next":null}}}}');
  });

  it('Can successfully pop off the stack', () => {
    let stack = new Stack;
    stack.push('a');
    stack.push('b');
    stack.push('c');
    stack.pop();
    let fullStack = JSON.stringify(stack);
    expect(fullStack).toEqual('{"top":{"value":"b","next":{"value":"a","next":null}}}');
  });

  it('Can successfully empty a stack after multiple pops', () => {
    let stack = new Stack;
    stack.push('a');
    stack.push('b');
    stack.push('c');
    let fullStack = JSON.stringify(stack);
    expect(fullStack).toEqual('{"top":{"value":"c","next":{"value":"b","next":{"value":"a","next":null}}}}');
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.top).toBeNull();
  });

  it('Can successfully peek the next item on the stack', () => {
    let stack = new Stack;
    stack.push('a');
    stack.push('b');
    stack.push('c');
    let result = stack.peek();
    expect(result).toEqual('c');
  });

  it('Can successfully instantiate an empty stack', () => {
    let stack = new Stack;
    expect(stack.top).toBeNull();
  });

  it('Calling pop or peek on empty stack raises exception', () => {
    let stack = new Stack;
    let result = stack.pop();
    expect(result).toEqual('Exception');
  });
});

///////////////////////////////////////////////////////

describe('Testing Queue Methods:', () => {

  it('Can successfully enqueue into a queue', () => {
    let queue = new Queue;
    queue.enqueue('a');
    expect(queue.front.value).toEqual('a');
    expect(queue.back.value).toEqual('a');
  });

  it('Can successfully enqueue multiple values into a queue', () => {
    let queue = new Queue;
    queue.enqueue('a');
    queue.enqueue('b');
    queue.enqueue('c');
    expect(queue.front.value).toEqual('a');
    expect(queue.back.value).toEqual('c');
    expect(JSON.stringify(queue)).toEqual('{"front":{"value":"a","next":{"value":"b","next":{"value":"c","next":null}}},"back":{"value":"c","next":null}}');
  });

  it('Can successfully dequeue out of a queue the expected value', () => {
    let queue = new Queue;
    queue.enqueue('a');
    queue.enqueue('b');
    queue.enqueue('c');
    let fullQueue = JSON.stringify(queue);
    let result = queue.dequeue();

    expect(fullQueue).toEqual('{"front":{"value":"a","next":{"value":"b","next":{"value":"c","next":null}}},"back":{"value":"c","next":null}}');
    expect(result).toEqual('a');
    expect(JSON.stringify(queue)).toEqual('{"front":{"value":"b","next":{"value":"c","next":null}},"back":{"value":"c","next":null}}');
  });

  it('Can successfully peek into a queue, seeing the expected value', () => {
    let queue = new Queue;
    let result = queue.peek();
    expect(result).toEqual('Exception');
  });

  it('Can successfully empty a queue after multiple dequeues', () => {
    let queue = new Queue;
    queue.enqueue('a');
    queue.enqueue('b');
    queue.enqueue('c');
    let fullQueue = JSON.stringify(queue);
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();

    expect(fullQueue).toEqual('{"front":{"value":"a","next":{"value":"b","next":{"value":"c","next":null}}},"back":{"value":"c","next":null}}');
    expect(queue.front).toBeNull();
    expect(queue.back).toBeNull();
    expect(JSON.stringify(queue)).toEqual('{"front":null,"back":null}');
  });

  it('Can successfully instantiate an empty queue', () => {
    let queue = new Queue;

    expect(queue.front).toBeNull();
    expect(queue.back).toBeNull();
    expect(queue).toBeInstanceOf(Queue);
  });

  it('Calling dequeue or peek on empty queue raises exception', () => {
    let queue = new Queue;
    let result = queue.dequeue();
    expect(result).toEqual('Exception');
  });
});
