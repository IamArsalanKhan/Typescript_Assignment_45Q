// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is
// printed

// Array of User names:
const user_Names = ["Arsalan", "Umair", "Luqman", "Admin", "Nouman", "Marwan", "Farhan"];

if(user_Names.length == 0)
{
    console.log("We need to find some users!");
    
}

    for(let p = 0; p < user_Names.length; p++)
    {
        if(user_Names[p] == "Admin")
        {
            console.log("Hello, Admin Would like to see the status report?");
            
        }

        else{
            console.log(`Hello ${user_Names[p]}, Welcome back`);
            
        }
    }

// Remving all usernames from the array:

for(let i = 0; i < 7; i++)
{
    user_Names.shift();
}

console.log(user_Names.length);


if(user_Names.length == 0)
{
    console.log("We need to find some users!");
    
}

