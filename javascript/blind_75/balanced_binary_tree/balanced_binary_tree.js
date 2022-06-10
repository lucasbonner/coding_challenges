/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
/*
given a binary tree, determine if it is height-balanced

for this problem a height-balanced binary tree is defined as
  -> a binary tree in which the left and right subtrees of every node differ in height
  by no more than 1

  input -> binary tree
  output -> boolean (based off whether or not the binary tree is 'balanced')

examples:

[3,9,20,null,null,15,7] -> true

3.left -> 9
  (depth 1)
3.right -> 20
  (depth 1)

20.right -> 7
20.left -> 15
  (depth 2)

maybe an object?
  {left: 1, right: 2}
but how would I keep track?

this might be a simple recursion
  of setting up the object with the counts
  and having a recursing function
    whenver function recurses left, add to left
    whenever function recurses right add to right
  and then at end can see if counts subtracted from one another equals 0 or 1

*/
var isBalanced = function(root) {
  let depthCounter = {'right': 0, 'left': 0};

  var dive = function(node) {
    if (node.right) {
      depthCounter['right']++;
      dive(node.right);
    }

    if (node.left) {
      depthCounter['left']++;
      dive(node.left);
    }
  }

  if (root.right) {
    depthCounter['right']++;
    dive(root.right);
  }

  if (root.left) {
    depthCounter['left']++;
    dive(root.left);
  }

  let rightCount = depthCounter['right'];
  let leftCount = depthCounter['left'];
  let difference = (rightCount > leftCount) ? (rightCount - leftCount) : (leftCount - rightCount);

  if ((rightCount === leftCount) || difference === 1) {
    return true;
  }

  return false;
};

console.log(isBalanced([3,9,20,null,null,15,7])); //true
console.log(isBalanced([1,2,2,3,3,null,null,4,4]); //false
console.log(isBalanced([]); //true
