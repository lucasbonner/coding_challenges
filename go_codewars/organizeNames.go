// To execute Go code, please declare a func main() in a package "main"
/*
https://www.codewars.com/kata/59df2f8f08c6cec835000012


John has invited some friends. His list is:

s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

Could you make a program that

    makes this string uppercase
    gives it sorted in alphabetical order by last name.

When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

So the result of function meeting(s) will be:

"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"

It can happen that in two distinct families with the same family name two people have the same first name too.
*/
/*
type ByAge []Person

func (a ByAge) Len() int           { return len(a) }
func (a ByAge) Less(i, j int) bool { return a[i].Age < a[j].Age }
func (a ByAge) Swap(i, j int)      { a[i], a[j] = a[j], a[i] }

Example:
"Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"

: -> ,
; -> )(
first, last -> last, first
organized by last name alphabetical
  -> if same last name organize by first name

"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"

Algo:
split by ';'



*/

package main

import (
	"fmt"
	"sort"
	"strings"
)

func main() {
	names := "Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn"
	names2 := "Alex:Arno;Alissa:Cornwell;Sarah:Bell;Andrew:Dorries;Ann:Kern;Haley:Arno;Paul:Dorny;Madison:Kern"
	fmt.Println(sortNames(names))
	// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
	fmt.Println(sortNames(names2))
	// "(ARNO, ALEX)(ARNO, HALEY)(BELL, SARAH)(CORNWELL, ALISSA)(DORNY, PAUL)(DORRIES, ANDREW)(KERN, ANN)(KERN, MADISON)"
}

/*
type Person struct {
    Name string
    Age  int
}
   family := []Person{
        {"Alice", 23},
        {"Eve", 2},
        {"Bob", 25},
    }

    people := []Person{
      {"Alexis", "Wahl"}


type ByAge []Person

func (a ByAge) Len() int           { return len(a) }
func (a ByAge) Less(i, j int) bool { return a[i].Age < a[j].Age }
func (a ByAge) Swap(i, j int)      { a[i], a[j] = a[j], a[i] }
*/

// type ByLastName []Person

// https://gobyexample.com/structs

/*
   sort.Sort(ByAge(family))

   // strings.ToUpper()
*/

type Person struct {
	firstName string
	lastName  string
}

type ByLastName []Person

func (a ByLastName) Len() int           { return len(a) }
func (a ByLastName) Less(i, j int) bool { return a[i].lastName < a[j].lastName }
func (a ByLastName) Swap(i, j int)      { a[i], a[j] = a[j], a[i] }

func sortNames(s string) string {
	result := ""
	people := []Person{}

	res1 := strings.Split(s, ";")

	for i, _ := range res1 {
		name := strings.Split(res1[i], ":")
		p := Person{strings.ToUpper(name[0]), strings.ToUpper(name[1])}

		people = append(people, p)
	}
	sort.Sort(ByLastName(people))

	for i, _ := range people {
		iterationStr := "("
		iterationStr += people[i].lastName
		iterationStr += ","
		iterationStr += people[i].firstName
		iterationStr += ")"
		result += iterationStr
	}

	return result
}
