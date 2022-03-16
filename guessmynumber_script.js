'use strict';
// Game logic

let secretNumber = Math.trunc(Math.random()*20)+1;


let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function() {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);

    // When there is no input
    if (!guess) {
        document.querySelector(".message").textContent = "No Number ⛔️";
    } 
    // When player wins
    else if (guess === secretNumber) {
        document.querySelector(".message").textContent = "Correct Number 🥳";
        document.querySelector(".number").textContent = secretNumber;
        console.log(secretNumber);
        // Changes background colour for correct guess
        document.querySelector("body").style.backgroundColor = "#60b347";
        // Changes box width for correct guess
        document.querySelector(".number").style.width = "30rem";
        // Updates Highscore
        if(score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }
    } 
    // When guess is wrong
    else if (guess !== secretNumber) {
        if(score > 1) {
        // Conditional (ternary) operator: guess > secretNumber ? "Guess to HIGH 📈 " : "Guess to LOW 📉 ";
        document.querySelector(".message").textContent = guess > secretNumber ? "Guess to HIGH 📈 " : "Guess to LOW 📉 ";
        score--;
        document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "You LOST the game 😩";
            document.querySelector(".score").textContent = 0;
        }
    } 
});

// Configuring the "Again" button
document.querySelector(".again").addEventListener("click", function() {
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
});