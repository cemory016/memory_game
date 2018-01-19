/* console.log("Up and Running!");
var cardOne = "queen"
var cardTwo = "queen"
var cardThree = "king"
var cardFour = "king"
console.log("User Flipped" + cardOne);
console.log("User Flipped" + cardThree);
*/

/*var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);
if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
	alert("you found a match!");
}
else {
	alert("Sorry, try again.");
}*/

/*if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
		alert("you found a match!");
	}
	else {
		alert("Sorry, try again.");
	}*/

var cards = [
	{
		rank: 'queen',
		suit: 'hearts',
		cardImage: 'Images/queen-of-hearts.png',
	},
	{
		rank: 'queen',
		suit: 'diamonds',
		cardImage: 'Images/queen-of-diamonds.png',
	},
	{
		rank: 'king',
		suit: 'hearts',
		cardImage: 'Images/king-of-hearts.png',
	},
	{
		rank: 'king',
		suit: 'diamonds',
		cardImage: 'Images/king-of-diamonds.png',
	},
];
var cardsInPlay = []; 

var checkForMatch = function () {
	console.log(this);
	if (cardsInPlay.length === 2) {

		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		} else {
			alert("sorry, try again.");
    	}
	}
}

var flipCard = function() {
	console.log(this);
	var cardId = this.getAttribute('data-id');
	console.log("user flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	this.setAttribute('src', cards[cardId].cardImage);
	checkForMatch();
	
}

var createBoard = function(){
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);

	}
}
createBoard();
