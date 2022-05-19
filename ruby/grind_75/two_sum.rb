=begin
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.



Example 1:



Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.


Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?


instructions:
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

  input -> array (nums), integer (target)
  output -> array with two integers (representing indices of elements in nums that add to target)

examples:

Input:
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

nums = [2,7,11,15], target = 9
start iterating thru array
1st loop is 0 -> array.length (i)
  2nd loop is i -> array.length (j)
    if arr at i + j === target, return in arr format



Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

pseudo/algo:
need better efficiency
how not iterate over array twice?

=end
def two_sums(nums, target)
  nums.select! { |num| num <= target }
  for i in (0...nums.length) do
    for j in (i + 1...nums.length) do
      if nums[i] + nums[j] == target
        return [i, j]
      end
    end
  end
end

# p two_sums([2,7,11,15], 9) #[0,1]
# p two_sums([3, 2, 4], 6) #[1, 2]
# p two_sums([3, 3], 6) #[0, 1]
p two_sums([0,4,3,0], 0)
