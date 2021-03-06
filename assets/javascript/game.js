//variation ===============================

var winsText = document.getElementById("wins-Text");
var lossesText = document.getElementById("losses-Text");
var guessTurns = document.getElementById("guessTurns-Text");
var guessesText = document.getElementById("guesses-Text");

var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

var userChoices = [];

var wins = 0;
var losses = 0;
var totalGuess = 9;

var init = function () {
    totalGuess = 9;
    userChoices = [];
};



document.onkeyup = function (event) {
    //user chooses a letter by clicking 1 alphabet key.
    var userGuesses = event.key.toLocaleLowerCase();

    userChoices.push(userGuesses);

    //computer random chooses 1 alphabet key.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    //alert("User guess: " + userGuesses);
    // alert("Computer guess: " + computerGuess);

    //checks to see if the letter match. if the letter match, wins adds 1.
    //if the letter not match, guessturn -1. 
    if (userGuesses === computerGuess) {
        console.log("You wins");
        wins++;
        init();
        alert("Your guess is correct!")
    } else {
        totalGuess--;
    }
    //Users can continuing chossing until guessturn = 0,

    if (totalGuess === 0) {
        losses++;
        init();
        alert("Please try again!")
    }



    //if guessturn =0, adds to looses. Game refresh.

    //call out the variable and replace variable by something
    winsText.textContent = wins;
    guessTurns.textContent = totalGuess;
    lossesText.textContent = losses;
    guessesText.textContent = userChoices;
};