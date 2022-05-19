package main

import (
	"fmt"
	"math"
	"strconv"
)

/*
Backwards Read Primes are primes that when read backwards in base 10 (from right to left) are a different prime. (This rules out primes which are palindromes.)

Examples:
13 17 31 37 71 73 are Backwards Read Primes

13 is such because it's prime and read from right to left writes 31 which is prime too. Same for the others.
Task

Find all Backwards Read Primes between two positive given numbers (both inclusive), the second one always being greater than or equal to the first one. The resulting array or the resulting string will be ordered following the natural order of the prime numbers.
Examples (in general form):

backwardsPrime(2, 100) => [13, 17, 31, 37, 71, 73, 79, 97] backwardsPrime(9900, 10000) => [9923, 9931, 9941, 9967] backwardsPrime(501, 599) => []

See "Sample Tests" for your language.


PEDAC
// input -- start of a range, end of a range (ints)
// output -- a slice of ints in which each int is a prime AND its reversed self is a prime


// ALGO
// set up an empty slice of ints

// helper function -- determine if a num is prime

// main
// iterate over the range of start to stop...
// -pass in the num to the helper to check if prime...

// -get the reversed num + again pass into helper to see if reverse if prime
// -if both num and reversed num are prime
// ...append the num to the slice

// return the slice

*/

// func isNotPalindrome(s string) bool {

// }

// func Reverse(s string) string {
// 	runes := []rune(s)
// 	for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
// 		runes[i], runes[j] = runes[j], runes[i]
// 	}
// 	return string(runes)
// }

func Reverse(s string) string {
	runes := []rune(s)
	for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
		runes[i], runes[j] = runes[j], runes[i]
	}
	return string(runes)
}

func isPrime(n int) bool {
	if n < 10 {
		return false
	}

	stop := int(math.Floor(math.Sqrt(float64(n))))

	for i := 2; i <= stop; i++ {
		if n%i == 0 {
			return false
		}
	}
	return true
}

func BackwardsPrime(start int, stop int) []int {
	result := []int{}

	for i := start; i <= stop; i++ {
		reversed, _ := strconv.Atoi(Reverse(strconv.Itoa(i)))
		if isPrime(i) && isPrime(reversed) && i != reversed {
			result = append(result, i)
		}
	}
	if len(result) != 0 {
		return result
	}
	return nil
}

func main() {
	fmt.Println(BackwardsPrime(2, 100))      // [13, 17, 31, 37, 71, 73, 79, 97]
	fmt.Println(BackwardsPrime(9900, 10000)) // [9923, 9931, 9941, 9967]
	fmt.Println(BackwardsPrime(501, 599))    // []
}
