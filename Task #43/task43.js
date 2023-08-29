"use strict";
// Unchanged Magicians: Start with your work from Exercise 42. Call the function
// make_great() with a copy of the array of magicians’ names. Because the original
// array will be unchanged, return the new array and store it in a separate array. Call
// show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.
// Array of Magicians
const magicians = ["Arsalan Khan", "Umair ali", "Luqman", "Nouman"];
// Making a functio fo show magicians names
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(`${magician}`);
    }
}
// Making a function make_great
function make_great(magicians) {
    for (const magician of magicians) {
        console.log(`The great ${magician}`);
    }
}
// Calling the functions
// Copy of great magicians
let great_magicians = make_great(magicians);
console.log("\n*****************************************************8");
// Calling the Original Magicians
show_magicians(magicians);
