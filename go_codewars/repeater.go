/*
Write a function named repeater() that takes two arguments (a string and a number),
 and returns a new string where the input string is repeated that many times.
*/
package main

import "fmt"

func Repeater(s string, n int) string {
	result := ""
	for i := 0; i < n; i++ {
		result += s
	}
	return result
}

func main() {
	fmt.Println(Repeater("a", 5))
	fmt.Println(Repeater("Na", 16))
	fmt.Println(Repeater("Wub ", 6))
}
