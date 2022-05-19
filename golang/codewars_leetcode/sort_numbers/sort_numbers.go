package main

import (
	"fmt"
	"sort"
)

func SortNumbers(numbers []int) []int {
	if len(numbers) == 0 {
		return numbers
	}
	sort.Ints(numbers)
	return numbers
}

func main() {
	fmt.Println(SortNumbers([]int{1, 2, 10, 50, 5})) //.To(Equal([]int{1,2,5,10,50})))
	fmt.Println(SortNumbers([]int{}))                //To(Equal([]int{})))
}
