/*
instructions:
  given array prices where prices[i] is the price of a given stock
  on the ith day

  want to maximize profit by choosing a single day to buy one stock and choosing
  a different day in the future to sell that stock

  return the maximum profit you can achieve from this transaction
  if you cannot achieve any profit, return 0

  input -> array (of stocks on given days)
  output -> integer (representing max profit you can achieve)

examples:
given -> [7, 1, 5, 3, 6, 4]
output -> 5

so essentially we want the biggest DIFFERENCE possible
the 5 output comes from 1 -> 6
6 - 1 is 5, this is the biggest possible profit

the next array is [7, 6, 4, 3, 1]
and returns 0 because it continues to go down in numbers
so array must consist of increasing numbers in order to have a max profit
to return

so looking at [7, 1, 5, 3, 6, 4]
not *efficient* but I could have two nested loops
one that starts from the first integer
  and goes thru the rest, subtracting one from the other
  add all to a collection
  and return the highest number (that is greater than 0)

actually as opposed to a collection i could have one variable
  biggestDifference
  and if the result of subtracting is greater than biggestDifference
    i reassign it

loops must start from i
example have i loop from 0 to length
  j loop must start at i and go to length


*/
/*
 let difference = num2 - num1;
      if (difference > biggestDifference) {
        biggestDifference = difference;
      }
*/

var maxProfit = function(prices) {
  let biggestDifference = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i; j < prices.length; j++) {
      let num1 = prices[i];
      let num2 = prices[j];

      let difference = (num2 - num1);
      if (difference > biggestDifference) {
        biggestDifference = difference;
      }
    }
  }
  return biggestDifference;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); //5
console.log(maxProfit([7, 6, 4, 3, 1])); //0
