/*
instructions:
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }

Return the head of the merged linked lis
examples:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]

instructions:
given the heads of two sorted linked lists list1 and list 2
merge the two lists into one sorted list
  *list should be made by splicing together the nodes of the first two lists

input/output:
  input -> two linked lists
  output -> a single sorted list, created by splicing together the nodes of the first two lists

examples:

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

so the order is

list1[0], list2[0], list1[1], list2[1], list1[2], list2[2]

pseudo/algo:
get length of whichever input array is longer
  loop until that length
    if element exists in array1 add to result
    if element exists in array2 add to result
return result


so each element is a list node as so:
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }

so, I need to identify which list to start with

so the basic structure of this will be
conditions to check if list1 and list2 have values at all
then conditionals for if only ONE of them has values

then initialize currentNode with whichever has a smaller starting node
  then as long as list1 and list2 have values loop
setting whichever current value is smaller to current node's next property
*/


var mergeTwoLists = function(list1, list2) {
  if (!list1 || !list2) {
        return list1 ? list1 : list2;
    }

  let currentNode = list1.val <= list2.val ? list1 : list2;
  const result = currentNode;

  list1 = currentNode === list1 ? list1.next : list1;
  list2 = currentNode === list2 ? list2.next : list2;

  while (list1 || list2) {
    if (!list1 || !list2) {
      currentNode.next = list1 ? list1 : list2;
      break;
    }

    if (list1.val >= list2.val) {
      currentNode.next = list2;
      list2 = list2.next;
    } else {
      currentNode.next = list1;
      list1 = list1.next;
    }

    currentNode = currentNode.next;
  }

  return result;
};
// console.log(mergeTwoLists([1,2,4], [1,3,4])) //[1,1,2,3,4,4]
// console.log(mergeTwoLists([], [])) //[]
// console.log(mergeTwoLists([], [0])) //[0]
