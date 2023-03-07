/* QUESTION 1
Mutating array methods are methods that change the array itself instead of returning a new array with the new changes.
Examples of mutating array methods are: push(), shift(), unshift(), pop() and reverse().

Non-mutating array methods do not change the array itself when they return a new aray.
Examples are: slice(), concat(), map(), filter() and flat().
*/


//QUESTION 2
const languages = ["C#", "JavaScript", "Ruby", "PHP", "Python"];

// Add ‘Kotlin’ to the end of the array
languages.push("Kotlin");
// console.log(languages);

// Add ‘Java’ after ‘Ruby’
languages.splice(3, 0, "Java");
// console.log(languages);

// Remove the first item in the array
languages.shift();
// console.log(languages);

// Add ’Scala’ and ‘Swift’ to the beginning of the array
languages.unshift("Scala", "Swift");
// console.log(languages);

// Replace ‘PHP’ with ‘Go’ and ‘Rust’
languages.splice(5,1, "Go", "Rust");
// console.log(languages);


/*QUESTION 3
What will be the value of fruit after calling the function changeFruit? 
let fruit = ['apple', 'mango', 'banana'];
		function changeFruit( fruit ) {
    			fruit[2] = "orange";
    			return fruit;
		}
*/
fruit = ['apple', 'mango', 'orange'];


/* QUESTION 4
Write a function that accepts an array of numbers as an argument. Return the maximum value in the array.
*/
function getMaxOfArray(arr) {
    let maxValue = 0
    for (i=0; i<arr.length; i++) {
        if (arr[i] > maxValue)
        {maxValue = arr[i]}
    }
    return maxValue
}
console.log(getMaxOfArray([7, 15, 9]));

//QUESTION 5
function valTimesIndex(number){
    return number.map((value, index) => value * index)
}

let array = [1, 2, 3];
newArray = valTimesIndex(array);
console.log(newArray)