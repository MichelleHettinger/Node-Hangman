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
		game.toMainJS.pickWord();
		console.log(game.toMainJS.chosenWord);
		letter.toMainJS.displayNewGuess();
       	promptUser();
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

       	playerStuff.userLetter = answers.letter;
        word.toMainJS.allGuesses.push(answers.letter);

        word.toMainJS.checkRepeat();


		letter.toMainJS.displayNewGuess();

       	console.log("Guesses remaining: " + word.toMainJS.guessesRemaining);

		letter.toMainJS.checkProgress();

		if (playerStuff.roundComplete == false){
			console.log("ffffffffffffffff");
		    promptUser();
		}

    })

}

playerStuff.startGame();

exports.toWordJS = playerStuff;
exports.toLetterJS = playerStuff;






