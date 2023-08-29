"use strict";
// City Names: Write a function called city_country() that takes in the name of a city
// and its country. The function should return a string formatted like this :
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s
// returned.
// Creating a function
function city_country(name, country) {
    return `${name}, ${country}`;
}
// Calling the function
console.log(city_country("Paris", "France"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Delhi", "India"));
