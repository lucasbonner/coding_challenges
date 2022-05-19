=begin
The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Output
Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

Instructions:
  based off the input arrays ([age, handicap]) produce whether this subset is 'Open' or 'Senior'

  input -> array of subarrays of ints
  output -> array of strings

Senior -> first value >= 55, second value > 7
Open ->  not the first two values

Examples:
[45, 12]
age 45 (below senior) so OPEN

[3, 12]
age 3 (below senior) so OPEN

[59, 12]
age is 59 (above senior)
handicap is greater than 7
so SENIOR

=end
def transform(subarr)
  if (subarr[0] >= 55 && subarr[1] > 7) then
    return 'Senior'
  end

  'Open'
end

def open_or_senior(data)
  data.map { |subarr| transform(subarr) }
end

p open_or_senior([[45, 12],[55,21],[19, -2],[104, 20]])#,['Open', 'Senior', 'Open', 'Senior'])
p open_or_senior([[3, 12],[55,1],[91, -2],[54, 23]]) #,['Open', 'Open', 'Open', 'Open'])
p open_or_senior([[59, 12],[55,-1],[12, -2],[12, 12]]) #,['Senior', 'Open', 'Open', 'Open'])
p open_or_senior([[16, 23],[73,1],[56, 20],[1, -1]]) #,['Open', 'Open', 'Senior', 'Open'])

