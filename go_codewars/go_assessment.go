/*
Define a struct of type dog with two fields: name and breed.
Then, within a function create a dog and print out its name and breed.
*/

package main

import (
	"fmt"
)

func main() {
	c := make(chan<- int, 2)
	c <- 42
	c <- 43
	fmt.Println(<-c)
	fmt.Println(<-c)
}
