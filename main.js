var game = require("./game.js");				//The randomly chosen word comes from game.js
var word = require("./word.js")	
var letter = require("./letter.js");

var inquirer = require("inquirer");				//NPM package inquirer

var playerStuff = {
	userLetter: "",
	roundComplete: false,
	startGame: function(){
		console.log("\nWELCOME TO 80's HANGMAN\n");
		game.toMainJS.pickWord();
		console.log(game.toMainJS.chosenWord);
		letter.toMainJS.displayNewGuess();

		promptUser();
	},
	startRound: function(){
			this.roundComplete = false;

			game.toMainJS.pickWord();
			console.log(game.toMainJS.chosenWord);
			letter.toMainJS.displayNewGuess();




	},
	resetVariables: function(){

		word.toMainJS.allGuesses = [];
		word.toMainJS.incorrectGuesses = [];
		word.toMainJS.correctGuesses = [];
		word.toMainJS.isMatch = null;
		word.toMainJS.isRepeat = null;
		word.toMainJS.guessesRemaining = 15;

		console.log(this.roundComplete);
	}
}


var promptUser = function() {
    inquirer.prompt([{
        name: "letter",
        message: "Give me a letter: ",
        validate: function(value) {
            if (isNaN(value) == true) {
                return true;
            }
            else {
            	return false;
            }
        }
    }]).then(function(answers) {

		console.log("--------------------------------- \n");

		//Store the input letter and push it into an allGuesses array
       	playerStuff.userLetter = answers.letter;
        word.toMainJS.allGuesses.push(answers.letter);

        //Check the user input against the random word
        word.toMainJS.checkRepeat();

        //Display the letters or underscores for the random word
		letter.toMainJS.displayNewGuess();


       	console.log("Guesses remaining: " + word.toMainJS.guessesRemaining);

       	//Check to see if the game is still in progress
		letter.toMainJS.checkProgress();

		if (playerStuff.roundComplete == false){
			console.log("Round in progress");

		    promptUser();
		}
		else if (playerStuff.roundComplete == true){
			console.log("Round NOT in progress");
			playerStuff.startRound();
		}

    })

}

playerStuff.startGame();

exports.toWordJS = playerStuff;
exports.toLetterJS = playerStuff;






