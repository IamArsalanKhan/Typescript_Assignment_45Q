"use strict";
// Cities: Write a function called describe_city() that accepts the name of a city and its
// country. The function should print a simple sentence, such as Karachi is in Pakistan.
// Give the parameter for the country a default value. Call your function for three
// different cities, at least one of which is not in the default country.
// Creating a Function
function describe_city(name, country = "Pakistan") {
    console.log(`${name} is in ${country}`);
}
// Calling three different countries
describe_city("Berlin", "Germany");
describe_city("Islamabad"); // Calling a default value country
describe_city("Rome", "Italy");
