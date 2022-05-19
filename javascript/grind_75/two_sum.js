/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

to solve this we must use a 'map index'
essentially just an associative data structure
that holds the element as the key, and the index as the value

then we can simply check the map index for if it has the current
target - current num
if it does, return the value of mapIdx at target - currentNum
and i

*/

var twoSum = function(nums, target) {
  let mapIdx = {}

  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i];
    let remainder = mapIdx[target - currentNum];

    //handles 0 because 0 falsey
    if (remainder || remainder === 0 ) {
      return [mapIdx[target - currentNum], i];
    }

    mapIdx[currentNum] = i;
  }
};

console.log(twoSum([2,7,11,15], 9)); //[0, 1]
// console.log(twoSum([3,2,4], 6)); //[1,2]
