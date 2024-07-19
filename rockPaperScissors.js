const prompt = require("prompt-sync")()

function getRandNumber(min, max) {
    let randNum = Math.random()
    while (randNum === 1) {
        randNum = Math.random()
    }
    let resultRandNum = (Math.random())*(max-min) + min 
    return Math.floor(resultRandNum)
}


///////////////////////////////////////

function displayWelcomeMessage(input){
    console.log(`Hi ${input}, Welcome to Rock Paper Scissors Game!`)
    let readyPlay = prompt(`Are you ready to play ? 
        Type Y for Yes
        Type N for No/Quit 
        `)
    let readyPlaylowercase = readyPlay.toLowerCase()
    let count = 0
    while (readyPlaylowercase!=="y" && readyPlaylowercase!=="n" && readyPlaylowercase!=="q" && count < 3){
        let readyPlay = prompt(`Sorry, kindly can you enter Y, N or Quit`)
        readyPlaylowercase = readyPlay.toLowerCase()
        count+=1
    }

    let count2 = 0

    while (readyPlaylowercase!== "n" && count2 < 3 ){
        let quitMessage = prompt("Are you sure you want to quit ? Type Y for Yes Type N for No")
        let quitMessageLower = quitMessage.toLowerCase()
        let count = 0 
        while (quitMessageLower !== "y" && quitMessageLower!== "n" && count < 3) {
            let quitMessage = prompt("Sorry, kindly enter Y or N")
            quitMessageLower = quitMessage.toLowerCase()
            count +=1
        }
        if (count===2) {
            return console.log(`Sorry the game has ended. To start the game type "start"`)
        }
    }
    
    return readyPlaylowercase 

}

/////////////////////////////////////////

function displayOptionsAndGetUserInput(){
    console.log(`Lets start!`)
    console.log('Kindly select the following options:')
    let playerInput = prompt(`1.Rock
            2.Paper
            3.Scissors
            Kindly can you enter 1, 2 or 3: `)
    let count = 0
     while (playerInput!=="1" && playerInput!=="2" && playerInput !=="3" && count<3) {
        let playerInput = prompt(`Sorry, kindly can you enter 1, 2 or 3: `)
        
        count+=1
    } 
    
    if (count===2) {
        return console.log(`Sorry the game has ended. To start the game type "start"`)
    }
        
    return Number(playerInput)-1  
}

////////////////////////////////////////////



// creating a function that gives random number between two whole number
// min and max, where min <= max:
///////////////////////////
function gameLogic() {

    let compRandNum = getRandNumber(0, 3)

    let computerInput = stationary[compRandNum]
    let playerOption = displayOptionsAndGetUserInput() 
    let playerInput = stationary[playerOption]

    let playerScore = 0

    let compScore = 0

    let roundCount = 0


    while (roundCount < 9){

        let join = computerInput + "|" + playerInput

        switch(join) {
            case "paper|rock":
            case "scissors| paper":
            case "rock|scissors":
                console.log("Computer has won this round!")
                compScore+=1
                roundCount+=1
                break
            case "rock|paper":
            case "paper|scissors":
            case "scissors|rock":
                console.log("Computer has won this round!")
                playerScore += 1 
                roundCount+=1
                break
            default:
                console.log("It's a draw!")
                roundCount += 1
                break
        }

        playerOption = displayOptionsAndGetUserInput() 
        playerInput = stationary[playerOption]
        computerInput = stationary[compRandNum]


    }


}

////////////////////////////////////////////////////////
function calculateGameResult(score1, score2){
    if (score1 > score2) {
        return console.log(`You have won the game. Welldone!`)
    } else if (score1 < score2) {
        return console.log(`The computer has won the game.`)
    } else {
        return console.log(`It's a draw.`)
    }
}

//////////////////////////////////////////////////////

function showGameResult() {
    console.log(`The final result of the game is....... `)
    setTimeout(calculateGameResult, 4000)
}

module.exports = {getRandNumber, displayWelcomeMessage, displayOptionsAndGetUserInput, gameLogic, calculateGameResult, showGameResult}


