/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
package main

import (
	"fmt"
)

func mergeTwoLists(list1 *ListNode, list2 *ListNode) *ListNode {
	dummy := ListNode{}
	dummy.Next = nil
	tail := &dummy
}

func main() {
	fmt.Println(mergeTwoLists([], [])) //[]
	fmt.Println(mergeTwoLists([], [0])) //[0]
}