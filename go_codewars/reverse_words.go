package main

import (
	"fmt"
	"strings"
)

func ReverseWords(str string) string {
	result := strings.Split(str, " ")
	var result1 string
	var length = (len(result) - 1)

	for i := length; i >= 0; i-- {
		result1 += result[i]
		result1 += " "
	}
	return result1
}

func main() {
	fmt.Println(ReverseWords("hello world!"))                 //"world! hello"
	fmt.Println(ReverseWords("yoda doesn't speak like this")) // "this like speak doesn't yoda"
	fmt.Println(ReverseWords("foobar"))                       // "foobar"
	fmt.Println(ReverseWords("kata editor"))                  // "editor kata"
	fmt.Println(ReverseWords("row row row your boat"))        // "boat your row row row"
}
