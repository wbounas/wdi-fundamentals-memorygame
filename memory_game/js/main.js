console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var cardOne = cards[0];
	cardsInPlay.push(cards[0]);
	console.log("User flipped " + cardsInPlay[0]);

var cardTwo = cards[2];
	cardsInPlay.push(cards[1]);
	console.log("User flipped " + cardsInPlay[1]);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}