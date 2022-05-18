/*
Given a string with multiple repeating characters
return the character that repeats the most
*/
/*
input -> string
output -> string (character that repeats the most)

Example:
"aaaabbbcccccccddde"
[aaaa, 4] + [bbb, 3] + [ccccccc, 7] + [ddd, 3] + [e, 1]
c is 7, which is the highest integer, so return c

"b"
single character, so return that character

"ezeebbo"
"e, 3" + "z", 1 + b, 2 + 0, 1
return e because it repeats most
also shows that character does not need to be next to each other


*/
package main

import (
	"fmt"
)

func main() {
	fmt.Println(highest_frequency_letter("aaaabbbcccccccddde")) // c
	fmt.Println(highest_frequency_letter("b"))                  // b
	fmt.Println(highest_frequency_letter("ezeebbo"))            // e
	fmt.Println(highest_frequency_letter(("fgyyyyyyyyyyiiiiiuuuuPpppppRRRRRRRRRRRRRRRRRRRR")))
}

func highest_frequency_letter(s string) string {
	result := map[string]int{}
	x := 0
	var resultString string

	for i := 0; i <= len(s)-1; i++ {
		result[string(s[i])]++
	}

	for k, v := range result {
		if v > x {
			resultString = k
			x = v
		}
	}

	return resultString
}
