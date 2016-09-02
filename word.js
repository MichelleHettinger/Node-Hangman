//This JS takes in the word's letters from game.js and the user input from main.js to determine
//if any repeats or previous matches exist. Then it exports the the array of correct guesses to letter.js

var game = require("./game.js");				//The randomly chosen word comes from game.js
var wordLetters = game.toWordJS;


var main = require("./main.js");				//The user input comes from main.js
var currentLetter = main.toWordJS;

var wordObject = {
	allGuesses:[],
	wordLetters:[],
	incorrectGuesses:[],
	correctGuesses:[],
	correctGuessesInOrder:[],
	isMatch:null,
	isRepeat:null,
	guessesRemaining: 15,
	loseCount: 0,
	winCount: 0,


	checkRepeat: function(){
		var repeatCounter = -1;

		//Loop for the number of guesses previously made amount of times.
		//If the current letter equals one from the array of allGuesses, the counter variable counts up one.
		for (var i=0; i < this.allGuesses.length; i++){
			if (currentLetter == this.allGuesses[i]){
				repeatCounter++;
			}
		}
		//If counter is zero, the global isRepeat variable becomes false (signifying no matches found)
		//Otherwise a match was found and isRepeat becomes true.
		if (repeatCounter == 0){
			this.isRepeat = false;
		}
		else{
			this.isRepeat = true;
		}
	},
	checkMatch: function (){
		var matchCounter = 0;

		//Loop for the band names length amount of times.
		//If the guessed letter is equal to the the bands letter at a given index, the counter variable counts up one.
		for (var i=0; i < this.wordLetters.length; i++){
			if (currentLetter == this.wordLetters[i]){
				matchCounter++;
			}
		}
		//If counter is zero, the global isMatch variable becomes false (signifying no matches found)
		//Otherwise a match was found and isMatch becomes true.
		if (matchCounter == 0){
			this.isMatch = false;
		}
		else{
			this.isMatch = true;
		}
	},
	checkMatchRepeat: function(){
		//If the same key is pressed twice, it is removed from allGuesses.
		if (this.isRepeat == true){
			this.allGuesses.pop(currentLetter);
		}
		//Letter has not been guessed and was a wrong guess, put the currentLetter in incorrectGuesses.
		if (this.isRepeat == false && this.isMatch == false){
			this.incorrectGuesses.push(currentLetter);
			this.guessesRemaining--;
		}
		//Letter has not been guessed and was a correct guess, put the currentLetter in correctGuesses.
		if (this.isRepeat == false && this.isMatch == true){
			this.correctGuesses.push(currentLetter);
			this.guessesRemaining--;
		}
	},	
}


wordObject.allGuesses.push(currentLetter);
wordObject.wordLetters = wordLetters;


console.log(wordObject.allGuesses);
console.log( wordObject.wordLetters);

wordObject.checkRepeat();
wordObject.checkMatch();
wordObject.checkMatchRepeat();


console.log("Correct Guesses: " + wordObject.correctGuesses);
console.log("Incorrect Guesses: " + wordObject.incorrectGuesses);
console.log("Guesses Remaining:" + wordObject.guessesRemaining);


exports.toLetterJS = wordObject.correctGuesses;



// //On every keyup...
// document.onkeyup = function(q) {

// 	//Check to see if the game is still in progress or if a win/lose has happened
// 	checkProgress();


// }





