// Javascript Array
const words = ['hello', 'world', 'almabetter'];
// Two ways to create an Array
// 1. Array literal
let fruits = ['apple', 'banana', 'orange'];
// 2. Array Constructor
let numbers = new Array(3);
// Note: It is recommended to create arrays using array literals instead of other methods.
let myArray = [
    1, "Hello", true, [2,4,6],
    {
        name: "John",
        age: 30
    },
    function() {
        console.log("This is a function inside an array");
    }
];
console.log(myArray[3][1]); // Output: 4
myArray[5](); // Output: this is a function inside an array
// Accessing Array Elements
console.log(fruits[0]); // output: "apple"

// Adding element to an Array
// 1. push()
let myArray2 = [1,2,3];
myArray2.push(4);
console.log(myArray2);
// 2. unshift()
fruits.unshift('grape');
console.log(fruits);