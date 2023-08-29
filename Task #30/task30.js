// Hello Admin: Make a array of five or more usernames, including the name 'admin'.
// Imagine you are writing code that will print a greeting to each user after they log in
// to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you
// like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again
// Array of User names:
var user_Names = ["Arsalan", "Umair", "Luqman", "Admin", "Nouman", "Marwan", "Farhan"];
// Loop through the array
for (var l = 0; l < user_Names.length; l++) {
    if (user_Names[l] == "Admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(user_Names[l], ", thank you for logging in again"));
    }
}
