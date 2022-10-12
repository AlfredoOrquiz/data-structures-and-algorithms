'use strict';

const { BST, BinaryTree, Node } = require('./trees');

let tree = new BST;
tree.add(1);
tree.add(4);
tree.add(34);
tree.add(8);
tree.add(90);
tree.add(88);
tree.add(2);
tree.add(14);
tree.add(27);


describe('Testing Binary Tree and Binary Search Tree Methods', () => {
  it('should successfully instantiate an empty tree', () => {
    let emptyTree = new BST;

    expect(emptyTree.root).toBeNull();
    expect(JSON.stringify(emptyTree)).toEqual('{"root":null}');
  });
  it('should successfully instantiate a tree with a single root node', () => {
    let singleNodeTree = new BST;
    singleNodeTree.add(1);

    expect(singleNodeTree.root.value).toEqual(1);
  });
  it('should successfully add a left child to a node', () => {
    let leftNodeTree = new BST;
    leftNodeTree.add(1);
    leftNodeTree.add(4);

    expect(leftNodeTree.root.left.value).toEqual(4);
  });
  it('should successfully add a right child to a node', () => {
    let rightNodeTree = new BST;
    rightNodeTree.add(1);
    rightNodeTree.add(34);

    expect(rightNodeTree.root.right.value).toEqual(34);
  });
  it('should return a collection from a preorder traversal', () => {
    let order = tree.preOrder();
    expect(order).toEqual([1, 4, 8, 90,14, 34, 55, 27, 2]);

  });
  it('should return a collection from a inorder traversal', () => {
    let order = tree.inOrder();
    expect(order).toEqual([8, 4, 90, 14, 1, 27, 55, 34, 2]);

  });
  it('should return a collection from a postorder traversal', () => {
    let order = tree.postOrder();
    expect(order).toEqual([8, 14, 90, 4, 27, 55, 2, 34, 1]);

  });

  it('should return true if a value is in the tree', () => {
    let result = tree.contains(55);
    expect(result).toBeTruthy();

  });
  it('should return false if a value is not in the tree', () => {
    let result = tree.contains(13);
    expect(result).toBeFalsy();

  });
  it('should return empty if a tree is empty', () => {
    let emptyTree = new BST;

    let containsRes = emptyTree.contains(1);
    let preOrderRes = emptyTree.preOrder();
    let inOrderRes = emptyTree.inOrder();
    let postOrderRes = emptyTree.postOrder();
    expect(containsRes).toEqual('Empty binary tree');
    expect(preOrderRes).toEqual('Empty binary tree');
    expect(inOrderRes).toEqual('Empty binary tree');
    expect(postOrderRes).toEqual('Empty binary tree');
  });

  it('should return error if a value is not number', () => {
    let containsRes = tree.contains('a');
    let addRes = tree.add('a');
    expect(containsRes).toEqual('Expected a number');
    expect(addRes).toEqual('Expected a number');
  });
});
