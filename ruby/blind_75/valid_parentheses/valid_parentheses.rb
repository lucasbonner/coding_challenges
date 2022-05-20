=begin
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.


Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false

instructions
given a string 's' containing just the characters '(' ')' '{' '}' '[' ']' see if input string is valid
open brackets must be closed by the same type of brackets
open brackets must be closed in the correct order (! that's the hard part)

  input -> array of brackets
  output -> bool based off how brackets close

examples
Input: s = "()"
Output: true

form array ['(', ')']
iterate
get open '('
following get close ')'

all parenthese closed

Input: s = "()[]{}"
Output: true

['(', ')', '[', ']', '{', '}']
add open parens '('
then closed so remove

add open parens '['
then find closer so close ']'

add open parens '{'
then closed so remove

s = "(]"
['(', ']' ]

open parens add to open list
wrong closer

pseudo/algo

initialize 'currOpen' array
initialize hash to show correct closer i.e. (associater)
  {')' -> '('}
initialize 'openers' to hold all openers
initialze 'closers' to hold all closers

iterate thru s as chars
if elem is included in openers
  add to currOpen
if elem is included in closers
  see if currOpen includes associated opener
    if it does, remove that element and continue


=end
#'(', ')', '{', '}', '[' and ']
def is_valid(s)
  associater = {
    '(' => ')',
    '{' => '}',
    '[' => ']',
  }
  openers = ['(', '{', '[']
  closers = [')', '}', ']']

  s.chars.each do |char|
    if openers.include?(char)
      currOpen = char
      next
    end

    if currOpen && char != associater[currOpen]
      return false
    end

    if closers.include?(char) && char != associater[currOpen]
     return false
    end
  end

  return true
end

p is_valid("()") #true
p is_valid("()[]{}") #true
p is_valid("(]") #false
p is_valid("([)]") #false
p is_valid("(]") #false