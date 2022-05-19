package main

import (
	"fmt"
	"strings"
)

func duplicateCount(str string) int {
	if str == "" {
		return 0
	}

	result := map[string]int{}

	str1 := strings.ToLower(str)

	for i := 0; i < len(str1); i++ {
		result[string(str1[i])] = 0
	}

	for i := 0; i < len(str1); i++ {
		for k := range result {
			if k == string(str1[i]) {
				result[string(str1[i])]++
				break
			}
		}
	}

	counter := 0

	for _, v := range result {
		if v > 1 {
			counter++
		}
	}

	return counter
}

func main() {
	fmt.Println(duplicateCount(""))                 //0);
	fmt.Println(duplicateCount("abcde"))            //0);
	fmt.Println(duplicateCount("aabbcde"))          //2);
	fmt.Println(duplicateCount("aabBcde"))          //2,"should ignore case");
	fmt.Println(duplicateCount("Indivisibility"))   //1)
	fmt.Println(duplicateCount("Indivisibilities")) //2, "characters may not be adjacent")
}
