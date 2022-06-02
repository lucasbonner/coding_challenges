/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/*
instructions:
  given the root of a binary tree, invert the tree and return its root

  input -> binary tree
  output -> binary tree 'inverted'

  questions:
    what exactly is meant by 'inversion'?

Examples:
[4, 2, 7, 1, 3, 6, 9]

so the array represents the trees layers

4 -> 2 and 7 -> 1, 3, 6, 9

root is 4
left is [2, 1, 3]
right is [7, 6, 9]

output
root is 4
left is [7, 9, 6]
right is [2, 3, 1]

recursion could work here

let's start a smaller case

root 2
left is 1
right is 3

output
root 2
left is 3
right is 1

so in this couldn't i do assignment like

left = root.left
right = root.right

root.left = right
root.right = left

then recurse
base case is if both right and left are null

*/

var invertTree = function(root) {

  var reversal = function(root) {
    let left = root.left;
    let right = root.right;

    root.left = right;
    root.right = left;

    if (!root.left && !root.right) {
      return;
    }

    reversal(root.left);
    reversal(root.right);
  }

  reversal(root);
  return root;
};

console.log(invertTree([4,2,7,1,3,6,9])); //[4,7,2,9,6,3,1]
console.log(invertTree([2,1,3])); //[2,3,1]
console.log(invertTree([])); //[]
