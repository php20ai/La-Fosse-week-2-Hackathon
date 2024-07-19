const prompt = require("prompt-sync")()
const {getRandNumber, displayWelcomeMessage, displayOptionsAndGetUserInput, gameLogic, calculateGameResult, showGameResult} = require("./rockPaperScissors")
let stationary = ["rock", "paper", "scissors"]

let playerName=prompt("Enter your name: ")

displayWelcomeMessage(playerName)

console.log("This is display: ", displayWelcomeMessage(playerName)
)





