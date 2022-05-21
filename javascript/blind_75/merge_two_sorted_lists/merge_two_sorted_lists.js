/*
instructions:
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

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

*/


var mergeTwoLists = function(list1, list2) {
  const iterateLength = list1.length > list2.length ? list1.length : list2.length;
  let result = [];

  for (let i = 0; i < iterateLength; i++) {
    if (list1[i]) {
      result.push(list1[i]);
    }

    if (list2[i]) {
      result.push(list2[i])
    }
  }

  return result;
};

console.log(mergeTwoLists([1,2,4], [1,3,4])) //[1,1,2,3,4,4]
console.log(mergeTwoLists([], [])) //[]
console.log(mergeTwoLists([], [0])) //[0]
