// In this Kata, you will be given a string and your task will be to return the length of the longest prefix that is also a suffix. A prefix is the start of a string while the suffix is the end of a string. For instance, the prefixes of the string "abcd" are ["a","ab","abc"]. The suffixes are ["bcd", "cd", "d"]. You should not overlap the prefix and suffix.

//substrings combined length cannot be greater than input string
//loop over from 0, collect prefix in array up until last character (exclusive)
//opposite loop, collect suffix up until first character (exclusive)

// initialize a longest_prefix var to 0
//loop over prefix array
//compare to suffix
//return length of element who appears in suffix array && combined length wt suffix <= input string

package main

func solve(s string) int {
	prefixes := []string{}
	suffixes := []string{}
	str := ""

	for i := 0; i < len(s)-1; i++ {
		str += string(s[i])
		prefixes = append(prefixes, str)
	}

	str = ""

	for i := 1; i <= len(s)-1; i++ {
		str = ""
		str += s[i:len(s)]
		suffixes = append(suffixes, str)
	}

	result := []string{}

	for i := 0; i <= len(prefixes)-1; i++ {
		for i2 := 0; i2 <= len(suffixes)-1; i2++ {
			if prefixes[i] == suffixes[i2] {
				result = append(result, prefixes[i])
			}
		}
	}

	length := 0

	for i := 0; i <= len(result)-1; i++ {
		if len(result[i])*2 <= len(s) {
			length = len(result[i])
		}
	}

	return length
}

func main() {
	solve("abcd")    // ["a","ab","abc"] + ["bcd", "cd", "d"] -> 0
	solve("abcda")   // ["a","ab","abc", "abcd"] + ["bcda", "cda", "da", "a"] -> 1
	solve("abcdabc") //'abc' + 'abc' == 'abcabc'
	solve("aaaa")    // ['a', 'aa', 'aaa'] + ['aa', 'aaa', 'a']  'aaa' + 'aaa' != 'aaaa'
	solve("aa")
	solve("a")
}

// for example:
// solve("abcd") = 0, //because no prefix == suffix.
// solve("abcda") = 1, //because the longest prefix which == suffix is "a".
// solve("abcdabc") = 3. //Longest prefix which == suffix is "abc".
// solve("aaaa") = 2. //Longest prefix which == suffix is "aa". You should not overlap the prefix and suffix
// solve("aa") = 1. //You should not overlap the prefix and suffix.
// solve("a") = 0. //You should not overlap the prefix and suffix.
