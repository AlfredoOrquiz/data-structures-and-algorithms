'use strict';

const { BinaryTree, Node, breadthFirst } = require('./tree-breadth-first');

describe('Testing breadthFirst Function', () => {
  it('should respond with an exception on an empty tree', () => {
    let emptyTree = new BinaryTree;
    let result = breadthFirst(emptyTree);
    expect(result).toEqual('EMPTY TREE');
  });
  it('should output value on a tree with one node', () => {
    let oneTree = new BinaryTree;
    oneTree.root = new Node(10);
    let result = breadthFirst(oneTree);
    expect(result).toEqual([10]);
  });
  it('should output values in an balanced tree', () => {
    let balancedTree = new BinaryTree;
    let n1 = new Node(1);
    let n2 = new Node(4);
    let n3 = new Node(34);
    let n4 = new Node(8);
    let n5 = new Node(90);
    let n6 = new Node(88);
    let n7 = new Node(2);
    let n8 = new Node(14);
    let n9 = new Node(27);

    balancedTree.root = n1;
    n1.left = n2;
    n1.right = n3;
    n2.left = n4;
    n2.right = n5;
    n3.left = n6;
    n3.right = n7;
    n4.left = n8;
    n4.right = n9;

    let result = breadthFirst(balancedTree);
    expect(result).toEqual([1, 4, 34, 8, 90,88, 2, 14, 27]);
  });
  it('should output values in an unbalanced tree', () => {
    let unbalancedTree = new BinaryTree;
    let n1 = new Node(5);
    let n2 = new Node(52);
    let n3 = new Node(6);
    let n4 = new Node(70);
    let n5 = new Node(49);
    let n6 = new Node(3);
    let n7 = new Node(9);
    let n8 = new Node(1);
    let n9 = new Node(17);

    unbalancedTree.root = n1;
    n1.left = n2;
    n1.right = n3;
    n2.left = n4;
    n2.right = n5;
    n3.right = n6;
    n5.left = n7;
    n5.right = n8;
    n6.right = n9;


    let result = breadthFirst(unbalancedTree);
    console.log(result);
    expect(result).toEqual([5, 52, 6, 70, 49, 3, 9, 1, 17]);
  });
});
