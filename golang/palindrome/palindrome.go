package main

import (
	"fmt"
	"strings"
)

func main() {
	fmt.Println(IsPalindrome("a"))     // true
	fmt.Println(IsPalindrome("aba"))   //true
	fmt.Println(IsPalindrome("Abba"))  //true -- case doesn't matter!
	fmt.Println(IsPalindrome("hello")) // false
}

func IsPalindrome(str string) bool {
	var result []rune
	chars := []rune(str)

	for i := len(chars) - 1; i >= 0; i-- {
		result = append(result, chars[i])
	}

	return (strings.ToLower(str) == strings.ToLower(string(result)))
}
