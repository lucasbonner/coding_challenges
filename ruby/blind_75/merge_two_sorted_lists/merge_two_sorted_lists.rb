# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} list1
# @param {ListNode} list2
# @return {ListNode}

def merge_two_lists(list1, list2)
  if !list1 || !list2
     return list1 ? list1 : list2
  end

  currentNode = list1.val < list2.val ? list1 : list2
  result = currentNode
  list1 = currentNode == list1 ? list1.next : list1
  list2 = currentNode == list2 ? list2.next : list2

  while list1 || list2
      if !list1 || !list2
         currentNode.next = !list1 ? list2 : list1
          break
      end

      if list1.val < list2.val
         currentNode.next = list1
          list1 = list1.next
      else
          currentNode.next = list2
          list2 = list2.next
      end

      currentNode = currentNode.next
  end
  result
end

# p merge_two_lists([1,2,4], [1,3,4]); #[1,1,2,3,4,4]
# p merge_two_lists([], []); #[]
# p merge_two_lists([], [0]); #[0]
