/*
Write a program that finds the summation of every number from 1 to num.
The number will always be a positive integer greater than 0.
*/
package main

// func main() {
// 	fmt.Println(Summation([10]uint{1, 2, 3, 4, 5, 6, 7, 8, 9, 0})) // => returns "(123) 456-7890"
// }

func Summation(n int) int {
	result := 0

	for i := 0; i <= n; i++ {
		result += i
	}

	return result
}
