package main

import (
	"fmt"
	"strconv"
)

func main() {
	fmt.Println(CreatePhoneNumber([10]uint{1, 2, 3, 4, 5, 6, 7, 8, 9, 0})) // => returns "(123) 456-7890"
}

func CreatePhoneNumber(xi [10]uint) string {
	res := "("

	for i := 0; i < 10; i++ {
		if i == 3 {
			res += ") "
		} else if i == 6 {
			res += "-"
		}
		res += strconv.Itoa(int(xi[i]))
	}

	return res
}
