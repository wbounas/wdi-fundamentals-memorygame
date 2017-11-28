console.log("Up and running!");

var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"	
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];

var cardsInPlay = [];

var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
};

var flipCard = function () {
	var cardId = this.getAttribute('data-id');

	console.log('User flipped ' + cards[cardId].rank);

	cardsInPlay.push(cards[cardId].rank);

	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

	this.setAttribute('src', cards[cardId].cardImage);

	if (cardsInPlay.length === 2) {
		checkForMatch();
		scoreBoard();
	}
};


var board = document.getElementById('game-board');

var reset = function () {
	//remove the cards from the board
	while(board.hasChildNodes()){
    	board.removeChild(board.firstChild);
	}
  	//remove elements from the cardsInPlay array
	cardsInPlay = [];
	//create a new board
	createBoard();
};


var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

var scoreBoard = function () {
	if (cardsInPlay.length === 0) {
		console.log('You can now begin the game!');
	} else if (cardsInPlay[0] === cardsInPlay[1]) {
		playerScore += 1;
		console.log('Nice Job, Yo! Player has ' + playerScore + ' points!');
	} else {
		playerScore -= 1;
		console.log('Bummer! Player has ' + playerScore + ' points!');
	}
}

var playerScore = 0;

function shuffleArray(cardsInPlay) {
    for (var i = cardsInPlay.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = cardsInPlay[i];
        cardsInPlay[i] = cardsInPlay[j];
        cardsInPlay[j] = temp;
    }
}

/*
var reset = function () {
cardsInPlay = [];
createBoard();
};
*/

var board = document.getElementById('game-board');

document.getElementById('reset').addEventListener('click', reset);
document.getElementById('reset').addEventListener('click', shuffleArray);

scoreBoard();
createBoard();





