package main

import (
	"fmt"
	"strconv"
)

func main() {
	// plusOne([]int{1, 2, 3}) // returns []int{1, 2, 4}
	// plusOne([]int{9}) // returns []int{1, 0}
	// plusOne([]int{1, 9, 9}) // returns []int{2, 0, 0}
	// plusOne([]int{0}) // returns []int{1}
	plusOne([]int{7, 2, 8, 5, 0, 9, 1, 2, 9, 5, 3, 6, 6, 7, 3, 2, 8, 4, 3, 7, 9, 5, 7, 7, 4, 7, 4, 9, 4, 7, 0, 1, 1, 1, 7, 4, 0, 0, 6})
}

func plusOne(digits []int) []int {
	str := ""
	// result := []int{}
	for _, v := range digits {
		str += strconv.Itoa(v)
	}
	fmt.Println(str)
	number, _ := strconv.Atoi(str)
	fmt.Println(number)
	number += 1
	// resultStr := strconv.Itoa(number)
	return []int{}
	// iterator := 0

	//   for i := 0; i < len(resultStr); i++ {
	//     iterator, _ = strconv.Atoi(string(resultStr[i]))
	//     result =  append(result, iterator )
	//   }

	//   fmt.Println(result)
	//   return result
}

// -9223372036854775808

// [7,2,8,5,0,9,1,2,9,5,3,6,6,7,3,2,8,4,3,7,9,5,7,7,4,7,4,9,4,7,0,1,1,1,7,4,0,0,6]

// our output - [0,9,2,2,3,3,7,2,0,3,6,8,5,4,7,7,5,8,0,8]

// expected  - [7,2,8,5,0,9,1,2,9,5,3,6,6,7,3,2,8,4,3,7,9,5,7,7,4,7,4,9,4,7,0,1,1,1,7,4,0,0,7]
