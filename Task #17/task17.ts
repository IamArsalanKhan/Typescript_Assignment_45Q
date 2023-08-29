// Shrinking Guest List: You just found out that your new dinner table won’t arrive in
// time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying
// that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list.
// Each time you pop a name from your list, print a message to that person letting them
// know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re
// still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to
// make sure you actually have an empty list at the end of your program.

const invitationList = ["Jawad", "Mansoor", "Wahab", "Zakir", "Nouman"];

console.log("Mr. " + invitationList[0] + ", you are invited to today's dinner at my home");

console.log("Mr. " + invitationList[1] + ", you are invited to today's dinner at my home");

console.log("Mr. " + invitationList[2] + ", you are invited to today's dinner at my home");

console.log("Mr. " + invitationList[3] + ", you are invited to today's dinner at my home");

console.log("Mr. " + invitationList[4] + ", you are invited to today's dinner at my home");

console.log("Mr. " + invitationList[3] + " can't make it"); // Zakir can't come to dinner

invitationList.splice(3, 1, "Tahir"); // We are replacing Zakir by Tahir

console.log("Mr. " + invitationList[0] + ", you are invited to today's dinner at my home");

console.log("Mr. " + invitationList[1] + ", you are invited to today's dinner at my home");

console.log("Mr. " + invitationList[2] + ", you are invited to today's dinner at my home");

console.log("Mr. " + invitationList[3] + ", you are invited to today's dinner at my home");

console.log("Mr. " + invitationList[4] + ", you are invited to today's dinner at my home");

console.log("My Dear friends We have found a bigger dinner Table");

// Adding an element at the startin point
invitationList.unshift("Umair Ali");

// Adding an element at the middle point
invitationList.splice(2,0, "Shakir");

// Adding an element at the end point
invitationList.push("Adnan Zeb");

// Updated Invitation List
console.log(invitationList);

console.log("Mr. " + invitationList[0] + ", you are invited to today's dinner at my home");

console.log("Mr. " + invitationList[1] + ", you are invited to today's dinner at my home");

console.log("Mr. " + invitationList[2] + ", you are invited to today's dinner at my home");

console.log("Mr. " + invitationList[3] + ", you are invited to today's dinner at my home");

console.log("Mr. " + invitationList[4] + ", you are invited to today's dinner at my home");

console.log("Mr. " + invitationList[5] + ", you are invited to today's dinner at my home");

console.log("Mr. " + invitationList[6] + ", you are invited to today's dinner at my home");

console.log("Mr. " + invitationList[7] + ", you are invited to today's dinner at my home");

console.log("I can invite only two people for dinner because of Table");

// Remove guests from your list one at a time until only two names remain in your list.
// Each time you pop a name from your list, print a message to that person letting them
// know you’re sorry you can’t invite them to dinner

console.log(invitationList.pop(), "I'm sorry I can't invite you to dinner");

console.log(invitationList.pop(), "I'm sorry I can't invite you to dinner");

console.log(invitationList.pop(), "I'm sorry I can't invite you to dinner");

console.log(invitationList.pop(), "I'm sorry I can't invite you to dinner");

console.log(invitationList.pop(), "I'm sorry I can't invite you to dinner");

console.log(invitationList.pop(), "I'm sorry I can't invite you to dinner");

// Print a message to each of the two people still on your list, letting them know they’re
// still invited.

console.log("Mr. "+invitationList[0]+ " You are still invited");

console.log("Mr. "+invitationList[1]+ " You are still invited");

// Remove the last two names from your list, so you have an empty list. Print your list to
// make sure you actually have an empty list at the end of your program

invitationList.pop();
invitationList.pop();

console.log(invitationList);







