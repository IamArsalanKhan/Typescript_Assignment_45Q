// Changing Guest List: You just heard that one of your guests can’t make the dinner,
// so you need to send out a new set of invitations. You’ll have to think of someone
// else to invite
// • Start with your program from Exercise 14. Add a print statement at the end of your
// program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of
// the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list
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
