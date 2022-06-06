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

examples:
[-1,0,3,5,9,12], 9
[-1,0,3,5,9,12].length === 6
6/2 -> 3

start at 3

get 5, is 5 less than or greater than target?
less than, move up an index
find target!

---------------------
[-1,0,3,5,9,12], 2
[-1,0,3,5,9,12].length === 6
6/2 -> 3

start at 3

start at 3
get 5, is 5 less than or greater than target?
greater than, move left

at 2
get 3, is 3 less than or greater than target?
greater than, move left

at 1,
get 0, is 0 less than or greater than target?
less than, target is not present, return -1

so how know that target is not present?
if index + 1 is greater than, and index is less than, return -1

so what is the looping structure
i know i start at the middle index
and iterate one way or the other
based off whether the target is less than or equal to num at startIndex


*/

var search = function(nums, target) {
  let index = Math.floor(nums.length / 2);
  let originalMiddle = nums[index];
  let comparisonElement =  nums[index];
  let result = -1;

  if (nums[index] === target) {
    return index;
  }

  while (true) {
    comparisonElement = nums[index];

    if (index >= nums.length || index < 0) {
      break;
    }

    if (target === comparisonElement) {
      result = index;
      break;
    }

    if (originalMiddle > target) {
      index--;
    }

    if (originalMiddle < target) {
      index++;
    }
  }

  return result;
};

console.log(search([-1,0,3,5,9,12], 9)); //4
// console.log(search([-1,0,3,5,9,12], 2)); //-1 because 2 not present
// console.log(search([5], 5)); //0
// console.log(search([5], -5)); //-1
