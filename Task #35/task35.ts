// Animals: Think of at least three different animals that have a common
// characteristic. Store the names of these animals in a list, and then use a for loop to
// print out the name of each animal. • Modify your program to print a statement
// about each animal, such as A dog would make a great pet. • Add a line at the end
// of your program stating what these animals have in common. You could print a
// sentence such as Any of these animals would make a great pet!

// Array of common characteristic animals
const animals:string[] = ["Cow", "Goat", "Camel"];

console.log("Animals name that are common in characteristics");

// Printing array each elements
for(const  animal of animals)
{
    console.log(animal);   
}

console.log("\n***********************************************************");

// printing statement about the animals
for(const animal of animals)
{
    console.log(`A ${animal} is a good source of milk`);
}

// Print sentence about these animals
console.log("All these animal gives milk");
