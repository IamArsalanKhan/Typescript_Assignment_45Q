"use strict";
// Magicians: Make a array of magician’s names. Pass the array to a function called
// show_magicians(),
//  which prints the name of each magician in the array.
// Array of Magicians
const magicians = ["Arsalan Khan", "Umair ali", "Luqman", "Nouman"];
// Making a functio fo show magicians names
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(`${magician}`);
    }
}
// Calling the function
show_magicians(magicians);
