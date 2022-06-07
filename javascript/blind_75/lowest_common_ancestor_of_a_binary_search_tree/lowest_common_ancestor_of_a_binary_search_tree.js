/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

/*
instructions:
  given a binary search tree (BST) find the lowest common ancestor
  (LCA) of two given nodes in the BST

  according to the definition of LCA on wikipedia
    -> lowest common ancestor is defined between two nodes
      p and q as the lowest node in T that has both p and q
      as descendents
    -> can be 'descendent' of self

  input -> root, p, and q
  output -> integer (representing the LCA of the BST)

example:
Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.

so start result as root

and start recursing by passing both right and left to function

what is the base case here?
  if current node equals p or q

but how do I get the LCA from this?

*/
var lowestCommonAncestor = function(root, p, q) {

  lowestCommonAncestor(root.left, p, q);
  lowestCommonAncestor(root.right, p, q);
};