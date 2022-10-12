'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
}

function breadthFirst(tree) {
  const valueArr = [];
  const queue = [];

  if (!tree.root) return 'EMPTY TREE';

  queue.unshift(tree.root);

  while (queue.length) {
    let node = queue[queue.length - 1];

    if (node.left) queue.unshift(node.left);
    if (node.right) queue.unshift(node.right);
    valueArr.push(node.value);
    queue.pop();
  }
  return valueArr;
}

module.exports = {
  BinaryTree,
  Node,
  breadthFirst,
};
