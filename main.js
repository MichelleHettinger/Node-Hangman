var game = require("./game.js");				//The randomly chosen word comes from game.js
var inquirer = require("inquirer");				//NPM package inquirer
var word = require("./word.js")	

var userLetter = "a";							//Only temporary letter


var promptUser = function(){
	inquirer.prompt([{
		name: "letter",
		message: "Give me a letter."
	}]).then(function(answers) {
		//Stuff
		console.log("You guessed " + answers.letter);
		userLetter = answers.letter;
	})
}

// promptUser();

exports.toWordJS = userLetter;

