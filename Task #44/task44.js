"use strict";
// Sandwiches: Write a function that accepts a array of items a person wants on a
// sandwich. The function should have one parameter that collects as many items as
// the function call provides, and it should print a summary of the sandwich that is
// being ordered. Call the function three times, using a different number of
// arguments each time.
// Making a function for sandwiches.
function sandwiches(...items) {
    console.log("Summary of Sandwich that is being ordered");
    console.log("******************************************************");
    for (const item of items) {
        console.log(" " + item);
    }
}
// Calling a function
sandwiches("Cheez", "Italian", "Meat");
sandwiches("Chiken", "Turkey", "Tomato");
// function orderSandwich(...items: any) {
//     console.log("Sandwich Order Summary:");
//     if (items.length === 0) {
//       console.log("You ordered an empty sandwich. Please add some items.");
//     } else {
//       console.log("You ordered a sandwich with:");
//       for (let item of items) {
//         console.log("- " + item);
//       }
//     }
//     console.log("-------------------------------");
//   }
//   // Call the function with different numbers of arguments
//   orderSandwich("Turkey", "Lettuce", "Tomato", "Mayonnaise");
//   orderSandwich("Ham", "Cheese");
//   orderSandwich("Peanut Butter", "Jelly");
