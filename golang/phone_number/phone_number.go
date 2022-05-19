// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// Example

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!
package main

import (
	"fmt"
	"strconv"
)

func main() {
	fmt.Println(CreatePhoneNumber([10]uint{1, 2, 3, 4, 5, 6, 7, 8, 9, 0})) // => returns "(123) 456-7890"
}

func CreatePhoneNumber(xi [10]uint) string {

	iterator1 := "("

	for i := 0; i <= 2; i++ {
		iterator1 += strconv.Itoa(int(xi[i]))
	}
	iterator1 += ") "
	for i := 3; i <= 5; i++ {
		iterator1 += strconv.Itoa(int(xi[i]))
	}
	iterator1 += "-"
	for i := 6; i < 10; i++ {
		iterator1 += strconv.Itoa(int(xi[i]))
	}
	return iterator1
}
