/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the
letters of a different word or phrase, typically using all the original
letters exactly once.

instructions:
  given two strings, return true if they are anagrams of each other

  input -> two strings
  output -> boolean (based off whether anagrams or not)

examples:
"anagram" and "nagaram"
anagram sorted is aaagmnr
nagaram sorted is aaagmnr

should be able to just use sorted strings to return a bool
*/
var sortAlphabetically = function(a, b) {
  if (a < b) {
    return -1;
  }

  if (a > b) {
    return 1;
  }

  return 0;
}

var isAnagram = function(s, t) {
  return s.split('').sort(sortAlphabetically).join('') === t.split('').sort(sortAlphabetically).join('');
};

console.log(isAnagram("anagram", "nagaram")); //true
console.log(isAnagram("rat", "car")); //false
