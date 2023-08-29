"use strict";
// Great Magicians: Start with a copy of your program from Exercise 41. Write a
// function called make_great() that modifies the array of magicians by adding the
// phrase the Great to each magician’s name. Call show_magicians() to see that the
// list has actually been modified.
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
show_magicians(magicians);
make_great(magicians);
