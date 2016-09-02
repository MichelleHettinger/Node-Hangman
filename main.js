var game = require("./game.js");				//The randomly chosen word comes from game.js
var inquirer = require("inquirer");				//NPM package inquirer
var word = require("./word.js")	

var userLetter = 'a';							//Only temporary letter

var playerStuff = {
	userLetter: "",
	winCount: 0,
	loseCount: 0,
}

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

var promptUser = function() {
    //IF THE LENGTH OF THE team ARRAY IS 8 OR HIGHER, NO MORE QUESTIONS WILL BE ASKED
    if (userLetter == "a") {
        console.log("\nWELCOME TO HANGMAN\n");
        game.toMainJS;
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
           
            var userLetter = answers.letter;

        })
	} else {
	    promptUser();
	}
}

promptUser();



