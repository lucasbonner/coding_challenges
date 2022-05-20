package main

import (
	"fmt"
)

func twoSum(nums []int, target int) []int {
	mapIdx := make(map[int]int)

	for i := 0; i < len(nums); i++ {
		currentNum := nums[i]
		remainder := target - currentNum

		if _, ok := mapIdx[remainder]; ok {
			return []int{i, mapIdx[remainder]}
		}

		mapIdx[currentNum] = i
	}
	return nil
}

func main() {
	fmt.Println(twoSum([]int{2, 7, 11, 15}, 9)) //[0, 1]
	fmt.Println(twoSum([]int{3, 2, 4}, 6))      // [1, 2]
	fmt.Println(twoSum([]int{3, 3}, 6))         // [0, 1]
}
