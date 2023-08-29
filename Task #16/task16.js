// More Guests: You just found a bigger dinner table, so now more space is available.
// Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your
// program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest
// to the end of your list. • Print a new set of invitation messages, one for each person in
// your list.
var invitationList = ["Jawad", "Mansoor", "Wahab", "Zakir", "Nouman"];
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
invitationList.splice(2, 0, "Shakir");
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
