/*
instructions:
  given an integer array 'nums' find the contigous subarray
  (containing at least one number) which has the largest sum
  then return its sum

  input -> array of integers
  output -> integer (representing the largest sum of contigous subarray)

  questions:
    what's contigous?
      -> right next to each other

example:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

i think I could nest two loops together
  have i start at 0
  have j start at i
    and sum that section of the array and save in a result array
    and at end return the highest number in the array
*/


var maxSubArray = function(nums) {
  let temp = 0;
  let max = -Infinity;

  for (let i = 0; i <= nums.length; i++) {
    temp = Math.max(nums[i], nums[i] + temp);
    max = temp > max ? temp : max;
  }

  return max;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6
console.log(maxSubArray([1])); // 1
console.log(maxSubArray([5,4,-1,7,8])); // 23
console.log(maxSubArray([-2,1]));
console.log(maxSubArray([8,-19,5,-4,20])); //21
