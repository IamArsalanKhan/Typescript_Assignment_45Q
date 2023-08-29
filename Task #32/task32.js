// Checking Usernames: Do the following to create a program that simulates how
// websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the
// new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used.
// If it has, print a message that the person will need to enter a new username. If a
// username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should
// not be accepted.
var current_users = ["Arsalan", "Umair", "LuQman", "Ahmad", "Jamal", "Ronaldo"];
var new_users = ["Luqman", "Umair", "Sadam", "Jawad", "Nouman", "Messi"];
var current_users_Lower = current_users.map(function (user) { return user.toLowerCase(); });
for (var new_user in new_users) {
    var new_users_Lower = new_user.toLowerCase();
    if (current_users_Lower.includes(new_users_Lower)) {
        console.log("The username ".concat(new_user, " is already taken. Please enter a new username."));
    }
    else {
        console.log("The Username ".concat(new_user, " is Available"));
    }
}
