//   * `letter.js` should control whether or not a letter appears as a "_" or as itself on-screen.


var game = require("./game.js");				//The randomly chosen word comes from game.js
var wordLetters = game.toLetterJS;

var word = require("./word.js")					//After correct or not has been determined
var correctGuesses = word.toLetterJS;

var correctGuessesInOrder = [];

function displayNewGuess () {
	//If there are no correctGuesses,
	//For the number of letters in the bands name, fill the displayed guesses with an underscore.
	if (correctGuesses.length == 0){
		for (var i =0; i<wordLetters.length; i++){
			correctGuessesInOrder[i] = "_";
		}
	}
	else {
		//For the length of the bands name,
		for (var i=0; i<wordLetters.length; i++){
			//If the displayed guess is not the same as wordLetters at index i,
			if (correctGuessesInOrder[i] != wordLetters[i]){
				//Loop for correctGuesses length number of times,
				for (var j=0; j<correctGuesses.length; j++){
					//If the correctGuesses at j is equal to wordLetters at i, the displayedGuess becomes the bandletter at index i
					if (correctGuesses[j] == wordLetters[i]){
						correctGuessesInOrder[i] = wordLetters[i];
					}
					//Otherwise the displayedGuess at index i (corresponding to the band letter's indexes) becomes an underscore.
					else {
						correctGuessesInOrder[i] = "_";
					}
				}
			}
		}
	}
}

displayNewGuess();
console.log(correctGuessesInOrder.join(" "));




