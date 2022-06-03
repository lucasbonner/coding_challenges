/*
Given an array of integers nums which is sorted in ascending order,
and an integer target, write a function to search target in nums.
If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

instructions:
  given a sorted array of integers
  search for the target

  if target exists return its index
  if target does not exist return -1

  constraints:
    log n time complexity

  input -> array of sorted nums, target int
  output -> index/-1 if not present
*/

var search = function(nums, target) {

};

console.log(search([-1,0,3,5,9,12], 9)); //4
console.log(search([-1,0,3,5,9,12], 2)); //-1 because 2 not present
