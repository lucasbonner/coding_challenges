package main

import (
	"fmt"
	"sort"
)

func main() {
	fmt.Println(FindShort("bitcoin take over the world maybe who knows perhaps"))                //3))
	fmt.Println(FindShort("turns out random test cases are easier than writing out basic ones")) //3))
	fmt.Println(FindShort("Let's travel abroad shall we"))                                       //2))
}

func FindShort(s string) int {
	result := []int{}
	counter := 0
	for i, _ := range s {
		if s[i] == ' ' {
			result = append(result, counter)
			counter = 0
			continue
		}
		counter++
	}
	result = append(result, counter)
	sort.Ints(result)
	return result[0]
}
