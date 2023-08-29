"use strict";
// Cars: Write a function that stores information about a car in a Object. The function
// should always receive a manufacturer and a model name. It should then accept an
// arbitrary number of keyword arguments. Call the function with the required
// information and two other name-value pairs, such as a color or an optional feature.
// Print the Object that’s returned to make sure all the information was stored
// correctly
// Making a function for Car info
function car_info(m_name, manufacturer, ...option) {
    const car = {
        modelName: m_name,
        manufacturer: manufacturer
    };
    return car;
}
console.log("Toyota", "camry", "color", "red", "year", "2022");
