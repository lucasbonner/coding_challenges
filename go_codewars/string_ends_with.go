/*
Complete the solution so that it returns true if the
first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution("abc", "bc") // returns true
solution("abc", "d") // returns false
*/
/*
PEDAC
Instructions:
Complete solution so that it returns true if first argument string ends with
the 2nd argument (also string)

input -> two strings
output -> boolean, based off if string1 ends in string 2

Examples:
solution("abc", "bc") // returns true
string1 -> 'abc'
string2 -> 'bc'

length of second string -> 2
take last two of string 1 -> 'a', 'bc'
'bc' === 'bc' -> true



solution("abc", "d") // returns false
string1 -> 'abc'
string2 -> 'd'

length of string2 -> 1
seperate last character of string 1 -> 'c'
'c' === 'd' -> false

Algo:
get length of second string
loop from length of string1 -> length of string2
	build a string from this
		compare endOfString to string2
			return value
*/
package main

import "fmt"

func solution(str, ending string) bool {
	if str == ending {
		return true
	} else if len(str) < len(ending) {
		return false
	}
	l2 := len(ending) - 1
	i := len(str) - 1
	for l2 >= 0 {
		if string(str[i]) != string(ending[l2]) {
			return false
		}
		l2--
		i--
	}
	return true
}

func main() {
	fmt.Println(solution("abc", "bc")) // returns true
	fmt.Println(solution("abc", "d"))  // returns false
	fmt.Println(solution("", ""))
	fmt.Println(solution(" ", ""))
	fmt.Println(solution("abc", "c"))
	fmt.Println(solution("banana", "ana"))
	fmt.Println(solution("a", "z"))
	fmt.Println(solution("", "t"))
	fmt.Println(solution("$a = $b + 1", "+1"))
	fmt.Println(solution("    ", "   "))
	fmt.Println(solution("1oo", "100"))
}
