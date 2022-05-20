package main

import (
	"fmt"
	"strings"
)

func includes(s []string, char string) bool {
	for _, v := range s {
		if v == char {
			return true
		}
	}
	return false
}

func isValid(s string) bool {
	stack := []string{}
	chars := strings.Split(s, "")
	associater := map[string]string{
		"(": ")",
		"{": "}",
		"[": "]",
	}
	openers := []string{"(", "{", "["}

	for i := 0; i < len(chars); i++ {
		if includes(openers, string(chars[i])) {
			stack = append(stack, chars[i])
			continue
		}

		endOfStack := len(stack) - 1
		if chars[i] == associater[stack[endOfStack]] {
			stack = append(stack[:endOfStack])
			continue
		}
		return false
	}
	return len(stack) == 0
}

func main() {
	fmt.Println(isValid("()"))     // true
	fmt.Println(isValid("()[]{}")) //true
	fmt.Println(isValid("(]"))     //false
	fmt.Println(isValid("]"))
}
