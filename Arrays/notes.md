#### Arrays

```
console.log(typeof []) # Object
```

#### Note:- When we use index to get value from array, then that value is internally converted into string in order to conform the requirement of JavaScript Objects. This is because JavaScript arrays are just Objects and are not efficient as arrays of other programming language.

#### Note: When you assign one array to another you only assign reference to the assigned array, so when you make change in one array then that is going to affect the other array as well and that is know as Shallow Copy, so in order to prevent that you can make Deep Copy.

```
const names = ["Ajay", "Chau", "Rohit", "Kartik"];
const sortedNames = names.sort();
console.log(sortedNames); # [ 'Ajay', 'Chau', 'Kartik', 'Rohit' ]

const nums = [1,5,2,100,6,200]
const sortedResult = nums.sort((a, b) => { # Comparator Function
    return a - b;
});
console.log(sortedResult); # [1,2,5,6,100,200]

```

#### When we use sort() on array of Strings then it sort all strings Lexographically but when we have array of numbers and then also we get our output wrong this is because sort method consider each and every value as String in-order to perform Sort() method well on numbers we need to paas compare() method then will Sort array of elements Numerically not Lexographically