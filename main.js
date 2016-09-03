var game = require("./game.js");				//The randomly chosen word comes from game.js
var word = require("./word.js")	
var letter = require("./letter.js");

var inquirer = require("inquirer");				//NPM package inquirer

var userLetter = 'a';							//Only temporary letter

var playerStuff = {
	userLetter: "",
	winCount: 0,
	loseCount: 0,
	startGame: function(){
		console.log("\nWELCOME TO 80's HANGMAN\n");
		game.toMainJS.pickWord();
		console.log(game.toMainJS.chosenWord);
		letter.toMainJS.displayNewGuess();
	}
}


var promptUser = function() {
    if (userLetter == "a") {
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
           	playerStuff.userLetter = answers.letter;
            word.toMainJS.allGuesses.push(answers.letter);

            word.toMainJS.checkRepeat();
           	word.toMainJS.checkMatch();
           	word.toMainJS.checkMatchRepeat();
			console.log(word.toMainJS.allGuesses);
			letter.toMainJS.displayNewGuess();


        })
	} else {
	    promptUser();
	}
}

playerStuff.startGame();
promptUser();



exports.toWordJS = playerStuff;

// function checkProgress(){
// 	var counter = 0;

// 	//Loop a number of times equal to the length of the band name. 
// 	//If a guess is equal to the the band letter at the same index, add 1 to the counter.
// 	for (var i=0; i<bandLetters.length; i++){
// 		if (correctGuessesInOrder[i] == bandLetters[i]){
// 			counter++;
// 		}
// 	}

// 	//If the counter is the length of the band name, the user has won.
// 	if (counter == bandLetters.length){
// 		alert("You win!");
// 		winCount++;
// 		changeWord();
// 	}
// 	//If the number of guesses remaining is zero, the user has lost.
// 	if (guessesRemaining == 0){
// 		alert("You lose!");
// 		loseCount++;
// 		changeWord();
// 	}
// }





