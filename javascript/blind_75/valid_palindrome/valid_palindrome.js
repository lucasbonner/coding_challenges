/*
instructions:
a phrase is a palindrome if, after converting all uppercase letters
into lowercase letters and removing all non-alphanumeric
characters, it reads the same forward and backward
alphanumeric characters include letters and numbers

given a string s, return true if it is a palindrome, false otherwise

  rules:
    remove all non-alphanumeric characters from string
    only letters an numbers

    conver all uppercase to lowercase characters

  input -> string
  output -> boolean (based off palindrome check)

Examples:
"A man, a plan, a canal: Panama" -> AmanaplanacanalPanama
AmanaplanacanalPanama <-> AmanaplanacanalPanama true

"race a car" -> raceacar
raceacar <--> racaecar false

" " -> ""
"" <-> "" true

algo/pseudo
first lowercase string and strip of non-alphanumerics
  (either alphabet match or regex)
split and reverse and see if equals self

*/

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('');

var alphanumerics = function(char) {
  return ALPHABET.includes(char);
}

var isPalindrome = function(s) {
  s = s.toLowerCase().split('').filter(alphanumerics).join('');
  console.log(s);
  return s === s.split('').reverse().join('');
}

// console.log(isPalindrome("A man, a plan, a canal: Panama")); //true
// console.log(isPalindrome("race a car")); //false
// console.log(isPalindrome(" ")); //true
console.log(isPalindrome("0P")); //false
//forgot to add numbers to the filtering