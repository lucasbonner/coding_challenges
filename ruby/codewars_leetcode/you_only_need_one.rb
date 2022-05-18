=begin
You will be given an array a and a value x.
All you need to do is check whether the provided
array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.
=end

def check(arr,element)
  #your code here
end

check([66, 101], 66) # true)
check([78, 117, 110, 99, 104, 117, 107, 115], 8) # false)
check([101, 45, 75, 105, 99, 107], 107) # true)
check(["t", "e", "s", "t"], "e") # true)
check(["what", "a", "great", "kata"], "kat") # false)
check([66, "codewars", 11, "alex loves pushups"], "alex loves pushups") # true)
check(["come", "on", 110, "2500", 10, "!", 7, 15], "Come") # false)
check(["when's", "the", "next", "Katathon?", 9, 7], "Katathon?") # true)
check([8, 7, 5, "bored", "of", "writing", "tests", 115], 45) # false)
check(["anyone", "want", "to", "hire", "me?"], "me?") # true)