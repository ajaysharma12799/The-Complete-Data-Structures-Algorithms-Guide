let arr = [];

console.log(typeof arr); // Object

/**
 * 
 * Different Ways to Create Array
 * 
 * 1. using []
 * 2. using new Array() constructor
 * 
 */

let numbers = new Array(); // Array Class Empty Constructor
numbers = new Array(1,2,3,4,5); // Array Class Constructor with Elements
numbers = new Array(10); // Array Class Constructor with Length

// You Can Verify numbers arrays with Array.isArray() method

console.log(numbers, numbers.length, Array.isArray(numbers));

// Create Array From String
var sentense = "Ajay Sharma is SDE at Rhym"
const words = sentense.split('');
console.log(words);


/**
 * String Representation of Array
 * 
 * 1. join()
 * 2. toString()
 * 
 * Convert Array of Strings into String
 */
const names = ["Ajay", "Chau", 'Kartik', "Risabh"];
const namesString1 = names.join();
const namesString2 = names.toString();
console.log(namesString1, namesString2);

/**
 * 
 * 1. every() # Return Boolean Value, When Condition satisfy each and every value
 * 2. some() ## Return Boolean Value, When Condition satisfy any one of value
 * 
 */

const evenNumbers = [2,4,6,8,10];
const oddNumbers = [3,5,7,9,11];

const result1 = evenNumbers.every((num) => num % 2 === 0);

const result2 = oddNumbers.some((num) => num % 2 !== 0);

if(result1) { // every() Result
    console.log("All Numbers are Even Numbers");
}
else {
    console.log("All Numbers are Odd Numbers");
}

if(result2) { // some() Result
    console.log("All Numbers are Odd Numbers");
}
else {
    console.log("All Numbers are Even Numbers");
}

/**
 * 
 * Jagged or Ragged Array: When we have different number of values each array row
 * 
 */

const grades = [ 
    [50, 60],
    [50, 60, 70], 
    [50, 60, 70, 80],
    [50, 60, 70, 80, 90]
];

var total = 0;
var average = 0.0;

for(let row = 0; row < grades.length; row++) { // Looping Over Entire Grades Array

    for(let cols = 0; cols < grades[row].length; cols++) {
        // Looping Over Each Small Array inside Grades Array
        total += grades[row][cols];
    }

    average = total / grades[row].length;

    console.log(`Student ${row + 1} Average: ${average}`);
}